import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: any;

}

const BookCard: React.FC<BookCardProps> = ({ book }) => {

  return (
    <Card title={book?.title} extra={<Link to={`/book-details/${book?._id}`} className=""><Button value={'small'}>More</Button></Link>} >
      <p>Written by <span className="font-medium"> {book?.author}</span></p>
      <p>Genre : {book?.genre}</p>
      <p className="mt-3"><ClockCircleOutlined className="mr-2" />Published in {book?.publication_year}</p>
    </Card>
  )
}
export default BookCard;