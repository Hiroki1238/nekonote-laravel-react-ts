import React, { Children } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";
import { Link,useForm } from "@inertiajs/inertia-react";

interface IndexProps {
    auth: any;
    //user:any;
    tasks: any;
}

const Index: React.FC<IndexProps> = (props) => {
    const { auth, tasks } = props;

    const {data, setData} = useForm({
        item_id: "",
        description: "",
        deadline: "",
        quantity: "",
        user_id: auth.user.id,
    })

      // 送信用関数
      const handleSendPosts = (e) => {
        e.preventDefault();
        Inertia.post("/posts"); //postだと赤線が出るからInertia.をつけた
    }
    // const Index :any = (props : any) => {
    // const {user,auth} = props;

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={auth}>
                  <p className="text-4xl">タスク作成画面</p>


                    <form className="pt-10" onSubmit={handleSendPosts}>
                        <div>
                            <h2>依頼する商品</h2>
                            <input type="text" placeholder="選択式にする" onChange={(e) => setData("item_id", e.target.value)}/>
                        </div>

                        <div>
                            <h2>個数</h2>
                            <input type="number" onChange={(e) => setData("quantity", e.target.value)}/>
                        </div>                     

                        <div>
                            <h2>説明</h2>
                            <textarea placeholder="急いで！" onChange={(e) => setData("description", e.target.value)}></textarea>
                        </div>

                        <div>
                            <h2>期限</h2>
                            <input
                            type="date"
                            placeholder="2020-01-01"
                            onChange={(e) =>
                                setData("deadline", e.target.value)}></input>
                        </div>
                        <button type="submit" className="px-2 py-1 mt-4 bg-blue-200 rounded-md">作成</button>
                        
                    </form>

                    <Link href="/groups/tasks">戻る</Link>
                </Authenticated>
            ) : (
                <Guest>
                    <div>
                     neko
                    </div>
                </Guest>
            )}
        </div>
    );
};

export default Index;
