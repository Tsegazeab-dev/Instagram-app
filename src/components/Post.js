export default function Post({username, img, caption, profileImg, id}) {
  return (
    <div>
        <h1>{username}</h1>
        <img src={img} alt={caption} />
        <p>{caption}</p>
    </div>
  )
}
