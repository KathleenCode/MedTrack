import mongoose from "mongoose";
import dbConnection from "../db.js";
import Pharm from "../model/pharmModel.js";


const medicinesList = [
    {
        drugName: 'Calamine Lotion, 15%',
        description: 'Relief of skin irritations and itching caused by sunburn, poison ivy, sumac, and poison oak.', 
        unitOfPricing: '200 mL',
        drugCode: 'CALAMILO1',
        price: '4'
    },
    
    {
        drugName: 'Cefaclor Capsule, 500 mg',
        description: 'Antibiotic used to treat a wide variety of bacterial infections (such as middle ear, skin, urine and respiratory tract infections).',
        unitOfPricing: 'Capsule',
        drugCode: 'CEFACLCA2',
        price: '3.05'
    },
    {
        drugName: 'Diclofenac Gel',
        description: 'Treats arthritis of the knee.',
        unitOfPricing: '30 G',
        drugCode: 'DICLOFGE1',
        price: '3.3'
    },
    {
        drugName: 'Digoxin Elixir, 50 microgram/mL',
        description: 'For heart failure. Makes the heart pump blood more efficiently.',
        unitOfPricing: '60 ML',
        drugCode: 'DIGOXIEL1',
        price: '51.06'
    },
    {
        drugName: 'Granisetron Injection, 1 mg/1mL',
        description: 'Treats nausea and vomiting caused by other medical treatments.',
        unitOfPricing: 'Ampoule',
        drugCode: 'GRANISIN1',
        price: '29.53'
    },
    {
        drugName: 'Ibuprofen Tablet, 200 mg',
        description: 'Relieves pain from headache, dental pain, menstrual cramps or muscle aches.',
        unitOfPricing: 'Tablet',
        drugCode: 'IBUPROTA1',
        price: '0.05'
    },
    {
        drugName: 'Ketoconazole Cream, 30g',
        description: 'Treats pityriasis, a fungal infection that causes a lightening or darkening of the skin of the neck, chest, arms, or legs.',
        unitOfPricing: 'Tube',
        drugCode: 'KETOCOCR1',
        price: '5.5'
    },
    {
        drugName: 'Paclitaxel Injection, 6 mg/mL in 5 mL',
        description: 'For the initial treatment of locally advanced or metastatic breast cancer either in combination with an anthracycline in patients for whom anthracycline therapy is suitable, or in combination with trastuzumab, in patients who over-express HER-2 (human epidermal growth factor receptor 2).',
        unitOfPricing: 'Vial',
        drugCode: 'PACLITIN1',
        price: '200'
    },
    {
        drugName: 'Mebendazole Tablet, 100 mg',
        description: 'Treats intestinal worm infections such as pinworm, roundworm, and hookworm.',
        unitOfPricing: '6 Tablets',
        drugCode: 'MEBENDTA1',
        price: '1.8'
    },
    {
        drugName: 'Metronidazole Injection, 5 mg/mL in 100 mL',
        description: 'Treats infections that are proven or strongly suspected to be caused by bacteria.',
        unitOfPricing: 'Bottle',
        drugCode: 'METRONIN1',
        price: '2.5'
    }
];

export const pharmDB = async () => {
    try {
        await dbConnection();

        await Pharm.deleteMany({});
        await Pharm.insertMany(medicinesList);

        console.log("pharmacy database seeded successfully");

    } catch (error) {
        console.error("Error seeding database:", error);

    } finally {
        // mongoose.connection.close();
    }
};
