import React from 'react';
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";




const Index :any = (props : any) => {
const {user,auth} = props;
 
  return (
    <div>
 {  auth.user != null ? (
<Authenticated auth={auth} >
  aa
</Authenticated>
 ):(
 <Guest>
   
<p className="mt-40">aaa</p>
</Guest>

)}
   
    </div>
 );
}

export default Index
