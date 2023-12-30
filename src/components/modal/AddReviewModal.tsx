import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ReviewType } from "../../types/dataTypes";
import { getToken } from "../../helpers/getToken";
import { useAddReviewMutation } from "../../app/book/bookApi";
import toast from "react-hot-toast";

interface AddReviewModalProps {
    reviewModalOpen: boolean;
    setReviewModalOpen: any;
    bookId: string;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({
    reviewModalOpen,
    setReviewModalOpen,
    bookId,
}) => {
    const token = getToken() as string;
    const [addReview, { isSuccess, isError, error, isLoading }] = useAddReviewMutation()
    const onFinish = (reviewData: ReviewType) => {
        addReview({ reviewData, bookId, token })
    };

    useEffect(() => {
        if (isLoading) toast.loading('Loading...', { id: 'addReview' })
        if (isSuccess) {
            toast.success('Success', { id: 'addReview' })
            setReviewModalOpen(false)
        }
        if (isError) {
            const anyError: any = error;
            toast.error(anyError.data.error, { id: 'addReview' });
        }
    }, [isSuccess, isLoading, isError, error])
    return (
        <>
            <Modal
                title="Add Your Personal Review"
                footer
                centered
                visible={reviewModalOpen}
                onCancel={() => setReviewModalOpen(false)}
            >
                <Form labelCol={{ span: 15 }} layout="vertical" onFinish={onFinish}>
                    <Form.Item<ReviewType>
                        label="Ratings"
                        className="w-full mb-1"
                        name="ratings"
                        rules={[{ required: true, message: "Please add ratings" }]}
                    >
                        <Rate allowHalf />
                    </Form.Item>
                    <Form.Item<ReviewType>
                        label="Review"
                        className="w-full mb-1"
                        name="review_text"
                        rules={[{ required: true, message: "Please add your review" }]}
                    >
                        <TextArea name="review_text" />
                    </Form.Item>
                    <Form.Item className="flex gap-4 mt-4 justify-end">
                        <Button
                            type="primary"
                            danger
                            ghost
                            className="mr-2"
                            onClick={() => setReviewModalOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="primary" ghost htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddReviewModal;
