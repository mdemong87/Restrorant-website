import Hero from './componnent/Hero'
import Favourites from "./componnent/Favourites";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <Hero />
      <Favourites/>
    </main>
  )
}
