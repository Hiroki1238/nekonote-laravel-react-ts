<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function index()
    {
        return Inertia::render('Items/Index'); 
    }

    public function show()
    {
        return Inertia::render('Items/Show'); 
    }
}
