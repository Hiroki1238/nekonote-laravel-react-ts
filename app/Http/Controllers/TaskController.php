<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        return Inertia::render('Tasks/Index'); 
    }

    public function show()
    {
        return Inertia::render('Tasks/Show'); 
    }
}
