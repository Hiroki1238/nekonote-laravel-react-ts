import React from 'react'
import { Link } from "@inertiajs/inertia-react";

interface TaskProps {
    tasks: any;
  }


  const TaskList:React.FC<TaskProps> = (props) => {
    const { tasks } = props;

  return (
      <div className="mb-4 font-kosugimaru text-gray-700">
            {tasks.map((task:any) => (
                <div key={task[0].id}>
                        <div className="w-5/6 mb-3 mr-auto ml-auto mx-10 px-3 py-4 border-2 border-gray-300 hover:border-4">
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/tasks/${task[0].id}`}
                            >
                              <div className="flex">
                               <div>
                                <img className="h-24 w-auto mr-6 aspect-square object-contain" src={task[0].item.image_path}/>
                                </div>
                                <div>
                                <p className="mb-1">商品名：{task[0].item.name}</p>
                                <p className="mb-1">依頼者：{task[0].user.user_name}</p>
                                <p>説明：{task[0].description}</p>
                                </div>
                                <div className="ml-auto mr-4">
                                <p className="text-blue-400 font-bold">期限：{task[0].deadline}</p>
                                </div>
                                </div>
                            </Link>
                        </div>
                </div>
            ))}
        </div>
  )
}

export default TaskList