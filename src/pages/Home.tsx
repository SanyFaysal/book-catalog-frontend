import { useGetBooksQuery } from "../app/book/bookApi";
import BookCard from "../components/card/BookCard";
import HomeHeroSection from "../components/sections/HomeHeroSection";
import { BookType } from "../types/dataTypes";

export default function Home() {
  const query: any = {};
  query.limit = 10;
  const { data } = useGetBooksQuery(query)
  return (

    <div>
      <HomeHeroSection />
      <h2 className="text-center mt-5 mb-8 text-4xl">Most Recent Books</h2>
      <div className="grid lg:grid-cols-4 gap-4 mt-5">

        {
          data?.data?.map((book: BookType) => (
            <BookCard key={book?._id} book={book} />
          ))
        }
      </div>
    </div>
  )
}
