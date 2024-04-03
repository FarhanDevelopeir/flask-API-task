import logo from "./logo.svg";
import "./App.css";
import sendicon from "./Images/message.png";
import { useState } from "react";
import FormData from "./Components/FormData";
import ResultsTable from "./Components/ResultsTable";
import ResultDetails from "./Components/ResultDetails";

function App(props) {
  const [topic, setTpoic] = useState("");
  const [items, setItems] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState([]);
  const [specificItem, setSpecificItem] = useState([]);

  return (
    <div className="h-svh bg-gray-400">
      <div className=" py-16 h-svh  ">
        {/* <h1 className="text-3xl font-semibold text-center drop-shadow-xl mb-8">Translate Italian to English</h1> */}

        <div className="relative m-auto shadow-2xl shadow-slate-100 w-[90%] sm:w-[60%] md:w-[43%] lg:w-[35%] xl:w-[50%] border-double border-[9px] border-gray-600 rounded-[40px]  ">
          <div className=" absolute bg-gray-700 h-14 flex justify-center items-center   w-full rounded-t-[30px]">
            <div className=" h-2 w-[20%] bg-white rounded-md"></div>
            <div className="h-2 w-2 ml-2 bg-white rounded-full"></div>
          </div>
          <div className="md:p-8 pt-8">
            <FormData
              topic={topic}
              items={items}
              setResult={setResult}
              setTpoic={setTpoic}
              setItems={setItems}
            />
            <ResultsTable
              result={result}
              setOpenModal={setOpenModal}
              setResult={setResult}
              setSpecificItem={setSpecificItem}
              specificItem={specificItem}
            />

            {openModal ? (
              <ResultDetails 
              result={result} 
              setOpenModal={setOpenModal} 
              specificItem={specificItem}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
