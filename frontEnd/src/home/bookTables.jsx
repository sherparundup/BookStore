import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const bookTables = ({book}) => {
  return (
    <div>
      <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>

                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Tittle</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>

                        </tr>
                    </thead>
                    <tbody>
                        {book.map((book, index) => 
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>{
                                    index+1}</td>
                                <td className='border border-slate-700 rounded-md text-center'>{
                                    book.Tittle}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{
                                    book.Arthur}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{
                                    book.publishYear}</td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <div className="flex justify-center gap-x-4">
                                            <Link to={`/books/details/${book._id}`}>
                                                <BsInfoCircle className="text-2xl text-green-800" />
                                            </Link>
                                            <Link to={`/books/EditBook/${book._id}`}>
                                                <AiOutlineEdit className="text-2xl text-yellow-600" />
                                            </Link>
                                            <Link to={`/books/DeleteBook/${book._id}`}>
                                                <MdOutlineDelete className="text-2xl text-red-600" />
                                            </Link>
                                        </div>

                                    </div>
                                </td>


                            </tr>


                        

                        )}


                    </tbody>

                </table>
      
    </div>
  )
}

export default bookTables
