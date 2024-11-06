import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookTables from "../home/bookTables"
import Bookcard from '../home/bookcard';


const Home = () => {
    const [book, setBook] = useState([])
    const [showType, setShowType] = useState("table");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/books")
            .then((response) => {
                console.log("ok bitch we are in")
                setBook(response.data.data)
                console.log(response.data.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                console.log("ok")
            })

    }, [])



    return (
        <div className='p-4'>
            <div className="flex justify-center items-center gap-x-4 ">
                <button className='bg-sky-300 hover:bg-slate-600 px-4 py-1 rounded-lg' onClick={() => setShowType("table")}>table view </button>

                <button className='bg-sky-300 hover:bg-slate-600 px-4 py-1 rounded-lg' onClick={() => setShowType("book")}>book view </button>

            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to="/books/CreateBook">
                    <MdOutlineAddBox className='text-sky-800 text-4xl'></MdOutlineAddBox>
                </Link>
            </div>

            {loading ? (<Spinner />) : (
                showType === "table" ? <BookTables book={book} /> : <Bookcard ok={book} />

            )

            }
        </div>
    )
}

export default Home
