import {BsThreeDots, BsChatDots, BsBookmark} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiHappy} from "react-icons/bi"
export default function Post({username, img, caption, userImg, id}) {
  return (
    <div className=' bg-white my-7  border rounded-md'>
        {/* posts Header */}
        <div className="flex items-center p-5">
            <img className='w-12 rounded-full mr-3 p-1'src={userImg} alt={username} />
            <p className='font-bold flex-1'>{username}</p>
            <BsThreeDots/>
        </div>
        {/* post images */}
        
        <img className='object-cover w-full'src={img} alt={caption} />

        {/* post buttons */}
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <AiOutlineHeart className='btn'/>
            <BsChatDots className='btn'/>
          </div>
          <BsBookmark className='btn'/>
        </div>

        {/* post comments */}
        <p className="p-5 truncate"><span className='font-bold mr-2'>{username}</span>{caption}</p>

        {/* post comment box */}
        <form className="flex items-center p-4">
          <BiHappy className='text-xl'/>
          <input type="text" placeholder='Enter your comment...' className='flex-1 border-none focus:ring-0' />
          <button className='font-bold text-blue-400'>post</button>
        </form>
    </div>
  )
}
