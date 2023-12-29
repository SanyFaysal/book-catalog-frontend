import { ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import { ReviewType } from "../../types/dataTypes";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { formattedDate } from "../../utils/fotmattedDate";

interface IReviewCardProps {
    review: ReviewType

}

const ReviewCard: React.FC<IReviewCardProps> = ({ review }) => {
    const { bookId } = useParams();
    console.log({ bookId })
    return (
        <div className=" rounded-lg bg-slate-50 px-3 py-2">
            <div className="flex items-start justify-between ">
                <div>
                    <p className="font-semibold">Abu Sani Faysal</p>
                    {review?.ratings}   <Rate className="text-sm " allowHalf disabled value={review?.ratings} />
                </div>

                <div className="flex items-center">
                    <div className="flex items-center">
                        <p className=" bg-sky-50  rounded-full text-sm">
                            {formattedDate(review?.created_at as string)}</p>
                    </div>
                    {/* <span className="ml-2 text-gray-600">{rating} stars</span> */}
                </div>
            </div>
            <p className="text-gray-700 text-lg mt-1 mb-2">{review?.review_text}</p>

        </div >
    );
};

export default ReviewCard;
