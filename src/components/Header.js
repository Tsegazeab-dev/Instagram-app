import Image from "next/image";

export default function Header(){
    return (
        <div className="flex items-center justify-between max-w-6xl mx-auto">
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
            {/* right side */}
            <h1>Right side</h1>
        </div>
    )
}