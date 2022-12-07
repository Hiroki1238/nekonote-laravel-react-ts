import React, { Children } from 'react';
import { Link } from "@inertiajs/inertia-react";
import ItemAuthenticated from "@/Layouts/ItemAuthenticated";
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
<ItemAuthenticated auth={auth} >
  <div className="mb-4 font-kosugimaru text-gray-700 flex justify-left flex-wrap"> {/* flex-wrapと書くと折り返しが可能になる */}
            {items.map((item:any) => (
                <div key={item.id}>
                        <div className="mt-10 px-3 py-4 border-2 border-gray-300 w-items-x h-items-y hover:border-4">
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/items/${item.id}`}
                            >
                               <div className="flex justify-center">
                                <img className="h-auto w-52 aspect-square object-contain mr-6" src={item.image_path}/>
                                </div>
                                <div>
                                <p className="mb-4 text-3xl text-center">{item.name}</p>
                                <p className="text-2xl">{item.description}</p>
                                <p className="text-2xl text-red-700 mt-4">在庫：{item.stock}個</p>
                                （group_id：{item.group_id}）
                                </div>
                            </Link>
                        </div>
                </div>
            ))}
        </div>
</ItemAuthenticated>
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