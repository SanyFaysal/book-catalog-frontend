import {
  ClockCircleOutlined,
  HeartFilled,
  HeartOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { checkOwner } from "../../helpers/checkOwner";
import { useEffect, useState } from "react";
import {
  useAddWishlistMutation,
  useGetMeQuery,
  useRemoveWishlistMutation,
} from "../../app/user/userApi";
import { getToken } from "../../helpers/getToken";
import toast from "react-hot-toast";
import { isAddedToWishlist } from "../../helpers/isAddedToWishlist";
import { BookType } from "../../types/dataTypes";

interface BookCardProps {
  book: any;
}
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const token = getToken() as string;
  const { user: userData } = useAppSelector(state => state.auth);
  const { data } = useGetMeQuery(token);
  const user = data?.data || {}
  const isOwner = checkOwner(user?._id as string, book?.added_by);
  const wishListed = isAddedToWishlist(user?.wishlist as any[], book?._id);
  const [addWishlist, { isLoading, isSuccess, isError, error }] =
    useAddWishlistMutation();
  const [
    removeWishlist,
    { isLoading: loading, isSuccess: success, isError: isErr, error: err },
  ] = useRemoveWishlistMutation();

  const handleAddWishlist = (bookId: string) => {
    if (userData?._id) {
      addWishlist({ token, bookId });
    } else {
      toast.error("Please Login first !", { id: "wishlist" });
    }
  };

  const handleRemoveWishlist = (bookId: string) => {
    if (userData?._id) {
      removeWishlist({ token, bookId });
    } else {
      toast.error("Please Login first !", { id: "wishlist" });
    }
  };

  useEffect(() => {
    if (isError || isErr) {
      const anyError: any = error ?? err;
      toast.error(anyError?.data?.error, { id: "wishlist" });
    }

  }, [isError, isSuccess, success, wishListed, isErr]);

  return (
    <Card
      title={book?.title}
      extra={
        <div className="flex justify-end gap-2 items-center">
          {isOwner && (
            <span className=" text-sm text-sky-500 bg-sky-100 px-2 rounded-full inline">Owner</span>
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
        {loading || isLoading ? (
          <Button><LoadingOutlined /></Button>
        ) : wishListed ? (
          <Button onClick={() => handleRemoveWishlist(book?._id)}>
            <HeartFilled className="text-red-500" />
          </Button>
        ) : (
          <Button onClick={() => handleAddWishlist(book?._id)}>
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
