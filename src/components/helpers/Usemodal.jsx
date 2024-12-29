import React,{useState} from "react"

export const Usemodal=(initialValue=false)=>{


    const[isOpen,setIsopen]=useState(initialValue)

    const modalOpen=()=>setIsopen(true)
    const modalClose=()=>setIsopen(false)
    
    return[isOpen,modalClose,modalOpen]
   
    
}