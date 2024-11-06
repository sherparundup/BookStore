import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    Tittle: {
        type: String,
        required: true
    },

    Arthur: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    
},
{
    timestamps: true  // corrected from "timeStamps"
}
)
export const bookModel = mongoose.model("book", bookSchema)