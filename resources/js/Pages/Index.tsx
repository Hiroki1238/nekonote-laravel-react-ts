import React from 'react';
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";

const Index = (props : any) => {
const {user,auth} = props;
 
  return (
    <div>
 {  auth.user != null ? (
<Authenticated auth={auth} >
  
</Authenticated>
 ):(
 <Guest>
   
<div>hello</div>

</Guest>
)}
   
    </div>
 );
}

export default Index
