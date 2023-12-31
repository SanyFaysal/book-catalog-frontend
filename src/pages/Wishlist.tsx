import { useGetMeQuery } from "../app/user/userApi";

import WishListCard from "../components/card/WishListCard";
import { getToken } from "../helpers/getToken"


export default function Wishlist() {
    const token = getToken();
    const { data } = useGetMeQuery(token);
    const user = data?.data;

    return (
        <div>
            <h1 className="text-3xl text-center mt-5 mb-8">Your Wishlist</h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
                {
                    user?.wishlist?.map((book: any) => <WishListCard book={book} key={book?._id} />)
                }
            </div>
        </div>
    )
}
