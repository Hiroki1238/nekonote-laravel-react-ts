import React, { Children } from "react";
import { Link } from "@inertiajs/inertia-react";
import TaskAuthenticated from "@/Layouts/TaskAuthenticated";
import Guest from "@/Layouts/Guest";
import TaskList from "@/Components/Task/TaskList";

interface IndexProps {
    auth: any;
    tasks: any;
}

const Task: React.FC<IndexProps> = (props) => {
    const { auth, tasks } = props;
    // const Index :any = (props : any) => {
    // const {user,auth} = props;
    console.log(props);

    return (
        <div>
            {auth.user != null ? (
                <TaskAuthenticated auth={auth}>
                    <div className="mt-10">
                        ※タスクはまだグループごとに表示を分けられていない
                        <p className="mb-6 text-3xl pl-36">あなたのタスク</p>
                        <TaskList tasks={tasks} />
                    </div>
                </TaskAuthenticated>
            ) : (
                <Guest>
                    <div>後でゲストはみれなくする</div>
                </Guest>
            )}
        </div>
    );
};

export default Task;
