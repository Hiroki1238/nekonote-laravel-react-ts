import React, { Children } from 'react';
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";


interface Props {
    children: React.ReactNode;
}


interface IndexProps {
    auth: any;
    //user:any;
  }
   
  const Index:React.FC<IndexProps> = (props) => {
    const { auth } = props;
  // const Index :any = (props : any) => {
  // const {user,auth} = props;
   
    return (
      <div>
  <Authenticated auth={auth} >
    <div>
  <div>
      <Link href={`/groups/${auth.user.id}`}>所属しているグループ</Link>
  </div>


  </div>
  </Authenticated>
   
      </div>
   );
  }
  
  export default Index

