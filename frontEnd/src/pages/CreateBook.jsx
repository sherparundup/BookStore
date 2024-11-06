import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { data } from 'autoprefixer'

const CreateBook = () => {
    const [loading, setLoading] = useState(false)
    const [tittle, SetTittle] = useState("");
    const [author, SetAuthor] = useState("");
    const [publishYear, SetPublishYear] = useState("");
    const navigate = useNavigate();
    const handleSavebook = () => {
        const data = {
            Tittle:tittle,
            Arthur:author,
            publishYear:publishYear 

        }
        setLoading(true);
        if(data.Tittle==""||data.Arthur==""||data.publishYear<0){
            return alert("empty")

        }
        axios.post("http://localhost:5000/books", data)
            .then(() => {
                setLoading(false)
                navigate("/")
                console.log("are yo in?")

            })
            .catch((err) => {
                console.log("error")
                console.log(err)

            })

    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>createBook</h1>
            {loading ? (<Spinner />) : ""}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Tittle</label>
                    <input type="text"
                        value={tittle}
                        onChange={(e)=>SetTittle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Arthur</label>
                    <input type="text"
                        value={author}
                        onChange={(e)=>SetAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>publishYear</label>
                    <input type="number"
                        value={publishYear}
                        onChange={(e)=>SetPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSavebook}>save</button>
            </div>


        </div>
    )
}

export default CreateBook
