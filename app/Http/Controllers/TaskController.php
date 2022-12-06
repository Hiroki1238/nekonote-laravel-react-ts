<?php

namespace App\Http\Controllers;

use App\Models\{Task, Group};
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function index(Task $task)
    {
        $tasks = DB::table('task_user')->where('user_id', Auth::id())->get();
        //$tasks = Task::with('item','user','taskUsers')->get();
        //$auth_groups = array(); 

        //上のコードで取得したgroup_idのレコードをgroupsテーブルから取ってくる
        foreach($tasks as $task){
            $auth_tasks[] = Task::with('item','user','taskUsers')->where('id',$task->task_id)->orderBy('deadline','DESC')->get(); //groupsテーブルのカラムを配列に格納
        }
        return Inertia::render('Groups/Task',['tasks' => $auth_tasks]); 
    }
}

// return Inertia::render('Home/Index', ['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $reviews]);

$groups = DB::table('group_user')->where('user_id', Auth::id())->get(); //これでAuth::id()とgroup_idの全組み合わせが取れる
        $auth_groups = array(); //↑上のコードで取得したgroup_idのレコードをgroupsテーブルから取ってくる

        foreach($groups as $group){
            $auth_groups[] = Group::with('item','user','taskUsers')->where('id',$group->group_id)->get(); //groupsテーブルのカラムを配列に格納
        }
