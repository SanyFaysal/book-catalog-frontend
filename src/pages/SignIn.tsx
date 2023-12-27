
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';



type FieldType = {
  username?: string;
  password?: string;
  
};

export default function SignIn() {

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
    <h2 className='text-xl text-center mb-4' >Sign in</h2>
    <Form.Item<FieldType>
      label="Username"
      name="username"
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
    <p className='text-center'>Not have an account ? <Link to={'/signup'} className='text-sky-500'>Sign up</Link></p>

  </Form>
   </div>
 )
}

