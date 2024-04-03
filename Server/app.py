from flask import Flask, request, jsonify
import requests
import xml.etree.ElementTree as ET
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/search_arxiv', methods=['GET', 'POST'])  
def search_arxiv():
    if request.method == 'GET':
       
        search_query = request.args.get('query', default='electron', type=str)
        max_results = request.args.get('max', default=5, type=int)
    elif request.method == 'POST':
       
        data = request.json
        search_query = data.get('query', '')
        max_results = data.get('max', )
    
    #  arxiv API 
    search_query = f"all:{search_query}"
    url = "http://export.arxiv.org/api/query"
    params = {
        "search_query": search_query,
        "start": 0,
        "max_results": max_results
    }
    
    #  request to the API
    response = requests.get(url, params=params)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the XML
        root = ET.fromstring(response.content)
        ns = {'atom': 'http://www.w3.org/2005/Atom', 'arxiv': 'http://arxiv.org/schemas/atom'}
        
        # Extract entries
        entries = []
        for entry in root.findall('atom:entry', ns):
            doi = entry.find('arxiv:doi', ns)
            journal_ref = entry.find('arxiv:journal_ref', ns)
            authors = []
            for author in entry.findall('atom:author', ns):
                author_name = author.find('atom:name', ns).text
                affiliation = author.find('arxiv:affiliation', ns)
                if affiliation is not None:
                    affiliation = affiliation.text
                else:
                    affiliation = "Not available"
                authors.append({"name": author_name, "affiliation": affiliation})
            
            entry_data = {
                "title": entry.find('atom:title', ns).text.strip(),
                "summary": entry.find('atom:summary', ns).text.strip(),
                "authors": authors,
                "published": entry.find('atom:published', ns).text,
                "id": entry.find('atom:id', ns).text,
                "doi": doi.text if doi is not None else "Not available",
                "journal_ref": journal_ref.text if journal_ref is not None else "Not available"
            }
            entries.append(entry_data)
        
        return jsonify(entries)
    else:
        return jsonify({"error": "Failed to retrieve data from arXiv"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
