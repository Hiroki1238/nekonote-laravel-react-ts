<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Task;

class HomeController extends Controller
{
    public function index()
    {
         //2: タスクの取得
         $tasks = DB::table('task_user')->where('user_id', Auth::id())->get();
         //$auth_groups = array();
 
         foreach($tasks as $task){
             $auth_tasks[] = Task::with('item','user','taskUsers')->where('id',$task->task_id)->get();
         }
         
        return Inertia::render('Home/Index',['tasks' => $auth_tasks]); 
    }
}
