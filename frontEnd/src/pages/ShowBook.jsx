import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import { data } from 'autoprefixer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ShowBook = () => {
    const [book, setBook] = useState({});  // Initialize as null
    const [loading, setLoading] = useState(false);
    const { id } = useParams();  // Ensure 'Tittle' is correctly used in URL
  
    useEffect(() => {
      console.log({ id });
      setLoading(true);
  
      console.log("we are");
      axios.get(`http://localhost:5000/books/${id}`)
        .then((res) => {
          setBook(res.data);  // Set the book data correctly
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, [id]);  // Add Tittle as dependency
  
    if (loading) {
      return <Spinner />;
    }
  
    if (!book) {  // Ensure book is not null before rendering
      return <div>No book data available</div>;
    }    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show book</h1>
            {loading ? (<Spinner />) : (
                <div className="flex flex-col border-2 border-r-sky-400 rounded-xl w-fitp-4">
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">ID</span>
                        <span>{book._id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Tittle</span>
                        <span>{book.Tittle}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Author</span>
                        <span>{book.Arthur}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">publishYear</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Created Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">updatedAt</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>


                </div>


            )}



        </div>
    )
}

export default ShowBook
