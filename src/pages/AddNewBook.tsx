import {
  Button,

  DatePicker,
  DatePickerProps,
  Input,

  Select,

} from "antd";

import { Form } from "antd";
import { BookType } from "../types/dataTypes";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import { bookGenres } from "../constants/booksGenres";
import { useAddBookMutation } from "../app/book/bookApi";
import { getToken } from "../utils/getToken";
import toast from "react-hot-toast";



export default function AddNewBook() {
  const token = getToken() as string
  const [publication_year, setPublication_year] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [addBook, { isSuccess, isError, error, isLoading }] = useAddBookMutation()


  const handleGenreChange = (value: string) => {
    setGenre(value)
  }
  const handleYearChange: DatePickerProps['onChange'] = (date, dateString) => {
    setPublication_year(dateString)
  };
  const onFinish = (values: any) => {
    const bookData = {
      title: values.title,
      author: values.author,
      genre,
      publication_year,
    }
    addBook({ bookData, token })
  }



  useEffect(() => {
    if (isLoading) toast.loading('Loading...', { id: 'addBook' })
    if (isSuccess) {
      toast.success('Login success', { id: 'addBook' })
    }
    if (isError) {
      const anyError: any = error;
      toast.error(anyError.data.error, { id: 'addBook' });
    }
  }, [isSuccess, isLoading, isError, error])

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="border rounded-lg w-1/2 px-8 py-7">


        <h1 className="text-center text-2xl mb-5">Add a new Book</h1>
        <Form
          labelCol={{ span: 15 }}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item<BookType>
            label="Title"
            className='w-full mb-1'
            name="title"
            rules={[{ required: true, message: 'Please input book title!' }]}
          >
            <Input name="title" placeholder=" " className="block w-full" />
          </Form.Item>
          <Form.Item<BookType>
            label="Author"
            className='w-full mb-1'
            name="author"
            rules={[{ required: true, message: 'Please insert author' }]}
          >
            <Input name="title" placeholder=" " className="" />
          </Form.Item>
          <Form.Item<BookType> name="genre" className="mb-1" label="Genre" rules={[{ required: true, message: 'Please add a genre!' }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={handleGenreChange}
              allowClear
            >
              {bookGenres.map((genre) => <Option key={genre} value={genre}>{genre}</Option>)
              }
            </Select>
          </Form.Item>

          <Form.Item<BookType>
            label="Publication Year"
            className='w-full'
            name="publication_year"
            rules={[{ required: true, message: 'Please insert publication year' }]}
          >
            <DatePicker onChange={handleYearChange} className="block" picker="year" />
          </Form.Item>


          <Form.Item className='flex justify-end' >
            <Button className='text-sky-500 bg-sky-100' type="primary" htmlType="submit">
              Add Book
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
