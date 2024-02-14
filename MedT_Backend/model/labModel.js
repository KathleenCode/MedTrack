import {Schema, model} from "mongoose";

const labSchema = new Schema ({
    itemName: {
        type: String,
        required: true
    },
    mainCategory: {
        type: String,
        required: true,
        enum: ['radiology', 'laboratory']
    },
    subCategory: {
        type: String,
        required: true
    },
    itemCode: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})


const Lab = model('lab', labSchema);

export default Lab;