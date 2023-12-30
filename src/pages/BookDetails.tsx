import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/card/ReviewCard";
import AddReviewModal from "../components/modal/AddReviewModal";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useGetBookByIdQuery } from "../app/book/bookApi";
import { ReviewType } from "../types/dataTypes";
import DeleteBookConfirmModal from "../components/modal/DeleteBookConfirmModal";
import { checkOwner } from "../helpers/checkOwner";
import { useAppSelector } from "../app/hooks";

import SignInForReviewModal from "../components/modal/SinginForReviewModal";

export default function BookDetails() {
    const { user } = useAppSelector(state => state.auth)
    const navigate = useNavigate();
    const { id } = useParams();
    const bookId = id as string;
    const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
    const [deleteBookModal, setDeleteBookModal] = useState<boolean>(false);
    const [signInForReviewModal, setSignInForReviewModal] = useState<boolean>(false)
    const { data } = useGetBookByIdQuery(bookId)
    const book = data?.data;

    const isOwner = checkOwner(user?._id as string, book?.added_by)
    const handleAddReviewOpen = () => {
        if (!user?._id) setSignInForReviewModal(true)
        else if (user?._id) setReviewModalOpen(true)
    }
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
                    <>
                        <Button onClick={() => navigate(`/edit-book/${bookId}`)} disabled={!isOwner} type="primary" ghost>
                            Edit
                        </Button>
                        <Button onClick={() => setDeleteBookModal(true)} disabled={!isOwner} type="primary" danger ghost>
                            Delete
                        </Button>
                    </>
                </div>
            </div>

            <h1>Genre : <span>{book?.genre}</span></h1>
            <div className="mt-5">
                <div className="flex justify-between mb-4 items-center">
                    <h5 className="font-semibold ">Reviews (<span>{book?.reviews?.length}</span>)</h5>
                    <Button onClick={handleAddReviewOpen} className="flex items-center"><PlusOutlined /> Add Review</Button>
                </div>
                <div className="grid lg:grid-cols-3 gap-3">
                    {book?.reviews?.map((review: ReviewType) => <ReviewCard review={review} key={review?._id} />)
                    }
                </div>
            </div>
            <AddReviewModal bookId={bookId} reviewModalOpen={reviewModalOpen} setReviewModalOpen={setReviewModalOpen} />
            <DeleteBookConfirmModal bookId={bookId} deleteBookModal={deleteBookModal} setDeleteBookModal={setDeleteBookModal} />
            <SignInForReviewModal signInForReviewModal={signInForReviewModal} setSignInForReviewModal={setSignInForReviewModal} />
        </div>
    );
}
