import Pharm from "../model/pharmModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose"


export const addMedicine = asyncHandler(async (req, res) => {
    const { drugName, description, unitOfPricing, drugCode, price } = req.body;

    if (!drugName || !description || !unitOfPricing || !drugCode) {
        res.status(400).json({ error: 'this field is required'})
    }

    const newMedicine = await Pharm.create({
        drugName,
        description,
        unitOfPricing,
        drugCode,
        price
    })

    if (newMedicine) {
        res.status(200).send(newMedicine)

    } else {
        res.status(401)
        throw new Error('this medicine was not added')
    }

})


export const allMedicines = asyncHandler(async (req, res) => {
    const medicines = await Pharm.find()

    if (medicines) {
        res.status(200).send(medicines)

    } else {
        res.status(400)
        throw new Error('all medicines were not be found')
    }
})


export const removeMedicine = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid ID' });
    }

    const removedMed = await Pharm.findByIdAndDelete(id)
    if (removedMed) {
        res.status(201).send(removedMed)
    } else {
        res.status(400)
        throw new Error(`medicine with id ${id} does not exist`)
    }

})


export const updateMedicine = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { drugName, description, unitOfPricing, drugCode, price } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid ID' });
    }

    if (!drugName || !description || !drugCode || !unitOfPricing) {
        res.status(400).json({ error: 'this field is a required field' })
    }

    if (price <= 0) {
        res.status(400).json({ error: 'Price must be greater than 0' });
        return;
    }


    const updateMed = req.body;
    const editedMedicine = await Pharm.updateOne(
        { _id: id },
        updateMed
    );

    if (editedMedicine) {
        res.status(200).send(editedMedicine)

    } else {
        res.status(400)
        throw new Error('this medicine could not be updated')
    }
})


export const singleMedicine = asyncHandler(async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid ID' });
    }

    const medicine = await Pharm.findById(id)

    if (medicine) {
        res.status(200).send(medicine)

    } else {
        res.status(400)
        throw new Error(`medicine with id ${id} was not found`)
    }
})