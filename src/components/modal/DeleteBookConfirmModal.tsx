import React, { useEffect } from "react";
import { Button, Modal } from "antd";

import { getToken } from "../../utils/getToken";
import { useAddReviewMutation, useDeleteBookMutation } from "../../app/book/bookApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface DeleteBookConfirmModalProps {
    deleteBookModal: boolean;
    setDeleteBookModal: any;
    bookId: string;
}

const DeleteBookConfirmModal: React.FC<DeleteBookConfirmModalProps> = ({
    deleteBookModal,
    setDeleteBookModal,
    bookId,
}) => {
    const navigate = useNavigate();
    const token = getToken() as string;

    const [deleteBook, { isSuccess, isError, error, isLoading }] = useDeleteBookMutation()


    const handleDeleteBook = (id: string) => {
        deleteBook({ bookId: id, token })
    };

    useEffect(() => {
        if (isLoading) toast.loading('Loading...', { id: 'addReview' })
        if (isSuccess) {
            setDeleteBookModal(false)
            navigate(-1)
            toast.success('Success', { id: 'addReview' })

        }
        if (isError) {
            const anyError: any = error;
            toast.error(anyError.data.error, { id: 'addReview' });
        }
    }, [isSuccess, isLoading, isError, error])
    return (
        <>
            <Modal
                title="Confirm Delete Book"
                footer
                visible={deleteBookModal}
                onCancel={() => setDeleteBookModal(false)}
            >
                <h2 className=" font-semibold">Are sure sure Want to delete - <span className="text-sky-500">Amar Bangla Boi</span>?</h2>
                <div className="mt-6 flex justify-end">
                    <Button
                        type="primary"

                        ghost
                        className="mr-2"
                        onClick={() => setDeleteBookModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => handleDeleteBook(bookId)}
                        type="primary" ghost danger>
                        Delete
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default DeleteBookConfirmModal;
