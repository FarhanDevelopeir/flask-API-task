import React, { useState } from "react";
import sendicon from "../Images/message.png";
import axios from "axios";

const FormData = (props) => {
  const items = props.items
  const topic = props.topic
  const setItems = props.setItems
  const setResult = props.setResult
  const setTpoic = props.setTpoic

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { items, topic };
    console.log(data);
    try {
      const res = await axios.post("http://localhost:5000/search_arxiv", {
        query: topic,
        max:items
      });
      console.log(res.data);

      setResult(res.data);
      
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChangeTopic = (e) => {
    setTpoic(e.target.value);
  };
  const handleChangeItems = (e) => {
    setItems(e.target.value);
  };
  return (
    <div>
      <form class=" mx-auto flex justify-around mt-10 " onSubmit={handleSubmit}>
        <input
          type="text"
          id="small-input"
          value={topic}
          onChange={handleChangeTopic}
          aria-describedby="helper-text-explanation"
          class="bg-g   border border-black w-[60%]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="enter topic"
        />
        <input
          type="number"
          value={items}
          onChange={handleChangeItems}
          class="bg-g   border border-black w-[25%]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="No. of Results"
        />
        <button>
          <img className="w-7 md:w-8 rotate-90" src={sendicon} />
        </button>
      </form>
    </div>
  );
};

export default FormData;
