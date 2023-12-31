import React from "react";
import { Button, Modal } from "antd";

import { useNavigate } from "react-router-dom";

interface SignInForReviewModalProps {
    signInForReviewModal: boolean;
    setSignInForReviewModal: any;

}

const SignInForReviewModal: React.FC<SignInForReviewModalProps> = ({
    signInForReviewModal,
    setSignInForReviewModal,
}) => {
    const navigate = useNavigate();

    return (
        <>
            <Modal
                title="Authorization Required"
                footer
                visible={signInForReviewModal}
                onCancel={() => setSignInForReviewModal(false)}
            >
                <p>You Can't write review </p>
                <h2 className=" font-semibold">Please Sign in or Signup first to write a review. </h2>
                <div className="mt-6 flex justify-end gap-2">
                    <Button
                        type="primary"
                        danger
                        ghost
                        className=""
                        onClick={() => setSignInForReviewModal(false)}
                    >
                        Cancel
                    </Button>

                    <button
                        onClick={() => navigate('/signup')}
                        className="px-4 py-[5px] border border-green-500 text-green-500 rounded-lg"
                    >
                        Sign up
                    </button>
                    <Button
                        onClick={() => navigate('/signin')}
                        type="primary" ghost >
                        Sign in
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default SignInForReviewModal;
