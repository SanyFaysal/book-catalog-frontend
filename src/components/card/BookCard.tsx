import {
  ClockCircleOutlined,
  HeartFilled,
  HeartOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { checkOwner } from "../../helpers/checkOwner";
import { useEffect, useState } from "react";
import { useAddWishlistMutation } from "../../app/user/userApi";
import { getToken } from "../../helpers/getToken";
import toast from "react-hot-toast";

interface BookCardProps {
  book: any;
}
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const token = getToken() as string;

  const { user } = useAppSelector((state) => state.auth);
  const isOwner = checkOwner(user?._id as string, book?.added_by);

  const [addWishlist, { isLoading, isSuccess, isError, error }] =
    useAddWishlistMutation();

  const handleAddWishlist = (bookId: string) => {
    addWishlist({ token, bookId });
  };

  useEffect(() => {
    if (isError) {
      const anyError: any = error;
      toast.error(anyError?.data?.error, { id: "wishlist" });
    }
  }, [isError]);
  return (
    <Card
      title={book?.title}
      extra={
        <div className="flex justify-end gap-2 items-center">
          {isOwner && (
            <span className=" font-semibold text-sky-500 inline">Owner</span>
          )}
        </div>
      }
    >
      <p>
        Written by <span className="font-medium"> {book?.author}</span>
      </p>
      <p>Genre : {book?.genre}</p>{" "}
      <p className=""> Published in {book?.publication_year}</p>
      <div className="flex justify-between gap-3 mt-3">
        {/* <HeartOutlined className="text-xl  px-3 rounded" /> */}
        {isLoading ? (
          <Button> Loading...</Button>
        ) : isSuccess ? (
          <Button>
            <HeartFilled className="text-red-500 mr-1" />
          </Button>
        ) : (
          <Button>
            {" "}
            <>
              <HeartOutlined className="mr-1" />
              Wishlist
            </>
          </Button>
        )}

        <Link
          to={`/book-details/${book?._id}`}
          className="flex gap-2 items-center"
        >
          <Button value={"small"}>More</Button>
        </Link>
      </div>
    </Card>
  );
};
export default BookCard;
