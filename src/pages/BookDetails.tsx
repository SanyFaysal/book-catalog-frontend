import { Button, Card } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/card/ReviewCard";
import AddReviewModal from "../components/modal/AddReviewModal";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useGetBookByIdQuery } from "../app/book/bookApi";
import { ReviewType } from "../types/dataTypes";

export default function BookDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const bookId = id as string;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { data } = useGetBookByIdQuery(bookId)
    const book = data?.data;
    return (
        <div className=" mx-auto my-5">
            <div className="flex justify-between">

                <div>
                    <h1 className="text-xl font-semibold">	{book?.title} </h1>
                    <p>
                        by  <em className="font-semibold text-sm">{book?.author}</em>
                    </p>
                    <p className="mt-3">Published in <span className="font-semibold">{book?.publication_year}</span></p>
                </div>
                <div className="flex gap-3">
                    <Button onClick={() => navigate(`/edit-book/${bookId}`)} type="primary" ghost>
                        Edit
                    </Button>
                    <Button type="primary" danger ghost>
                        Delete
                    </Button>
                </div>
            </div>

            <h1>Genre : <span>{book?.genre}</span></h1>
            <div className="mt-5">
                <div className="flex justify-between mb-4 items-center">
                    <h5 className="font-semibold ">Reviews (<span>{book?.reviews?.length}</span>)</h5>
                    <Button onClick={() => setIsModalOpen(true)} className="flex items-center"><PlusOutlined /> Add Review</Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {book?.reviews?.map((review: ReviewType) => <ReviewCard review={review} key={review?._id} />)
                    }
                </div>
            </div>
            <AddReviewModal bookId={bookId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    );
}
