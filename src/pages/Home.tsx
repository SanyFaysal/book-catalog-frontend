import { useGetBooksQuery } from "../app/book/bookApi";
import BookCard from "../components/card/BookCard";
import { BookType } from "../types/dataTypes";

export default function Home() {
  const query: any = {};
  query.limit = 10;
  const { data } = useGetBooksQuery(query)
  return (
    <div className="grid lg:grid-cols-4 gap-4">

      {
        data?.data?.map((book: BookType) => (
          <BookCard key={book?._id} book={book} />
        ))
      }
    </div>
  )
}
