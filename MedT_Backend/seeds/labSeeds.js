import mongoose from "mongoose";
import dbConnection from "../db.js";
import Lab from "../model/labModel.js";


const labItems = [
    {
        itemName: "X-ray Machine",
        labType: "Radiology",
        mainCategory: "Imaging",
        subCategory: "X-ray",
        itemCode: "XR100",
        price: 150000
    },
    {
        itemName: "MRI Machine",
        labType: "Radiology",
        mainCategory: "Imaging",
        subCategory: "MRI",
        itemCode: "MRI200",
        price: 2500000
    },
    {
        itemName: "CT Scanner",
        labType: "Radiology",
        mainCategory: "Imaging",
        subCategory: "CT",
        itemCode: "CT300",
        price: 1800000
    },
    {
        itemName: "Blood Gas Analyzer",
        labType: "Laboratory",
        mainCategory: "Hematology",
        subCategory: "Blood Gas Analyzer",
        itemCode: "BGA300",
        price: 15000
    },
    {
        itemName: "Incubator",
        labType: "Laboratory",
        mainCategory: "Microbiology",
        subCategory: "Incubator",
        itemCode: "IN400",
        price: 5000
    },
    {
        itemName: "Ultrasound Machine",
        labType: "Radiology",
        mainCategory: "Imaging",
        subCategory: "Ultrasound",
        itemCode: "US400",
        price: 80000
    },
    {
        itemName: "Gamma Camera",
        labType: "Radiology",
        mainCategory: "Imaging",
        subCategory: "Nuclear Medicine",
        itemCode: "GC600",
        price: 600000
    },
    {
        itemName: "Chemistry Analyzer",
        labType: "Laboratory",
        mainCategory: "Biochemistry",
        subCategory: "Chemistry Analyzer",
        itemCode: "CA500",
        price: 20000
    },
    {
        itemName: "Hematology Analyzer",
        labType: "Laboratory",
        mainCategory: "Hematology",
        subCategory: "Hematology Analyzer",
        itemCode: "HA600",
        price: 18000
    },
    {
        itemName: "Electrolyte Analyzer",
        labType: "Laboratory",
        mainCategory: "Biochemistry",
        subCategory: "Electrolyte Analyzer",
        itemCode: "EA700",
        price: 12000
    } 
];

export const labDB = async () => {
    try {
        await dbConnection();

        await Lab.deleteMany({});
        await Lab.insertMany(labItems);

        console.log("lab database seeded successfully");

    } catch (error) {
        console.error("Error seeding lab database:", error);

    } finally {
        // mongoose.connection.close();
    }
};
