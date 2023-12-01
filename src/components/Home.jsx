import axios from "axios";

import { useEffect, useState } from "react";
import nebula_logo from "../assets/nebula_logo.svg";

import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../features/formSlice";

function HeroContainer() {
  const [data, setData] = useState(false);
  const [url, setUrl] = useState(
    ""
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  async function fetchData() {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(`https://web-production-b2e5.up.railway.app//?url=${url}`);
      const result = response.data;
      console.log(result);
      setData(true);
      dispatch(setFormData(result));
    } catch (error) {
      setIsError(true); // Set isError to true if an error occurs
      console.error("API request error:", error);
    } finally {
      setIsLoading(false); // Set isLoading back to false when the request is completed
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="flex flex-col ">

          <nav className="m-8 py-2 px-8 font-sans text-center bg-gray-900 rounded-2xl">
            <div className="flex grid-cols-4 justify-between mx-auto text-lg font-medium text-gray-50">
              <div> <img src={nebula_logo} className="w-8 rotate"></img></div>
              <div className="font-bold text-2xl text-slate-500"> Nebula </div>
              {/*  <div className="bg-gray-50 text-gray-950 rounded-md basis-1/3"> Dashboard </div>
              <div className="bg-gray-200 text-gray-900 rounded-md basis-1/3"> Account </div> */}
              <div className="rounded-full w-4 h-4 border border-red-900 text-red-900 text-center text-xs mt-2"> i </div>
            </div>
          </nav>

          <div className="flex flex-col flex-wrap justify-center items-center m-20">
              <h1 className="text-gray-900 font-bold md:text-4xl mb-16 text-gradient">
                Let us do the magic for you.
              </h1>

              <form className="flex w-full justify-center items-center" onSubmit={handleSubmit} >
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm rounded-lg bg-slate-100 text-gray-700 border border-transparent	focus:border-red-900"
                    placeholder="paste your google form url here"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <button type="submit" className= "text-white bg-gray-900 rounded-lg text-sm font-bold w-36"> 
                  do magic. </button>
                </div>
              </form>

              {isLoading && (
                  <p className=" text-xl bg-white border text-black border-gray-300 rounded-lg hover:outline-slate-500 m-2 p-5 ">
                    Loading...
                  </p>
                )}
              {isError && (
                <p className=" bg-white text-xl border text-red-400 border-gray-300 rounded-lg hover:outline-slate-500 m-2 p-5 ">
                  Error: Unable to fetch data
                </p>
                )}

              {!isLoading && !isError && data && (
                <div className="fade-in show ">
                  <Cards />
                </div>
                )}
            </div>
      </div>
  );
}

export default HeroContainer;
