import React, { Children } from 'react';
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";


interface Props {
    children: React.ReactNode;
}


interface IndexProps {
    auth: any;
    user: any;
    //user:any;
  }
   
  const Index:React.FC<IndexProps> = (props) => {
    const { auth,user } = props;
  // const Index :any = (props : any) => {
  // const {user,auth} = props;
  console.log(user);
    return (
      <div>
  <Authenticated auth={auth} >
    <div className="text-center ">
<div className="border-2 mt-3 border-blue-400">名前　猫山　イヌ男</div>
<div className="border-2 mt-3 border-green-400"> アカウント名　ゴリラ</div>
<div className="border-2 mt-3 border-yellow-400"><Link href={`/groups/${auth.user.id}`}>所属しているグループ</Link>
<p >家族</p>
<p>バイト</p>
<p>会社</p>
<p>ネコ軍団</p>
</div>
<div className=" mt-3 mb-5">
<Link href="" className="border-2 border-purple-400 text-purple-400">編集</Link>
</div>
  </div>
  </Authenticated>
   
      </div>
   );
  }
  
  export default Index

