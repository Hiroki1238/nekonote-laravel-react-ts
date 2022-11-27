<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{User,Group,Task,Item};
use Illuminate\Support\Facades\Auth;

class GroupController extends Controller
{
    public function index(User $user, Group $group, Task $task,Item $item) 
    {
//$groups = $group->where('user_id');
$tasks = $task->with('item','taskUsers')->where('user_id','=',Auth::id())->get();
$group = $group->groupedUsers()->get();
//dd($tasks);
        return Inertia::render('Groups/Index',['user'=>$user,'groups'=>$group,'tasks'=>$tasks]); 
    }
    
}
