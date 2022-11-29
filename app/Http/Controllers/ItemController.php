<?php

namespace App\Http\Controllers;

use App\Models\{Item,User,Group};
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function index(Item $item, User $user)
    {
        $items = $item->get();
        //$user->myGroups()->where('user_id', Auth::id())->get();
        //dd($groups);
        return Inertia::render('Groups/Item',['items' => $items]);
    }

}
