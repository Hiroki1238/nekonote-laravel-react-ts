import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

interface Props {
    children: React.ReactNode;
}

export default function Guest({ children }: Props) {
    return (
        <div>
        <div className="flex sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20  mr-5 fill-current text-gray-500" />
                </Link>
                
            </div>
            <div className="w-1/6 text-center font-black text-blue-400 ml-5 mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg border-blue-400 border-2">
                トップページ
            </div>

            <div className="w-1/6  text-center mt-6 px-6 py-4 font-black text-green-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-green-400 border-2">
                マイページ
            </div>

            <div className="w-1/6  text-center mt-6 px-6 py-4 font-black text-yellow-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-yellow-400 border-2">
              報告
            </div>

            <div className="w-1/6 text-center mt-6 px-6 py-4 font-black  text-purple-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-purple-400 border-2">
                商品一覧
            </div>

            <div className="w-1/6 text-center mt-6 px-6 py-4 font-black text-red-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-red-400 border-2">
                タスク一覧
            </div>
            </div>
            

            <main>{children}</main>
        </div>
    );
}
