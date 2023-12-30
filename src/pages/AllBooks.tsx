
import BookCard from "../components/card/BookCard";
import { Button, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetAllGenreQuery, useGetAllPublicationYearQuery, useGetBooksQuery } from "../app/book/bookApi";

import { useState } from "react";
import { SearchBookType } from "../types/dataTypes";


export default function AllBooks() {
  const navigate = useNavigate()
  const [query, setQuery] = useState<SearchBookType>()


  const { data } = useGetBooksQuery(query);
  const { data: genres } = useGetAllGenreQuery(undefined);
  const { data: publication_years } = useGetAllPublicationYearQuery(undefined);


  const genreOptions = genres?.data?.map((genre: string) => ({
    label: <p>{genre}</p>,
    value: genre,
  }))
  genreOptions?.unshift({ label: <p>All</p>, value: 'all' })

  const publicationYearOptions = publication_years?.data?.map((year: string) => ({
    label: <p>{year}</p>,
    value: year,
  }))
  publicationYearOptions?.unshift({ label: <p>All</p>, value: 'all' })

  const handleGenreChange = (genre: string) => {
    setQuery({ ...query, genre: genre })
  }
  const handleYearChange = (year: string) => {
    setQuery({ ...query, publication_year: year })
  }

  return (
    <div className="mt-4">
      <h1 className="text-2xl text-center">All Books</h1>

      <div className="my-5    grid grid-cols-5 gap-3 items-center">
        <h1 className="text-lg">Total Books: 25</h1>
        <div className="col-span-3">
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            <div className="col-span-1">
              <Select
                defaultValue="Available publication year"
                className="rounded-full w-full"
                options={publicationYearOptions}
                onChange={handleYearChange}
              />
            </div>
            <Input
              placeholder="Search books from here ..."
              onChange={(e: any) => setQuery({ ...query, searchTerm: e.target.value })}
              className="col-span-2 py-2 rounded-full px-4"
            />
            <div className="col-span-1">
              <Select
                style={{ margin: "20px !important" }}
                defaultValue="Available Genre"
                placeholder="Available Genre"
                className="rounded-full w-full"
                options={genreOptions}
                onChange={handleGenreChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          {" "}
          <Button onClick={() => navigate('/add-new-book')} className="bg-sky-50 text-sky-500 border-none">
            Add New Books
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data?.data?.map((book: any) => (
          <BookCard key={book?._id} book={book} />
        ))}
      </div>
    </div>
  );
}
