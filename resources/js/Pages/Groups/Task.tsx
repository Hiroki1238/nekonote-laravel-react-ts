import React, { Children } from 'react';
import Authenticated from "@/Layouts/Authenticated";

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
  Task
  <Authenticated auth={auth} >
    <div>
  <img src="https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-co-jp/cat-health/common/images/disease/cat_image1.jpeg?fmt=jpeg&qlt=85&wid=1680"/>
  </div>
  </Authenticated>
   
      </div>
   );
  }
  
  export default Index

