import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

interface Props {
    status: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as "email" | "password" | "remember",
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="login" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <div className="text-right mt-4 mr-6">
                <Link
                    href={route("register")}
                    className="underline text-lg text-gray-600 hover:text-gray-900"
                >
                    新規登録はこちら
                </Link>
            </div>

            <form className="mt-10 w-1/2 mr-auto ml-auto" onSubmit={submit}>
                <div>
                    <Label
                        className="text-2xl"
                        forInput="email"
                        value="メールアドレス"
                    />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 mb-8 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label
                        className="text-2xl"
                        forInput="password"
                        value="パスワード"
                    />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-lg text-gray-600">
                            ログイン情報を記憶する
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-lg text-gray-600 hover:text-gray-900"
                        >
                            パスワードを忘れた方はこちら
                        </Link>
                    )}

                    <Button
                        className="ml-4 text-xl font-black bg-white text-blue-400 mr-3 border-blue-400 border-2"
                        processing={processing}
                    >
                        ログイン
                    </Button>
                </div>
            </form>
            <div className="text-gray-500 mt-44 px-3 py-4 border-2 border-gray-300 w-1/3 mr-auto ml-auto">
                <p className="text-3xl mb-4">テストアカウント</p>
                <p className="text-2xl mb-1">メールアドレス: neko@gmail.com</p>
                <p className="text-2xl">パスワード: nekoneko</p>
                </div>
        </Guest>
    );
}
