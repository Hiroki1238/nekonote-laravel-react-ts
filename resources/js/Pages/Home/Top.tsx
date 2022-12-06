import React, { Children } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";
import { Link } from "@inertiajs/inertia-react";

interface TopProps {
    //user:any;
}

const Top: React.FC<TopProps> = (props) => {
    // const Index :any = (props : any) => {
    // const {user,auth} = props;

    return (
        <Guest>
            <div>
                <p className="text-center mt-36 font-bold text-gray-500 text-3xl">
                    トップページは現在製作中です<span className="text-lg">(これは未ログイン時のトップページ)</span>
                </p>
                <img
                    className="w-2/3 h-auto ml-auto mr-auto"
                    src="https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-co-jp/cat-health/common/images/disease/cat_image1.jpeg?fmt=jpeg&qlt=85&wid=1680"
                />
            </div>
        </Guest>
    );
};

export default Top;
