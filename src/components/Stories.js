"use client"

import { useEffect, useState } from "react"
import minifaker from 'minifaker'
import "minifaker/locales/en"
import { Poor_Story } from "next/font/google";
import Story from "./Story";
export default function Stories() {
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        const stories = minifaker.array(20, (index)=>({
            userName: minifaker.username({locale: "en"}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: index
        }) );
        setUserData(stories);
    },[])
console.log(userData)
  return (
    <div className="">
        {userData.map(item =>(
           <Story key={item.id} username={item.userName} img = {item.img}/>
        ))}
    </div>
  )
}
