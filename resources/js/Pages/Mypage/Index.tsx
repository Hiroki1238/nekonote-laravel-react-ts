import React, { Children } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

interface Props {
    children: React.ReactNode;
}

interface IndexProps {
    auth: any;
    //user: any;
    //user:any;
    groups: any;
    tasks: any;
}

const Index: React.FC<IndexProps> = (props) => {
    const { auth, groups, tasks } = props;
    // const Index :any = (props : any) => {
    // const {user,auth} = props;
    console.log(props);
    return (
            <Authenticated auth={auth}>
                <div className="mt-10 font-kosugimaru text-gray-600">
                    <p className="mb-6 text-3xl pl-40">あなたのグループ</p>
                        {groups.map((group: any) => (
                            <div key={group[0].id}>
                                <div className="w-5/6 mr-auto ml-auto border-2 border-gray-300 p-6 hover:border-4">
                                    <Link
                                        className="text-link-blue text-2xl"
                                        href={`/groups/${group[0].id}`}
                                    >
                                        <div className="flex">
                                            <div className="w-20 x-auto mr-10">
                                                {group[0].image_path !==
                                                null ? (
                                                    <img
                                                        className="rounded-full aspect-square object-cover border-2 border-gray-300"
                                                        src={
                                                            group[0].image_path
                                                        }
                                                    />
                                                ) : (
                                                    <img
                                                        className="rounded-full aspect-square object-cover border-2 border-gray-300"
                                                        src="https://nekoillust.com/wp-content/uploads/2018/09/fff58fe9323f47c3a7a689b42017d63e.jpg"
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <p className="mb-4 text-3xl">
                                                    {group[0].name}
                                                </p>
                                                <p>{group[0].description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="mt-20 mb-4 font-kosugimaru text-gray-700">
                <p className="mb-6 text-3xl pl-40">あなたのグループ</p>
            {tasks.map((task:any) => (
                <div key={task[0].id}>
                        <div className="w-5/6 mr-auto ml-auto border-2 border-gray-300 p-6 hover:border-4">
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/tasks/${task[0].id}`}
                            >
                              <div className="flex">
                               <div>
                                <img className="h-24 w-auto mr-6" src={task[0].item.image_path}/>
                                </div>
                                <div>
                                <p className="mb-1">商品名：{task[0].item.name}</p>
                                <p className="mb-1">依頼者：{task[0].user.user_name}</p>
                                <p>説明：{task[0].description}</p>
                                </div>
                                </div>
                            </Link>
                        </div>
                </div>
            ))}
        </div>
            </Authenticated>
    );
};

export default Index;
