import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main>
   <section>
    {/* stories */}
    <Stories/>
    {/* posts */}
    <Posts/>
   </section>
   <section>
    {/* profile */}
    {/* sugesition */}
   </section>
   </main>
  )
  
}

export default Feed;