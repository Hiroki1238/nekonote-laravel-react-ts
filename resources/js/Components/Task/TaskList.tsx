import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Task, TaskProps } from "@/Types/tasks";

//以下のコードをTypes/tasksファイルに分けた
// interface TaskProps {
//     tasks: any;
// }

// type Task {
//   id: number;
//   item: Item;
//   user: User;
//   description: string;
//   deadline: Date;
// }

// type Item {
//   id: number;
//   name: string;
//   image_path: string;
// }
// type User {
//   id: number;
//   user_name: string;
// }

const TaskList: React.FC<TaskProps> = (props) => {
    const { tasks } = props;
    //console.log(tasks);

    return (
        <div className="mb-4 font-kosugimaru text-gray-700">
            {tasks[0].map((task: Task) => (
                <div key={task.id}>
                    <div className="w-5/6 mr-auto ml-auto mx-10 px-3 py-4 border-2 border-gray-300">
                      {console.log(task)}
                        <Link
                            className="text-link-blue text-2xl hover:text-link-blue2"
                            href={`/tasks/${task.id}`}
                        >
                            <div className="flex">
                                <div>
                                    <img
                                        className="h-24 w-auto mr-6 aspect-square object-contain"
                                        src={task.item.image_path}
                                    />
                                </div>
                                <div>
                                    <p className="mb-1">
                                        商品名：{task.item.name}
                                    </p>
                                    <p className="mb-1">
                                        依頼者：{task.user.user_name}
                                    </p>
                                    <p>説明：{task.description}</p>
                                </div>
                                <div className="ml-auto mr-4">
                                    <p className="text-blue-400 font-bold">
                                        期限：{task.deadline}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
