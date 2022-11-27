<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    public function tasks()
    {
      return $this->hasMany(Task::class);
    }

    public function likeddUsers() //中間テーブル
    {
    return $this->belongsToMany(User::class,'likes','item_id','user_id');
    }
}
