import express from "express";
import { bookModel } from "../model/bookModel.js";
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const showBooks = await bookModel.find({})
        return res.status(200).json({ count: showBooks.length, data: showBooks })

    } catch (error) {

        console.log(error.message);
        res.status(500).send(error.message)

    }


})

//get a single book by id

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = await bookModel.findById(id);  // Use findById for MongoDB _id fields
        
        if (!book) {
            return res.status(404).send("Book not found");
        }
        
        return res.status(200).json(book);
        
    } catch (error) {
        console.log("Error fetching book by ID:", error.message);
        return res.status(500).send("Server error");
    }
});

// updayeBOOks
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.Tittle ||
            !req.body.Arthur ||
            !req.body.publishYear) {
                return res.status(400).send("Please fill all the values")


        }
        const id = req.params.id
        const result = await bookModel.findByIdAndUpdate(id, req.body)
        if (!result) {
            return res.status(400).send("Please fill all the values correctly")


        }
        else {
            return res.status(200).json("updated succesfully");

        }

    } catch (error) {
        console.error(error);  // Log the error for debugging
        return res.status(500).send("Server error");


    }
})


//post books

router.post("/", async (req, res) => {
    try {
        if (!req.body.Tittle ||
            !req.body.Arthur ||
            !req.body.publishYear) {

            return res.status(400).send("Please fill all the values")

        }


        const newBook = {
            Tittle: req.body.Tittle,
            Arthur: req.body.Arthur,
            publishYear: req.body.publishYear,
        }
        const book = await bookModel.create(newBook)
        res.status(201).json(book)

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)

    }

})

//delete
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const afterDelete = await bookModel.findByIdAndDelete(id)
        if (!afterDelete) {
            return res.status(404).send("id not found")
        }
        res.status(200).send("the Id is deleted")



    } catch (error) {
        res.status(500).send(error.message)

    }


})
export default router;
