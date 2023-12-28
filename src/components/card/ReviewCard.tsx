import { ClockCircleOutlined, StarFilled } from "@ant-design/icons";

const ReviewCard = () => {
    const { rating, reviewText, reviewBy, reviewTime } = { rating: 5, reviewText: 'It helps me to come forward step of my life', reviewBy: "Analand Donald", reviewTime: "5 days ago" }
    return (
        <div className=" rounded-lg bg-slate-50 p-3">
            <div className="flex items-center justify-between ">
                <div className="text-xl  font-medium">
                    {Array(4)
                        .fill('')
                        .map((_, i) => (
                            <StarFilled key={i} className="text-yellow-400" />
                        ))}
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <p className="text-sky-500 bg-sky-50 px-2 rounded-full text-sm">Abu Sani Faysal</p>
                    </div>
                    {/* <span className="ml-2 text-gray-600">{rating} stars</span> */}
                </div>
            </div>
            <p className="text-gray-700">{reviewText}</p>
            <div className="mt-2 flex items-center gap-2 text-gray-600 text-sm">
                <ClockCircleOutlined />
                {reviewTime}
            </div>
        </div>
    );
};

export default ReviewCard;
