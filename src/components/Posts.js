import Post from "./Post"

export default function Posts() {
    const posts = [
        {
        id: 1,
        username: "Tsegazeab",
        profileImg: "https://media.licdn.com/dms/image/D4E03AQHBjOrw1Q6Wkg/profile-displayphoto-shrink_800_800/0/1674905933454?e=2147483647&v=beta&t=703Vp4meIvx6sflUjurVVtvPJpxXCQj9zBjxBz7Jx_w",
        img: "https://images.unsplash.com/photo-1697228428285-8c442346434a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Beautifully catch by our cameras"
    },
        {
        id: 2,
        username: "TM",
        profileImg: "https://media.licdn.com/dms/image/D4E03AQHBjOrw1Q6Wkg/profile-displayphoto-shrink_800_800/0/1674905933454?e=2147483647&v=beta&t=703Vp4meIvx6sflUjurVVtvPJpxXCQj9zBjxBz7Jx_w",
        img: "https://images.unsplash.com/photo-1697299261579-cee7a621aeee?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Build your dream home with us"
    },
]
  return (
    <div>
        {posts.map((item)=>(
            <Post key={item.id} username={item.username} img={item.img} userImg={item.profileImg} caption={item.caption}/>
        ))}
    </div>
  )
}
