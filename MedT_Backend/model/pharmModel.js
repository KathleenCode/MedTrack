import {Schema, model} from "mongoose";

const pharmSchema = new Schema({
    drugName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    unitOfPricing: {
        type: String,
        required: true
    },
    drugCode: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                return value > 0;
            },
            message: "price must be greater than 0"
        }
    }
})


const Pharm = model('pharm', pharmSchema);

export default Pharm;

