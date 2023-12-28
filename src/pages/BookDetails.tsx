import { Button, Card } from "antd";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/card/ReviewCard";
import AddReviewModal from "../components/modal/AddReviewModal";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

export default function BookDetails() {
    const { bookId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div className=" mx-auto my-5">
            <div className="flex justify-between">

                <div>
                    <h1 className="text-xl font-semibold">	7 Habits of Highly Effective people {bookId}</h1>
                    <p>
                        by  <em className="font-semibold text-sm">Stephen R. Covey</em>
                    </p>
                    <p className="mt-3">Published in <span className="font-semibold">2023</span></p>
                </div>
                <div className="flex gap-3">
                    <Button type="primary" ghost>
                        Edit
                    </Button>
                    <Button type="primary" danger ghost>
                        Delete
                    </Button>
                </div>
            </div>

            <h1>Genre : Self Motivation</h1>
            <div className="mt-5">
                <div className="flex justify-between mb-4 items-center">
                    <h5 className="font-semibold ">Reviews (8)</h5>
                    <Button onClick={() => setIsModalOpen(true)} className="flex items-center"><PlusOutlined /> Add Review</Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
            <AddReviewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    );
}
