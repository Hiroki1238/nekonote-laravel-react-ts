import React, { Children } from "react";
import Authenticated from "@/Layouts/Authenticated";

interface Props {
    children: React.ReactNode;
}
interface IndexProps {
    auth: any;
    user: any;
    group: any;
    tasks: any;
    item:any;
}

const Index: React.FC<IndexProps> = (props) => {
    const { auth, user, group ,tasks,item } = props;
    // const Index :any = (props : any) => {
    // const {user,auth} = props;

    return (
        <div>
            <Authenticated auth={auth}>
                <div className="flex">
                    <div>
                        {user.image_path !== null ? (
                        <div className="w-1/7">
                            <img
                                className="h-auto w-40 my-5 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                src={group.image_path}
                            />
                        </div>
                    ) : (
                        <div className="w-1/7">
                            <img
                                className="h-auto w-40 my-5  rounded-full aspect-square object-cover border-2 border-gray-300"
                                src="https://nekoillust.com/wp-content/uploads/2018/10/16a6c0fecf7c1b558b68e58186e2f292.jpg"
                            />
                        </div>
                    )}

<div className="bg-white border-2 border-blue-400 text-blue-400 text-center">{user.user_name}</div>

                    
<div>
    <div>依頼している商品</div>
    <div> aa{tasks.item.name}</div>
    
</div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </Authenticated>
        </div>
    );
};

export default Index;
