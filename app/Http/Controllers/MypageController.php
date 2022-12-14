<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{Group, Task};
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MypageController extends Controller
{
    public function index(Group $group, Task $task)  //Authが属しているグループの情報を取得
    {
        //1: グループの取得
        $groups = DB::table('group_user')->where('user_id', Auth::id())->get(); //これでAuth::id()とgroup_idの全組み合わせが取れる

        //上のコードで取得したgroup_idのレコードをgroupsテーブルから取ってくる
        foreach($groups as $group){
            $auth_groups[] = Group::where('id',$group->group_id)->get(); //groupsテーブルのカラムを配列に格納
        }

        //2: タスクの取得
        $tasks_id = DB::table('task_user')->where('user_id', Auth::id())->get()->pluck('task_id')->toArray();
        $auth_tasks[] = Task::with('item','user','taskUsers')->whereIn('id', $tasks_id)->orderBy('deadline','ASC')->get();
        
        return Inertia::render("Mypage/Index", ['groups' => $auth_groups,  'tasks' => $auth_tasks]);
    }
}
//参考：https://teratail.com/questions/162257?link=qa_related_sp
//DB:: は表示にしか使えず、これで持ってきたデータを加工できない
