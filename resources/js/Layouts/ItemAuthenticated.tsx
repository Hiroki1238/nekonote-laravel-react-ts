import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import { group } from "console";

interface Props {
    auth?: any;
    header?: React.ReactNode;
    children: React.ReactNode;
}

export default function ItemAuthenticated({ auth, header, children }: Props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen max-h-full bg-white font-kosugimaru text-gray-700">
            <nav className="bg-white border-b border-gray-100">
                <div className="flex sm:justify-center items-center pt-6 sm:pt-0 bg-white border-b-2 border-gray-400">
                    <div>
                        <Link href="/home">
                            <ApplicationLogo className="w-28 h-auto pt-3 mr-5 fill-current text-gray-500" />
                        </Link>
                    </div>
                    <div className="w-60 text-center text-2xl font-black text-blue-400 ml-5 mt-6 px-7 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg border-blue-400 border-2 hover:text-blue-500">
                        <Link href="/home">ホーム</Link>
                    </div>

                    <div className="w-60 text-center text-2xl mt-6 px-7 py-4 font-black text-green-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-green-400 border-2">
                        <Link href={`/mypage/${auth.user.id}`}>マイページ</Link>
                    </div>

                    <div className="w-60  text-center text-2xl mt-6 px-7 py-4 font-black text-yellow-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-yellow-400 border-2">
                        <Link href={`/groups/tasks`}>タスク一覧</Link>
                    </div>

                    <div className="w-60 text-center text-2xl mt-6 px-7 py-4 font-black  text-purple-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-purple-400 border-2">
                        <Link href={`/groups/items/1`}>商品一覧</Link>
                    </div>

                    <div className="w-60 text-center text-2xl mt-6 px-7 py-4 font-black text-red-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-red-400 border-2">
                        <Link method="post" href={route("logout")} as="button">
                            ログアウト
                        </Link>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                ログアウト
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
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

                    <p className="mt-3 text-2xl">
                        <Link href="/groups/items/1">バイト</Link>
                    </p>

                    <p className="mt-3 text-2xl">
                        <Link href="/groups/items/2">会社</Link>
                    </p>

                    <p className="mt-3 text-2xl">
                        <Link href="/groups/items/3">ネコ軍団</Link>
                    </p>

                    <p className="mt-3 text-2xl">
                        <Link href="/groups/items/4">サイドバー（仮）</Link>
                    </p>

                    <p className="mt-3 text-2xl"></p>
                </div>
                {/* ))}
                </div> */}

                <div className="w-5/6 pl-5 bg-white">{children}</div>
            </main>
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
