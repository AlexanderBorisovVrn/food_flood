'use client'
import Link from 'next/link'
import LoginIcon from "./LoginIcon";
import { useSession,signOut } from 'next-auth/react';

const UserLinks = () => {
    const { data,status } = useSession();

    return (
        <>
            {status === 'authenticated' ? (
                <div className='center gap-2 lg:gap-4'>
                    <Link href={"/orders"} className="hover:txt-up">
                        Заказы
                    </Link>
                <button className='hover:txt-up' onClick={()=>signOut()}>Выход</button>
                </div>
            ) : (
                <Link href={"/login"} className=" hover:txt-up">
                    <LoginIcon />
                </Link>
            )}
        </>
    )
}

export default UserLinks