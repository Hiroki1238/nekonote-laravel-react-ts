import React, { Children } from 'react';
import { Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";

interface IndexProps {
  auth: any;
  tasks: any;
}
 
const Task:React.FC<IndexProps> = (props) => {
  const { auth,tasks } = props;
// const Index :any = (props : any) => {
// const {user,auth} = props;
console.log(props);
 
  return (
    <div>
 {  auth.user != null ? (
<Authenticated auth={auth} >
<div className="mb-4 font-kosugimaru text-gray-700">
            {tasks.map((task:any) => (
                <div key={task[0].id}>
                        <div className="mx-10 mt-10 px-3 py-4 border-2 border-gray-300">
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/tasks/${task[0].id}`}
                            >
                              <div className="flex">
                               <div>
                                <img className="h-24 w-auto mr-6" src={task[0].item.image_path}/>
                                </div>
                                <div>
                                <p className="mb-1">商品名：{task[0].item.name}</p>
                                <p className="mb-1">依頼者：{task[0].user.user_name}</p>
                                <p>説明：{task[0].description}</p>
                                </div>
                                </div>
                            </Link>
                        </div>
                </div>
            ))}
        </div>
</Authenticated>
 ):(
 <Guest>
  <div>
後でゲストはみれなくする
</div>
</Guest>

)} 
    </div>
 );
}

export default Task