<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Group;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MypageController extends Controller
{
    public function index(Group $group)  //Authが属しているグループの情報を取得
    {
        $groups = DB::table('group_user')->where('user_id', Auth::id())->get(); //これでAuth::id()とgroup_idの全組み合わせが取れる
        $auth_groups = array(); //↑上のコードで取得したgroup_idのレコードをgroupsテーブルから取ってくる

        foreach($groups as $group){
            $auth_groups[] = Group::where('id',$group->group_id)->get(); //groupsテーブルのカラムを配列に格納
        }

        return Inertia::render("Mypage/Index", ['groups' => $auth_groups]);
    }
}
//参考：https://teratail.com/questions/162257?link=qa_related_sp
