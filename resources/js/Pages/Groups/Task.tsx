import React, { Children } from 'react';
import { Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";
import { timingSafeEqual } from 'crypto';

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
<div className="mb-4">
            {tasks.map((task:any) => (
                <div key={task.id}>
                        <div className="mx-10 mt-10 px-3 py-4 border-2 border-gray-300">
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/tasks/${task.id}`}
                            >
                                <p>商品名：{task.item.name}</p>
                                <p>依頼者：{task.user.user_name}</p>
                                <p>説明：{task.description}</p>
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