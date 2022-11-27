<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function taskUsers()   //中間テーブル
    {
      return $this->belongsToMany(User::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
