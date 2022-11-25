import React from 'react';
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";

const Index :any = (props : any) => {
const {user,auth} = props;
 
  return (
    <div>
 {  auth.user != null ? (
<Authenticated auth={auth} >
<p>aaa</p>
</Authenticated>
 ):(
 <Guest>
<p>aaa</p>
</Guest>

)} 
    </div>
 );
}

export default Index