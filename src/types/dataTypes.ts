export type UserType = {
    fullName: string,
    email: string,
    _id: string
}

export type BookType = {
    title: string,
    author: string,
    genre: string,
    publication_year: string
}

export type ReviewType = {
    review_text: string,
    ratings: number,
    reviewed_by: Partial<UserType> | string,
    _id?: string,
    created_at?: string
}