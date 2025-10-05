import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import JournalList from "../components/JournalList";
import JournalService from "../services/journal.service";
const Journals = () => {
  const [journal, setJournal] = useState([]);
  
 
  useEffect(() => {
    const getAllJournal = async () => {
      try {
        const response = await JournalService.getAllJournal()

        if (response.status === 200) {
          setJournal(response.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All journal",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllJournal();
  }, []);
  return (
    <div className="flexcontainer mx-auto">
      <div>
        <h1 className=" flex title justify-center text-3xl text-center m-5 p-5">
          Journals
        </h1>
        <div className="flex justify-center items-center my-6 space-x-4">
              <a href="/AddJournal" className="btn bg-green-500 text-white px-6">
                Add Journal
              </a>
            </div>
      </div >

      <JournalList journal={journal} />
    </div>
  );
};

export default Journals;
