export type UserType = {
    fullName: string,
    email: string,
    _id?: string
}

export type BookType = {
    title: string,
    author: string,
    genre: string,
    publication_year: string,
    _id?: string,
    added_by?: UserType | string
}
export type SearchBookType = {
    searchTerm?: string,
    genre?: string,
    publication_year?: string
}
export type ReviewType = {
    review_text: string,
    ratings: number,
    reviewed_by?: UserType,
    _id?: string,
    created_at?: string
}

export type IUpdateBookMutationType = {
    data: Partial<BookType>,
    token: string, bookId: string
}

