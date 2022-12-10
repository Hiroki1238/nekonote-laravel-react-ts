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
        $tasks_id = DB::table('task_user')->where('user_id', Auth::id())->get()->pluck('task_id')->toArray();
        $auth_tasks[] = Task::with('item','user','taskUsers')->whereIn('id', $tasks_id)->orderBy('deadline','ASC')->get();
         
        return Inertia::render('Home/Index',['tasks' => $auth_tasks]); 
    }

    public function top()
    {       
        return Inertia::render('Home/Top'); 
    }
}
