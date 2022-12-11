<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\MypageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(TaskController::class)->group(function () {
    Route::get("/groups/tasks/create", "create");
    Route::post("/groups/tasks/store", "store");
    Route::get("/groups/tasks/{group}", "index");
    Route::get("/groups/tasks/detail/{task}", "show");
});

Route::controller(ItemController::class)->group(function () {
    Route::get("/groups/items/{group}", "index");
    Route::get("/groups/items/{group}/{item}", "show");
});

Route::controller(GroupController::class)->group(function () {
    Route::get("/groups/{user}", "index");
});

Route::controller(HomeController::class)->group(function () {
    Route::get("/", "top");
    Route::get("/home", "index");
});

Route::controller(MypageController::class)->group(function () {
    Route::get("/mypage/{auth}", "index");
});

require __DIR__ . '/auth.php';
