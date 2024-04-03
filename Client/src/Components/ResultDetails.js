import React from "react";

const ResultDetails = (props) => {
  const setOpenModal = props.setOpenModal;
  const result = props.result;
  const specificItem = props.specificItem;
  const authors = result[0].authors;
  console.log(authors);

  const date = new Date(specificItem[0].published);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  return (
    <div className="fixed inset-0 bg-opacity-50 bg-gray-950  p-2 flex justify-center items-center ">
      <div className="bg-white border-2 w-[90%]  md:ml-0 md:w-[60%]  shadow-2xl rounded-lg p-2">
        <div className="flex justify-between w-full border-b-2 pb-2 ">
          <h1 className="text-xl pl-3 font-semibold m-auto">Item Details</h1>

          <button onClick={() => setOpenModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className=" text-xs sm:text-[15px]    p-3">
          <h1 className="text-xl font-semibold ">Title</h1>
          <h1>{specificItem[0].title}</h1>
          <h1 className="text-xl font-semibold my-2">Published</h1>

          <h1>{formattedDate}</h1>
          <h1 className="text-xl font-semibold my-2 ">Authors</h1>
          <ul className="grid grid-cols-2 gap-4 md:w-[50%]  ">
            {authors.map((item) => {
              return (
                <>
                  <li className=" border  p-2  shadow-md rounded-3xl text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class=" w-8 h-8 md:w-10 md:h-10 m-auto"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="text-xs">{item.name}</span>
                  </li>
                </>
              );
            })}
          </ul>
          <h1 className="text-xl font-semibold my-2 overflow-y-auto">Summary</h1>
          <h1>{specificItem[0].summary}</h1>
        </div>
      </div>
    </div>
  );
};

export default ResultDetails;
