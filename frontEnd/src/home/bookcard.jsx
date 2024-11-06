import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { PiBookOpenTextLight } from "react-icons/pi"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookSingleCard from '../components/BookSingleCard';



const bookcard = ({ ok }) => {
  return (
    <div  className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        ok.map((book) => (
          <BookSingleCard  key={book._id} book={book}/>


          
        )
        )
      }




    </div>
  )
}

export default bookcard
