import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

interface Props {
    children: React.ReactNode;
}

export default function Guest({ children }: Props) {
    return (
        <div className="min-h-screen max-h-full bg-white font-kosugimaru text-gray-700">
            <nav className="bg-white border-b border-gray-100">
                <div className="flex sm:justify-center items-center pt-6 sm:pt-0 bg-white border-b-2 border-gray-400">
                    <div>
                        <Link href="/">
                            <ApplicationLogo className="w-28 h-auto pt-3 mr-5 fill-current text-gray-500" />
                        </Link>
                    </div>
                    <div className="w-60 text-center text-2xl font-black text-blue-400 ml-5 mt-6 px-7 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg border-blue-400 border-2">
                        <Link href="/">ホーム</Link>
                    </div>

                    <div className="w-60 text-center text-2xl mt-6 px-7 py-4 font-black text-green-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-green-400 border-2">
                        <Link href={route("login")}>マイページ</Link>
                    </div>

                    <div className="w-60  text-center text-2xl mt-6 px-7 py-4 font-black text-yellow-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-yellow-400 border-2">
                        <Link href={route("login")}>タスク一覧</Link>
                    </div>

                    <div className="w-60 text-center text-2xl mt-6 px-7 py-4 font-black  text-purple-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-purple-400 border-2">
                        <Link href={route("login")}>商品一覧</Link>
                    </div>

                    <div className="w-60 text-center text-2xl mt-6 px-7 py-4 font-black text-red-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-red-400 border-2">
                        <Link href={route("login")}>ログイン</Link>
                    </div>
                </div>
                <main className="flex max-w-full h-full justify-around">
                    <div className="w-1/6 bg-white border-r-2 border-gray-400 text-center">
                        {/* {groups.map((group) => (
                        <div key={group.id}>
                            <Link
                                method="post"
                                href={`/items/${group.id}`}
                                //as="button"
                            >
                                {group.name}
                            </Link> */}

                        <p className="mt-3 text-2xl">バイト</p>

                        <p className="mt-3 text-2xl">会社</p>

                        <p className="mt-3 text-2xl">ネコ軍団</p>

                        <p className="mt-3 text-2xl"></p>
                    </div>
                    {/* ))}
                </div> */}

                    <div className="w-5/6 pl-5 bg-white">{children}</div>
                </main>
            </nav>
            <footer className="bg-white mt-10 border-t-2 border-gray-400 sticky w-full">
                <div className="flex">
                    <div className="pt-9 mr-auto">
                        <ApplicationLogo className="h-16 ml-16" />
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link href="/" className="no-underline text-3xl">
                                トップ
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link
                                href="/description"
                                className="no-underline text-3xl"
                            >
                                仮タイトル
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link href="" className="no-underline text-3xl">
                                仮タイトル
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-24">
                            <Link href="" className="no-underline text-3xl">
                                仮タイトル
                            </Link>
                        </p>
                    </div>
                </div>

                <p className="text-center text-2xl mt-5 py-12">
                    Copyright © 2022 NEKONOTE CORPORATION. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
