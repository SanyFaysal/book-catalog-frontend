export const isAddedToWishlist = (wishlist: any[], bookId: string) => {
    const isAvailable = wishlist?.find(list => list?.book?._id === bookId);
    return isAvailable ? true : false;
} 