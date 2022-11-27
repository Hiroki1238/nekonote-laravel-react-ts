<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{User,Group,Task};

class GroupController extends Controller
{
    public function index(User $user, Group $group, Task $task)
    {
//$groups = $group->where('user_id');
        return Inertia::render('Groups/Index',['user'=>$user->find($user->id),'groups'=>$group->get()]); 
    }
    
}
