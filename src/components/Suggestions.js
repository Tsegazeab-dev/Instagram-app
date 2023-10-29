"use client"
import { useEffect, useState } from "react"
import minifaker from 'minifaker'
export default function Suggestions () {
    const [Suggestions, setSuggestions] = useState([]);

    useEffect(()=>{
        const fetchSuggestions = minifaker.array(5, (index)=>({
            userName: minifaker.username({locale: "en"}).toLowerCase(),
            jobTitle: minifaker.jobTitle(),
            id: index
        }) );
        setSuggestions(fetchSuggestions)
    },[])
    console.log(Suggestions);
return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="font-bold text-gray-400">Suggestions for you</h3>
            <button className="font-semibold text-gray-600">See All</button>
        </div>
{Suggestions.map(suggestion =>(
    <div className="flex justify-between mt-3" key={suggestion.id}>
            <img className='h-10 rounded-full border p-[2px]' src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="" />
            <div className="flex-1 ml-4 text-sm">
                <p className="font-semibold">{suggestion.userName}</p>
                <p className="text-gray-400 w-[75%] truncate">{suggestion.jobTitle}</p>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Follow</button>
        </div>
))}
        
    </div>
)
}