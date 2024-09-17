import { useState } from "react"
import React from 'react';
import Friuts from "./Fruits";

export default function Register() {

  const[fruits,setFruits]=useState
  ([
    {fruitName:"apple",fruitPrice:40,fruitDescription:"keep the doctor away"},
    {fruitName:"apple",fruitPrice:50,fruitDescription:"keep the doctor away"},
    {fruitName:"apple",fruitPrice:60,fruitDescription:"keep the doctor away"},
    {fruitName:"apple",fruitPrice:70,fruitDescription:"keep the doctor away"}



  ])
  return (
    <div>
      <Friuts myfriuts={fruits}/>
     
    </div>
  )
}
