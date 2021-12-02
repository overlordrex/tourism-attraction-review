import React, { useState } from 'react'
import {FaQuoteLeft ,FaQuoteRight} from "react-icons/fa"
import "./tours.css"
import data from "./data"

export const Tours = () => {
    const [map,setMap] = useState(false)
    const [index , setIndex] = useState(0)  
    const {id,img,gMap,name,country,location,review} = data[index]
    
    const checkNumber = (number) =>{
        if(number > data.length -1){
            return 0
        }

        if(number < 0){
            return data.length - 1
        }

        return number

    }
    
    const next = ()=>{
        setIndex((index) =>{
            setMap(false)
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }

    const back = ()=>{
        setIndex((index) =>{
            setMap(false)
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    return (
        <article className="tour-box">
            <div className="head">
                <img src={img} alt="" className="tour-img"/>
                <div className={map? "map-box active" : "map-box"}>
                <iframe key={id} src={gMap}  allowFullScreen="" loading="lazy"></iframe>
            </div>

            </div>

            <div className="tour-info-container">
                <div className="tour-info">
                    <h4>{name}</h4>
                    <div className="country-box">
                     <h5>{country},</h5>
                     <h5 className="location">{location}</h5>
                    </div>
                </div>


                <button id="id" className="btn map-btn" onClick={()=>setMap(!map)}>
                    {map? "close map" : "view map"}
                </button>
            </div>

            <div className="overview">
                <p>
                    <FaQuoteLeft className="left-icon"/>
                    {review}
                    <FaQuoteRight className="right-icon"/>
                </p>
            </div>

            <div className="btn-container">
                <button className="back-btn btn" onClick={back}>back</button>
                <button className="next-btn btn" onClick={next}>next</button>
            </div>

            
        </article>
    )
}
