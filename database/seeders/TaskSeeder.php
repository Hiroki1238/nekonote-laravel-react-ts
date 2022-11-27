<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            'deadline' => now(),
            'description' => '急いなので、行ける人はすぐ買いに行ってください！',
            'quantity' => 4,
            'user_id' => 1,
            'item_id' => 1,
        ]);

        DB::table('tasks')->insert([
            'deadline' => now(),
            'description' => '特になし',
            'quantity' => 2,
            'user_id' => 2,
            'item_id' => 2,
        ]);

        DB::table('tasks')->insert([
            'deadline' => now(),
            'description' => '無かったら似たようなもので良いです。',
            'quantity' => 3,
            'user_id' => 2,
            'item_id' => 3,
        ]);
    }
}
