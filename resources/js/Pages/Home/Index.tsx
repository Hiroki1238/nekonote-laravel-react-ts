import React, { Children } from 'react';
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";

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
 {  auth.user != null ? (
<Authenticated auth={auth} >
  <div>
    <p className="text-center font-bold text-gray-500 mt-36 text-3xl">トップページは現在製作中です</p>
<img className="w-2/3 h-auto" src="https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-co-jp/cat-health/common/images/disease/cat_image1.jpeg?fmt=jpeg&qlt=85&wid=1680"/>
</div>
</Authenticated>
 ):(
 <Guest>
  <div>
  <p className="text-center mt-36 font-bold text-gray-500 text-3xl">トップページは現在製作中です</p>
<img className="w-2/3 h-auto" src="https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-co-jp/cat-health/common/images/disease/cat_image1.jpeg?fmt=jpeg&qlt=85&wid=1680"/>
</div>
</Guest>

)} 
    </div>
 );
}

export default Index