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
  <div>
      <Link href={`/groups/${auth.user.id}`}>所属しているグループ</Link>
  </div>
<div>{user}</div>

  </div>
  </Authenticated>
   
      </div>
   );
  }
  
  export default Index

