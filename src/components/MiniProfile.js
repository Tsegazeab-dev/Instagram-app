import React from 'react'

function MiniProfile() {
  return (
    <div className=' flex justify-between mt-14 ml-10 items-center'>
        <img className='h-16 rounded-full border p-[2px]' src="https://media.licdn.com/dms/image/D4E03AQHBjOrw1Q6Wkg/profile-displayphoto-shrink_800_800/0/1674905933454?e=2147483647&v=beta&t=703Vp4meIvx6sflUjurVVtvPJpxXCQj9zBjxBz7Jx_w" alt="user-profile" />
        <div className="flex-1 ml-4">
            <h2 className='font-bold'>CodewithTm-dev</h2>
            <h3 className='text-gray-500 text-sm'>Welcome to instagram</h3>
        </div>
        <button className='text-sm text-blue-400 font-semibold'>Sign out</button>
    </div>
  )
}

export default MiniProfile;