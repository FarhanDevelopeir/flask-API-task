import React from 'react'

const ResultsTable = (props) => {
    const result = props.result
    const setOpenModal = props.setOpenModal
    const setResult = props.setResult
    const setSpecificItem = props.setSpecificItem
    console.log(result)

    const handleDetails=(id)=>{
        setOpenModal(true)
        const res = result.filter((product)=>product.id===id);
        // console.log(res.data)
        setSpecificItem(res)
        console.log(id);
    }
  return (
    <div className='p-3'>
        

<div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead class="text-sm text-white font-semibold bg-gray-600 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Published
                </th>
                <th scope="col" class="px-6 py-3">
                    Authors
                </th>
                <th scope="col" class="px-6 py-3">
                    Details
                </th>
            </tr>
        </thead>
        <tbody>
            {result.length ? result.map((item,index)=>{
               const date = new Date(item.published)
               const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

                return(
                    <>
                    <tr key={index} class="bg-gray-500 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                {item.title.split(' ').slice(0, 2).join(' ')}
            {item.title.split(' ').length > 2 ? ' ...' : ''}
                </th>
                <td class="px-6 py-4">
                    {formattedDate}
                </td>
                <td class="px-6 py-4">
                    {item.authors.length}
                </td>
               
                <td class="px-6 py-4">
                    <a href="#" onClick={()=>handleDetails(item.id)} class=" rounded-md py-1 px-2 bg-blue-500 font-semibold  focus:ring-2 focus:ring-blue-900 ">View</a>
                </td>
            </tr>
            </>
                )
            }):''}
            
        
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ResultsTable