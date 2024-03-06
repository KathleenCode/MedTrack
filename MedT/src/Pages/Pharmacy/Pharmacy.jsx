import React, { useEffect } from 'react';
import Pharm from './Pharm';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPharmThunk, fetchPharmThunk } from "../../store/features/Pharmacy/PharmSlice";
import "./Pharm.css";
import toast, {Toaster} from 'react-hot-toast'
import PharmChart from '../../components/Charts/PharmChart';

export default function Pharmacy() {
    const [drugName, setDrugName] = useState("");
    const [description, setDescription] = useState("");
    const [unitOfPricing, setPricing] = useState("");
    const [drugCode, setCode] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const pharmitems = useSelector(state => state.pharmItems);
    // console.log(pharmitems);
    const isLoading = useSelector(state => state.loading);

    const add = (e) => {
        e.preventDefault();

        const pharmItem = {
            drugName,
            description,
            unitOfPricing,
            drugCode,
            price
        }
        console.log(pharmItem);
        dispatch(addPharmThunk(pharmItem));
        toast("Medicine added successfully", {
            position: "top-center",
            style: {
              background: "#BA324F",
              color: "white"
            },
            duration: 4000,
          });

        setDrugName("");
        setDescription("");
        setPricing("");
        setCode("");
        setPrice(0);
    }

    useEffect(() => {
        dispatch(fetchPharmThunk())
    }, [])


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            add(e);
            console.log('just clicked the enter key')
        }
    }
    
  return (
    <div className="ph">
        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1607_9770)">
        <path d="M7.6 2.5V7.5C7.6 7.55523 7.55523 7.6 7.5 7.6H2.5C1.67157 7.6 0.999998 8.27157 1 9.1L1.00001 14.9C1.00001 15.7284 1.67158 16.4 2.50001 16.4H7.50001C7.55524 16.4 7.60001 16.4448 7.60001 16.5L7.6 21.5C7.6 22.3284 8.27157 23 9.1 23H14.9054C15.7338 23 16.4054 22.3284 16.4054 21.5L16.4054 16.4994C16.4054 16.4444 16.4498 16.3997 16.5048 16.3994L21.5092 16.3686C22.334 16.3636 23 15.6935 23 14.8687L23 9.06873C23 8.2367 22.3228 7.56364 21.4908 7.56876L16.506 7.59938C16.4505 7.59972 16.4054 7.55485 16.4054 7.49938V2.5C16.4054 1.67157 15.7338 1 14.9054 1H9.1C8.27157 1 7.6 1.67157 7.6 2.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1607_9770">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg> */}

        <div className='pharmTop'>
            <div className="grup">
                <h3 className="formHeading">Please fill the form to add a new drug</h3>
                <form onSubmit={add} onKeyUp={handleKeyPress} className="form">
                    <Toaster />
                    <div className="formControl">
                        <label htmlFor="drugName">Drug Name</label>
                        <input 
                            type="text" placeholder="Type drug name here" id="drugName" name="drugName"
                            value={drugName} onChange={(e) => setDrugName(e.target.value)} 
                        /> <br />
                    </div>
                    <div className="formControl">
                        <label htmlFor="description">Description</label>
                        <input 
                            type="text" placeholder="describe drug" id="description" name="description"
                            value={description} onChange={(e) => setDescription(e.target.value)} 
                        /> <br />
                    </div>
                    <div className="formControl">
                        <label htmlFor="pricing">Unit of Pricing</label>
                        <input 
                            type="text" placeholder="Tablet" id="pricing" name="pricing"
                            value={unitOfPricing} onChange={(e) => setPricing(e.target.value)}
                        /> <br />
                    </div>
                    <div className="formControl">
                        <label htmlFor="code">Drug Code</label>
                        <input
                            type="text" placeholder="Aoc123FH" id="code" name="code"
                            value={drugCode} onChange={(e) => setCode(e.target.value)} 
                        /> <br />
                    </div>
                    <div className="formControl">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" placeholder="2.02" id="price" name="price" className="priceInput"
                            value={price} onChange={(e) => setPrice(e.target.value)} 
                        /> <br />
                    </div>    
                    <button className='addBtn' disabled={!drugName || !description || !unitOfPricing ||!drugCode || !price}>Add Drug</button>
                </form>
            </div>
            <div className="chart">
                    <PharmChart />
                </div>
        </div>

        {
            isLoading ? (<p>loading...</p>) : (  <Pharm pharmitems={pharmitems} />)
        }

    </div>
  )
}
