import React from "react";
import BookService from "../services/book.service";
import { useNavigate } from "react-router";


const BookCard = (props) => {
    const navigate = useNavigate();
  const handleDelete = async (itemId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Book?"
    );
    if (!isConfirmed) return;

    try {
      const response = await BookService.deleteBook(itemId)
      if (response.status === 200) {
        alert("Book deleted successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.coverImage} alt={props.itemType} />
      </figure>
           <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
      
          <p><strong>Author:</strong> {props.author} </p>
         <p> <strong>Category:</strong> {props.category} </p>
          <p><strong>Year:</strong> {props.publishYear} </p>
          <p><strong>ISBN:</strong> {props.isbn} </p>
          <p><strong>Language:</strong> {props.language}</p>
        
        
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(props.itemId)}
              className="btn btn-soft btn-error"
            >
              Delete
            </button>
            <a
              href={"/updateBook/" + props.itemId}
              className="btn btn-soft btn-warning"
            >
              Edit
            </a>
          </div>
        
      </div>
    </div>
  );
};

export default BookCard;