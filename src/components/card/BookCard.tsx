import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { checkOwner } from "../../utils/checkOwner";

interface BookCardProps {
  book: any;

}
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { user } = useAppSelector(state => state.auth);

  const isOwner = checkOwner(user?._id as string, book?.added_by)
  return (
    <Card title={book?.title} extra={<div className="flex justify-end gap-2 items-center">
      {isOwner && <span className=" font-semibold text-sky-500 inline">Owner</span>}
      <Link to={`/book-details/${book?._id}`} className="flex gap-2 items-center" >
        <Button value={'small'}>More</Button></Link>
    </div>
    } >
      <p>Written by <span className="font-medium"> {book?.author}</span></p>
      <p>Genre : {book?.genre}</p>
      <p className="mt-3"> <ClockCircleOutlined className="mr-2" />Published in {book?.publication_year}</p>
    </Card>
  )
}
export default BookCard;