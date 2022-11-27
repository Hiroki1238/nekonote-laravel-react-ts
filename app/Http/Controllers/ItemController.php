<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function index(Item $item)
    {
        $items = $item->get();
        return Inertia::render('Groups/Item',['items' => $items]);
    }

}
