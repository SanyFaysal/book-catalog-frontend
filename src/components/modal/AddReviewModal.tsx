import React, { useState } from "react";
import { Button, Form, Input, Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ReviewType } from "../../types/dataTypes";
import { getToken } from "../../utils/getToken";

interface AddReviewModalProps {
    isModalOpen: boolean;
    setIsModalOpen: any;
    bookId: string;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    bookId,
}) => {
    const token = getToken()

    const onFinish = (data: any) => {

    };

    return (
        <>
            <Modal
                title="Add Your Personal Review"
                footer
                centered
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
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
                    <Form.Item className="flex gap-2 mt-4 justify-end">
                        <Button
                            type="primary"
                            danger
                            ghost
                            onClick={() => setIsModalOpen(false)}
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
