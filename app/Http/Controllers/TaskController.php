<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(Task $task)
    {
        $tasks = $task->orderBy('created_at', 'ASC')->get();
        return Inertia::render('Groups/Task',['tasks' => $tasks]); 
    }
}

// return Inertia::render('Home/Index', ['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $reviews]);
