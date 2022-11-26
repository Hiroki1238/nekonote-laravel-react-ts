import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

interface Props {
    auth?: any;
    header?: React.ReactNode;
    children: React.ReactNode;
}

export default function Authenticated({ auth, header, children }: Props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div>
        <div className="flex sm:justify-center items-center pt-6 sm:pt-0 bg-white border-b-2 border-gray-400">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-28 h-auto pt-3 mr-5 fill-current text-gray-500" />
                </Link>
            </div>
            <div className="w-40 text-center font-black text-blue-400 ml-5 mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg border-blue-400 border-2">
                <Link href="/">ホーム</Link>
            </div>

            <div className="w-40  text-center mt-6 px-6 py-4 font-black text-green-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-green-400 border-2">
                <Link href="/mypage">マイページ</Link>
            </div>

            <div className="w-40  text-center mt-6 px-6 py-4 font-black text-yellow-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-yellow-400 border-2">
                <Link href="/tasks/1">タスク一覧</Link>
            </div>

            <div className="w-40 text-center mt-6 px-6 py-4 font-black  text-purple-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-purple-400 border-2">
                <Link href="/items/1">商品一覧</Link>
            </div>

            <div className="w-40 text-center mt-6 px-6 py-4 font-black text-red-400 bg-white shadow-md overflow-hidden sm:rounded-lg border-red-400 border-2">
                <Link href="/login">ログイン</Link>
            </div>
        </div>
        <main className="flex max-w-full h-full justify-around">
            <div className="w-1/6">
                <p><Link href=""></Link></p>
                </div>

        </main>

        <main>{children}</main>
        <footer className="bg-gray-200 mt-10">
            <div className="flex">
                <div className="pt-9 mr-auto">
                    <ApplicationLogo className="h-16 ml-16" />
                </div>

                <div>
                    <p className="pt-11 pr-7">
                        <Link
                            href="/"
                            className="no-underline text-3xl"
                        >
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
                        <Link
                            href=""
                            className="no-underline text-3xl"
                        >
                            仮タイトル
                        </Link>
                    </p>
                </div>

                <div>
                    <p className="pt-11 pr-24">
                        <Link
                            href=""
                            className="no-underline text-3xl"
                        >
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
