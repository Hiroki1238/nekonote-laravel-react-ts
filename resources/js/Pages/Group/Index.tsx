import React, { Children } from "react";
import Authenticated from "@/Layouts/Authenticated";

interface Props {
    children: React.ReactNode;
}

interface IndexProps {
    auth: any;
    users: any;
    group: any;
}

const Index: React.FC<IndexProps> = (props) => {
    const { auth,users,group } = props;
    // const Index :any = (props : any) => {
    // const {user,auth} = props;

    return (
        <div>
            <Authenticated auth={auth}>
                <div className="flex">
                <div>
                    {/* {users.image_path !== null ? (
                        <div className="w-1/7">
                            <img
                                className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                src={group.image_path}
                            />
                        </div>
                    ) : (
                        <div className="w-1/7">
                            <img
                                className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                src="https://nekoillust.com/wp-content/uploads/2018/10/16a6c0fecf7c1b558b68e58186e2f292.jpg"
                            />
                        </div>
                    )} */}
                     <img
                                className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                src="https://nekoillust.com/wp-content/uploads/2018/10/16a6c0fecf7c1b558b68e58186e2f292.jpg"
                            />
</div>
<div>
    {/* {users.map((user:any) => (
  user.image_path !== null ? (
    <div className="w-1/7">
        <img
            className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
            src={user.image_path}
        />
        <p>{user.name}</p>
    </div>

    
) : (
    <div className="w-1/7">
        <img
            className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
            src="https://nekoillust.com/wp-content/uploads/2018/10/16a6c0fecf7c1b558b68e58186e2f292.jpg"
        />
        <p>{user.name}</p>
    </div>
) 
    )

    )
    } */}
    
</div>

</div>







            </Authenticated>
        </div>
    );
};

export default Index;
