import Lab from "../model/labModel.js";
import asyncHandler from "express-async-handler"
import mongoose from "mongoose"

export const addLabItem = asyncHandler(async (req, res) => {
    const { itemName, labType, mainCategory, subCategory, itemCode, price } = req.body;

    if (!itemName) {
        res.status(400).json({ error: 'item name is required' })
    }

    if (!itemCode) {
        res.status(400).json({ error: 'item code is required' })
    }

    const newLabItem = await Lab.create({
        itemName, labType, mainCategory, subCategory, itemCode, price
    })

    if (newLabItem) {
        res.status(200).send(newLabItem)

    } else {
        res.status(400)
        throw new Error('could not add new lab item')
    }
})


export const allLabItems = asyncHandler(async (req, res) => {
    const labItems = await Lab.find()

    if (labItems) {
        res.status(200).send(labItems)

    } else {
        res.send(400)
        throw new Error('could not find all items')
    }
})


export const removeLabItem = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid ID' });
    }

    const removedItem = await Lab.findByIdAndDelete(id)
    if (removedItem) {
        res.status(200).send(removedItem)

    } else {
        res.status(400)
        throw new Error(`item with id ${id} does not exist`)
    }
})


export const updateLabItem = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { itemName, labType, mainCategory, subCategory, itemCode, price } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid item ID'})
    }

    if (!itemName || !itemCode) {
        res.status(400).json({ error: 'this field is required' })
    }

    if (price <= 0) {
        res.status(400).json({ error: 'item price must be greater than 0' })
    }


    //const updatedItems = { itemName, labType, mainCategory, subCategory, itemCode, price }
    const updatedItems = req.body;
    const editedItem = await Lab.findOneAndUpdate(
        {_id: id},
        updatedItems,
        {new: true}
    );
    
    if (editedItem) {
        res.status(200).send(editedItem)

    } else {
        res.status(400)
        throw new Error('lab item could not be updated')
    }
})


export const singleItem = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const item = await Lab.findById(id)

    if (item) {
        res.status(200).send(item)

    } else {
        res.send(400)
        throw new Error(`could not find item with id ${id}`)
    }
})

