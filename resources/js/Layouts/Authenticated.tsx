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
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
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
                <Link
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
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

          

            <main>{children}</main>
        </div>
    );
}
