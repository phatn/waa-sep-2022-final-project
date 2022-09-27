import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export default function FavoriteProperty(props){
    const [propertyStatea, setPropertyStatea]=useState();
    const propertyState = useSelector((state) => state.property);
    const disptch = useDispatch()

    const getPropertyByEmail=async ()=>{
        const result = await axios.get("http://localhost:8080/users/phat@gmail.com/favourites");
        setPropertyStatea(result.data);
    }

    useEffect(()=>{
        getPropertyByEmail();
    },[]);
    return(
        <div>
            {propertyState.property.pictures.map(p=>{
                <img src={p}/>
            })}

        </div>
    )
}