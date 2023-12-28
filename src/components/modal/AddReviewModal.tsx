import React from 'react';
import { Button, Input, Modal, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';

interface AddReviewModalProps {
    isModalOpen: boolean;
    setIsModalOpen: any
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <>
            <Modal title="Add Your Personal Review" footer centered visible={isModalOpen} onCancel={() => setIsModalOpen(false)}>

                <div className='my-2'>
                    <label className='block'>Your Ratings</label>
                    <Rate allowHalf defaultValue={2.5} />
                </div>
                <div>
                    <label>Your Review</label>
                    <TextArea />
                </div>

                <div className='flex gap-2 mt-4 justify-end'>
                    <Button type="primary" danger ghost onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>
                    <Button type="primary" ghost>
                        Add
                    </Button>

                </div>
            </Modal>
        </>
    );
};

export default AddReviewModal;
