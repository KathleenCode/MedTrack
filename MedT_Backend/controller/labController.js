import Lab from "../model/labModel.js";
import asyncHandler from "express-async-handler"


export const addLabItem = asyncHandler(async (req, res) => {
    const { labItemName, mainCategory, subCategory, labItemCode, price } = req.body;

    const newLabItem = await Lab.create({
        itemtemName,
        mainCategory,
        subCategory,
        itemCode,
        price
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

    const removedItem = await Lab.findByIdAndDelete(id)
    if (removedItem) {
        res.status(200).send(removedItem)

    } else {
        res.status(400)
        throw new Error('item could not be removed')
    }
})


export const updateLabItem = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { labItemName, mainCategory, subCategory, labItemCode, price } = req.body;

    const updatedItems = { labItemName, mainCategory, subCategory, labItemCode, price }
    const editedItem = await Lab.updateOne(
        {_id: id},
        updatedItems,
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

