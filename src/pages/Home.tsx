import { useGetBooksQuery } from "../app/book/bookApi";
import BookCard from "../components/card/BookCard";
import { BookType } from "../types/dataTypes";

export default function Home() {
  const { data } = useGetBooksQuery()
  return (
    <div className="grid grid-cols-3 gap-4">

      {
        data?.data?.map((book: BookType) => (
          <BookCard key={book?._id} book={book} />
        ))
      }
    </div>
  )
}
