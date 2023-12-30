import {
    Button,
    DatePicker,
    DatePickerProps,
    Input,
    Select,
} from "antd";

import { useEffect, useState } from "react";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { BookType } from "../types/dataTypes";
import { bookGenres } from "../constants/booksGenres";
import { Option } from "antd/es/mentions";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useEditBookMutation, useGetBookByIdQuery } from "../app/book/bookApi";
import { getToken } from "../helpers/getToken";
import toast from "react-hot-toast";


export default function EditBook() {
    const token = getToken() as string;
    const [book, setBook] = useState<BookType | undefined>()
    const [publication_year, setPublication_year] = useState<string>();
    const [genre, setGenre] = useState<string>();
    const { id } = useParams();
    const bookId = id as string;
    const { data, isSuccess } = useGetBookByIdQuery(bookId);
    const [editBook, { isSuccess: success, isError, error, isLoading }] = useEditBookMutation()

    const handleYearChange: DatePickerProps['onChange'] = (date, dateString) => {
        setPublication_year(dateString)
    };

    const handleGenreChange = (value: string) => {
        setGenre(value)
    }
    const handleEdit = (values: Partial<BookType>) => {
        const data = {
            title: values?.title ?? book?.title,
            author: values?.author ?? book?.author,
            genre: genre ?? book?.genre,
            publication_year: publication_year ?? book?.publication_year
        }
        editBook({ data, token, bookId })
    }

    useEffect(() => {
        if (isSuccess) {
            setBook(data?.data)
        }

        if (isLoading) toast.loading('Loading...', { id: 'editBook' })
        if (success) {
            toast.success('Success', { id: 'editBook' })
        }
        if (isError) {
            const anyError: any = error;
            toast.error(anyError.data.error, { id: 'editBook' });
        }
    }, [data, isSuccess, success, isLoading, isError, error])
    return (
        <div className="flex  flex-col justify-center items-center mb-5">
            <div className="border w-1/2  p-8 rounded-lg">

                <h1 className="text-center text-2xl mb-5">Update Book Info </h1>

                {book && <Form labelCol={{ span: 15 }} layout="vertical"
                    onFinish={handleEdit}
                >
                    <Form.Item<BookType>
                        label="Title"
                        className="w-full mb-1"
                        name="title"
                    >
                        <Input defaultValue={book?.title} className="" />

                    </Form.Item>
                    <Form.Item<BookType>
                        label="Author"
                        className="w-full mb-1"
                        name="author"
                    >

                        <Input defaultValue={book?.author} placeholder=" " className="" />

                    </Form.Item>
                    <Form.Item<BookType> name="genre" className="mb-1" label="Genre">
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={handleGenreChange}
                            defaultValue={book?.genre}
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

                    >
                        <DatePicker
                            defaultValue={dayjs('2020')}
                            onChange={handleYearChange}
                            className="block" picker="year" />
                    </Form.Item>

                    <Form.Item className='flex justify-end' >
                        <Button className='text-sky-500 bg-sky-100' type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
                }
            </div>
        </div>
    );
}
