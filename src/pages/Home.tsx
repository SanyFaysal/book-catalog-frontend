import BookCard from "../components/card/BookCard";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4">

        {
            new Array(8).fill(null).map((_, index)=>(
                <BookCard key={index}/>
            ))
        }
    </div>
  )
}
