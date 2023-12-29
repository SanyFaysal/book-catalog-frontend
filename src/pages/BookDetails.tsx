import { Button, Card } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/card/ReviewCard";
import AddReviewModal from "../components/modal/AddReviewModal";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useGetBookByIdQuery } from "../app/book/bookApi";
import { ReviewType } from "../types/dataTypes";
import DeleteBookConfirmModal from "../components/modal/DeleteBookConfirmModal";

export default function BookDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const bookId = id as string;
    const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
    const [deleteBookModal, setDeleteBookModal] = useState<boolean>(false);

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
                    <Button onClick={() => setDeleteBookModal(true)} type="primary" danger ghost>
                        Delete
                    </Button>
                </div>
            </div>

            <h1>Genre : <span>{book?.genre}</span></h1>
            <div className="mt-5">
                <div className="flex justify-between mb-4 items-center">
                    <h5 className="font-semibold ">Reviews (<span>{book?.reviews?.length}</span>)</h5>
                    <Button onClick={() => setReviewModalOpen(true)} className="flex items-center"><PlusOutlined /> Add Review</Button>
                </div>
                <div className="grid lg:grid-cols-3 gap-3">
                    {book?.reviews?.map((review: ReviewType) => <ReviewCard review={review} key={review?._id} />)
                    }
                </div>
            </div>
            <AddReviewModal bookId={bookId} reviewModalOpen={reviewModalOpen} setReviewModalOpen={setReviewModalOpen} />
            <DeleteBookConfirmModal bookId={bookId} deleteBookModal={deleteBookModal} setDeleteBookModal={setDeleteBookModal} />
        </div>
    );
}
