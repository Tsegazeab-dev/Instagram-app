import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

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
    <div className="fixed w-[31%]">
       {/* profile */}
    <MiniProfile/>
    {/* sugesition */}
    <Suggestions/>
    </div>
   
   </section>
   </main>
  )
  
}

export default Feed;