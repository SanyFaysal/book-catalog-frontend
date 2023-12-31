import React from 'react'
interface WishlistStatusProps {
    status: string
}
const WishlistStatus: React.FC<WishlistStatusProps> = ({ status }) => {
    if (status === 'read later') {
        return (
            <span className='capitalize text-[14px]  rounded-full text-slate-700 border border-slate-500 px-2'>
                {status}
            </span>)
    }
    if (status === 'reading now') {
        return (
            <span className='capitalize text-[14px]  rounded-full text-sky-500 border border-sky-500 px-2'>
                {status}
            </span>)
    }
    if (status === 'already read') {
        return (
            <span className='capitalize text-[14px]  rounded-full text-green-500 border border-green-500 px-2'>
                {status}
            </span>)
    }
    if (status === 'read soon') {
        return (
            <span className='capitalize text-[14px]  rounded-full text-orange-500 border border-orange-500 px-2'>
                {status}
            </span>)
    }

}


export default WishlistStatus;