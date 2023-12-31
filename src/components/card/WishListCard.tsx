import { MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps } from 'antd'
import React, { useEffect } from 'react'
import { wishlistStatusData } from '../../constants/wishListBookStatusData'
import { useUpdateWishlistMutation } from '../../app/user/userApi'
import { getToken } from '../../helpers/getToken'
import toast from 'react-hot-toast'
import WishlistStatus from '../Reuseable/WishlistStatus'
import { useNavigate } from 'react-router-dom'

interface WishlistCardProps {
    book: any,

}
const WishListCard: React.FC<WishlistCardProps> = ({ book }) => {
    const navigate = useNavigate()
    const token = getToken() as string;
    const [updateWishlistStatus, { isSuccess, isError, isLoading, error }] = useUpdateWishlistMutation();
    const handleStatusChange = (status: string) => {
        const data = {
            status,
            book: book?.book?._id
        }
        updateWishlistStatus({ token, data })
    }

    const items: MenuProps['items'] = wishlistStatusData.map((option: { label: string, color: string }) => (
        {
            label: <p className={`capitalize ${option.color} font-semibold`} onClick={() => handleStatusChange(option.label)}>{option.label}</p>,
            key: option.label,
        }
    ))


    useEffect(() => {
        if (isLoading) {
            toast.loading('Loading...', { id: 'update' })
        }
        if (isSuccess) {
            toast.success('Success', { id: 'update' })
        }
        if (isError) {
            toast.error('Something went wrong', { id: 'update' })
        }
    }, [isSuccess, isError, error, isLoading])
    return (
        <div className='border  py-2 rounded-lg'>
            <div className='flex px-4 justify-between'>
                <h3 className=' font-semibold'>
                    {book?.book?.title}
                </h3>
                <div className='flex justify-between items-center gap-2 mb-2'>
                    <div className='my-auto mb-1'>
                        <WishlistStatus status={book?.status} />
                    </div>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <p className='font-bold '>
                            <MoreOutlined className='text-xl font-bolder cursor-pointer' />
                        </p>
                    </Dropdown>
                </div>
            </div>
            <hr />
            <div className='px-4 pt-2 text-sm flex flex-col '>
                <p>Written By <span className='font-semibold'>{book?.book?.author}</span></p>
                <p className='mt-1'>Genre :  <span className='font-semibold '>{book?.book?.genre}</span></p>
                <div className='flex justify-between items-center'>
                    <p>Published in <span className='font-semibold'>{book?.book?.publication_year}</span></p>
                    <Button onClick={() => navigate(`/book-details/${book?.book?._id}`)}>More</Button>
                </div>
            </div>
            <div className='px-4 mb-2 flex justify-end'></div>
        </div>
    )
}
export default WishListCard;