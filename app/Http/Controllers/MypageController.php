<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{User,Group,Task};




class MypageController extends Controller
{
    public function index(User $user)
    {
        return Inertia::render("Mypage/Index", ['user' => $user]);
    }
}
