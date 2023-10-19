import Image from "next/image";
import {AiOutlineSearch, AiFillHome, AiOutlinePlusCircle} from "react-icons/ai"

export default function Header(){
    return (
        <div className="flex items-center justify-between mx-4 max-w-6xl xl:mx-auto mt-5">
            {/* left side */}
            <div className="cursor-pointer hidden lg:inline-grid">
                <Image
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                width={100}
                height={100}
                />
            </div>
            <div className="cursor-pointer lg:hidden w-10">
                <Image
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png'
                className=""
                width= {40}
                height={100}
                />
            </div>

            {/* Middle */}
            <div className="relative">
                <AiOutlineSearch className="absolute top-3 left-2 text-gray-500"/>
                <input type="text" placeholder="search" className="border-gray-500 text-sm rounded-md h-9 pl-8 bg-gray-50 focus:ring-black focus:border-black" />
            </div>
            {/* right side */}
            <div className="flex items-center space-x-4">
                <AiFillHome className="hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 duration-200 "/>
                <AiOutlinePlusCircle className="text-2xl cursor-pointer hover:scale-125 duration-200"/>

                <img src="https://media.licdn.com/dms/image/D4E03AQHBjOrw1Q6Wkg/profile-displayphoto-shrink_800_800/0/1674905933454?e=2147483647&v=beta&t=703Vp4meIvx6sflUjurVVtvPJpxXCQj9zBjxBz7Jx_w" alt="profile" className="h-12 cursor-pointer rounded-full" />
            </div>
        </div>
    )
}