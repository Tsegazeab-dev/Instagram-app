import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid md:grid-cols-3 max-w-6xl mx-auto">
   <section className="md:col-span-2">
    {/* stories */}
    <Stories/>
    {/* posts */}
    <Posts/>
   </section>
   <section className="hidden md:inline-grid col-span-1">
    {/* profile */}
    {/* sugesition */}
   </section>
   </main>
  )
  
}

export default Feed;