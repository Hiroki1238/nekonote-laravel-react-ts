import React, { Children } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";
import { Link } from "@inertiajs/inertia-react";
import TaskList from "@/Components/Task/TaskList";

interface IndexProps {
    auth: any;
    tasks: any;
}

const Index: React.FC<IndexProps> = (props) => {
    const { auth, tasks } = props;
    // const Index :any = (props : any) => {
    // const {user,auth} = props;

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={auth}>
                    <div>

                    </div>
                    <div className="mt-10">
                    <p className="mb-6 text-3xl pl-36">締切が近いタスク</p>
                    <TaskList tasks={tasks} />
                    </div>
                </Authenticated>
            ) : (
                <Guest>
                    <div>
                        <p className="text-center mt-36 font-bold text-gray-500 text-3xl">
                            トップページは現在製作中です
                        </p>
                        <img
                            className="w-2/3 h-auto"
                            src="https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-co-jp/cat-health/common/images/disease/cat_image1.jpeg?fmt=jpeg&qlt=85&wid=1680"
                        />
                    </div>
                </Guest>
            )}
        </div>
    );
};

export default Index;
