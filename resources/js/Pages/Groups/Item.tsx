import React, { Children } from 'react';
import { Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";

interface IndexProps {
  auth: any;
  items: any;
}
 
const Item:React.FC<IndexProps> = (props) => {
  const { auth,items } = props;
// const Index :any = (props : any) => {
// const {user,auth} = props;
console.log(props);
 
  return (
    <div>
 {  auth.user != null ? (
<Authenticated auth={auth} >
<div className="mb-4 font-kosugimaru text-gray-700 flex justify-center">
            {items.map((item:any) => (
                <div key={item.id}>
                        <div className="mt-10 px-3 py-4 border-2 border-gray-300 w-80 h-auto">
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/items/${item.id}`}
                            >
                               <div>
                                <img className="h-auto w-auto mr-6" src={item.image_path}/>
                                </div>
                                <div>
                                <p className="mb-4 text-3xl text-center">{item.name}</p>
                                <p>{item.description}</p>
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

export default Item