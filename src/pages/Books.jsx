import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import Swal from "sweetalert2";
import BookService from "../services/book.service";
const Book = () => {
  const [book, setBook] = useState([]);
  
 
  useEffect(() => {
    const getAllBook = async () => {
      try {
        const response = await BookService.getAllBooks()

        if (response.status === 200) {
          setBook(response.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Book",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllBook();
  }, []);
  return (
    <div className="flexcontainer mx-auto">
      <div>
        <h1 className=" flex title justify-center text-3xl text-center m-5 p-5">
          Books
        </h1>
        <div className="flex justify-center items-center my-6 space-x-4">
              <a href="/AddBook" className="btn bg-green-500 text-white px-6">
                Add Book
              </a>
            </div>
      </div >

      <BookList books={book} />
    </div>
  );
};

export default Book;
