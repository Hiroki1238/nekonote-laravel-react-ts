<?php

namespace App\Http\Controllers;

use App\Models\{Task, Group};
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function index(Task $task, $group_id)
    {
        $tasks_id = DB::table('task_user')->where('user_id', Auth::id())->get()->pluck('task_id')->toArray();
        $auth_tasks[] = Task::with('item','user','taskUsers')->whereIn('id', $tasks_id)->orderBy('deadline','ASC')->get();

        return Inertia::render('Groups/Task', ['tasks' => $auth_tasks]);
    }

    public function create(Task $task)
    {
        return Inertia::render('Tasks/Create');
    }
}
