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
 
  return (
    <div>
 {  auth.user != null ? (
<Authenticated auth={auth} >
<div className="mb-4">
            {tasks.map((task:any) => (
                <div key={task.id}>
                        <div>
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/tasks/${task.id}`}
                            >
                                {task.item_id}
                                リレーションでアイテム名を引っ張ってくる
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