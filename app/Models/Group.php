<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    public function users()   //中間テーブル
    {
      //return $this->belongsToMany(User::class)->withPivot(['group_id','user_id']);
      return $this->belongsToMany(User::class, 'group_user', 'group_id', 'user_id')->withPivot(['group_id','user_id']);
    }
}
