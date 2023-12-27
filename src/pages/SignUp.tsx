

import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';



type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
  
};

export default function SignUp() {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

 return (
   <div className='h-[80vh] w-full  flex justify-center items-center'>
     <Form
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className='border rounded-lg w-1/2 py-12 px-12 flex  flex-col justify-center '
  >
    <h2 className='text-xl text-center mb-4' >Sign up</h2>
    <Form.Item<FieldType>
      label="Full Name"
      name="fullName"
      rules={[{ required: true, message: 'Please input full name username!' }]}
    >
      <Input className="" />
    </Form.Item>
    <Form.Item <FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input className="" />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

  

    <Form.Item className='mx-auto' >
      <Button className='text-sky-500 bg-sky-100' type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    <p className='text-center'>Already have an account ? <Link to={'/signin'} className='text-sky-500'>Signin</Link></p>
  </Form>
   </div>
 )
}

