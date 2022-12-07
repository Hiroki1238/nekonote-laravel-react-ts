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
            'deadline' => date('2022-12-20'),
            'description' => '急ぎなので、行ける人はすぐ買いに行ってください！',
            'quantity' => 4,
            'user_id' => 1,
            'item_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('tasks')->insert([
            'deadline' => date('2022-12-22'),
            'description' => '特になし',
            'quantity' => 2,
            'user_id' => 2,
            'item_id' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('tasks')->insert([
            'deadline' => date('2022-12-28'),
            'description' => '無かったら似たようなもので良いです。',
            'quantity' => 3,
            'user_id' => 3,
            'item_id' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('tasks')->insert([
            'deadline' => date('2022-12-30'),
            'description' => '急いではいません。',
            'quantity' => 3,
            'user_id' => 4,
            'item_id' => 4,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('tasks')->insert([
            'deadline' => date('2023-01-05'),
            'description' => '急いではいません。',
            'quantity' => 2,
            'user_id' => 1,
            'item_id' => 5,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
