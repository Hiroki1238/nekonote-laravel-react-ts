import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as "email" | "password" | "user_name" | "first_name" | "last_name",
            event.target.type === "checkbox"
                ? event.target.checked + ""
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <Head title="新規登録" />

            <ValidationErrors errors={errors} />

            <form className="mt-12 w-1/2 mr-auto ml-auto" onSubmit={submit}>
                <div>
                    <Label className="text-2xl" forInput="first_name" value="氏" />

                    <Input
                        type="text"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div>
                    <Label className="text-2xl" forInput="last_name" value="名" />

                    <Input
                        type="text"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1  block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div>
                    <Label className="text-2xl" forInput="user_name" value="アカウント名" />

                    <Input
                        type="text"
                        name="user_name"
                        value={data.user_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label className="text-2xl" forInput="email" value="Eメール" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label className="text-2xl" forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label className="text-2xl" forInput="password_confirmation" value="パスワードの確認"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-lg text-gray-600 hover:text-gray-900"
                    >
                        ログインはこちら
                    </Link>

                    <Button
                        className="ml-4 text-xl font-black bg-white text-blue-400 mr-3 border-blue-400 border-2"
                        processing={processing}
                    >
                        新規登録
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
