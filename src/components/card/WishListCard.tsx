import { MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps } from 'antd'
import React from 'react'

import { UserType } from '../../types/dataTypes'
import { wishlistStatus } from '../../constants/wishListBookStatus'

interface WishlistCardProps {
    book: any,
    user: UserType
}
const WishListCard: React.FC<WishlistCardProps> = ({ user, book }) => {

    const items: MenuProps['items'] = wishlistStatus.map((status: string) => (
        {
            label: <p className='capitalize'>{status}</p>,
            key: status,
        }
    ))
    return (
        <div className='border  py-2 rounded-lg'>
            <div className='flex px-4 justify-between'>
                <h3 className=' font-semibold'>
                    {book?.book?.title}
                </h3>
                <div className='flex justify-between items-center gap-2 mb-2'>
                    <div className='my-auto mb-1'>
                        <span className='capitalize text-[14px]  rounded-full text-green-500 bg-green-50 px-2'>{book?.status}</span>
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
                    <Button>More</Button>
                </div>
            </div>
            <div className='px-4 mb-2 flex justify-end'></div>
        </div>
    )
}
export default WishListCard;