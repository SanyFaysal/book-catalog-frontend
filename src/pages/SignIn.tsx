
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../app/user/userApi';
import { UserType } from '../types/dataTypes';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../app/hooks';
import { setUser } from '../app/user/userSlice';
import { setToken } from '../helpers/setToken';

type FieldType = {
  email?: string;
  password?: string;
};

export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [signIn, { data, isSuccess, isError, isLoading, error }] = useLoginMutation()
  const onFinish = (data: Partial<UserType>) => {
    signIn(data)
  };
  useEffect(() => {
    if (isLoading) toast.loading('Loading...', { id: 'signIn' })
    if (isSuccess) {
      dispatch(setUser(data?.data))
      navigate('/')

      setToken(data?.token)
      toast.success('Login success', { id: 'signIn' })
    }
    if (isError) {
      const anyError: any = error;
      toast.error(anyError.data.error, { id: 'signIn' });
    }
  }, [isSuccess, isLoading, isError, error])


  return (
    <div className='h-[70vh] w-full  flex justify-center items-center'>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}

        autoComplete="off"
        layout="vertical"
        className='border rounded-lg w-1/2 py-12 px-12 flex  flex-col justify-center '
      >
        <h2 className='text-xl text-center mb-4' >Sign in</h2>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          className='mb-1'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className="block" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          className=''
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

