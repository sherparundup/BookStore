import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/books/CreateBook' element={<CreateBook/>}></Route>
        <Route path='/books/DeleteBook/:id' element={<DeleteBook/>}></Route>
        <Route path='/books/EditBook/:id' element={<EditBook/>}></Route>
        <Route path='/books/details/:id' element={<ShowBook/>}></Route>
      </Routes>
  )
}

export default App
