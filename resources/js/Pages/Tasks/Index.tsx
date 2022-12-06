import React, { Children } from "react";
import { Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";
import TaskList from "@/Components/Task/TaskList";

interface IndexProps {
    auth: any;
    tasks: any;
}

const Index: React.FC<IndexProps> = (props) => {
    const { auth, tasks } = props;
    // const Index :any = (props : any) => {
    // const {user,auth} = props;
    console.log(props);

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={auth}>
                  <p>このページを採用したい</p>
                    <div className="mt-10">
                    <p className="mb-6 text-3xl pl-36">あなたのタスク</p>
                        <TaskList tasks={tasks} />
                    </div>
                </Authenticated>
            ) : (
                <Guest>
                    <div>後でゲストはみれなくする</div>
                </Guest>
            )}
        </div>
    );
};

export default Index;
