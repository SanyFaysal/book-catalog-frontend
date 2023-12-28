import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserType } from "../types/dataTypes";
import { useSignUpMutation } from "../app/user/userApi";
import { useEffect } from "react";

type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
};

export default function SignUp() {


  const [signUp, { isSuccess, isError, error, isLoading }] = useSignUpMutation()
  const onFinish = (data: UserType) => {
    signUp(data)
  };

  useEffect(() => {
    if (isLoading) toast.loading('Loading...', { id: 'signUp' })
    if (isSuccess) toast.success('Success', { id: 'signUp' })
    if (isError) {

      const anyError: any = error;
      toast.error(anyError.data.error, { id: 'signUp' });

    }
  }, [isSuccess, isLoading, isError, error])

  return (
    <div className="h-[75vh] w-full  flex justify-center items-center">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="border rounded-lg w-1/2 py-12 px-12 flex  flex-col justify-center "
      >
        <h2 className="text-xl text-center mb-4">Sign up</h2>
        <Form.Item<FieldType>
          label="Full Name"
          name="fullName"
          className="mb-1"
          rules={[
            { required: true, message: "Please input full name username!" },
          ]}
        >
          <Input className="" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          className='mb-1'
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className="" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="mx-auto">
          <Button
            className="text-sky-500 bg-sky-100"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
        <p className="text-center">
          Already have an account ?{" "}
          <Link to={"/signin"} className="text-sky-500">
            Signin
          </Link>
        </p>
      </Form>
    </div>
  );
}
