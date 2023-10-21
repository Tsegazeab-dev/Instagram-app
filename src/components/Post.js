import {BsThreeDots} from 'react-icons/bs'
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
        <p>{caption}</p>
    </div>
  )
}
