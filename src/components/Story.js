
export default function Story({username, img}) {
  return (
    <div>
        <img className='h-14 rounded-full border-red-400 border-2 p-[1.5px] cursor-pointer hover:scale-110 transition-transform duration-200 ease-out' src={img} alt={username} />
        <p className="w-14 truncate text-xs">{username}</p>
    </div>
  )
}
