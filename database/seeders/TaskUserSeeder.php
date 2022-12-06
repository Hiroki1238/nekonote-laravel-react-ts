<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('task_user')->insert([
            'task_id' => 1,
            'user_id' => 2,
            //'requestor_id' => 1,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 1,
            'user_id' => 3,
            //'requestor_id' => 1,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 1,
            'user_id' => 4,
            //'requestor_id' => 1,
            'status' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 2,
            'user_id' => 1,
            //'requestor_id' => 2,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 2,
            'user_id' => 3,
            //'requestor_id' => 2,
            'status' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 2,
            'user_id' => 4,
            //'requestor_id' => 4,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 3,
            'user_id' => 1,
            //'requestor_id' => 4,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 3,
            'user_id' => 2,
            //'requestor_id' => 4,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 3,
            'user_id' => 4,
            //'requestor_id' => 4,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 4,
            'user_id' => 1,
            //'requestor_id' => 4,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('task_user')->insert([
            'task_id' => 4,
            'user_id' => 2,
            //'requestor_id' => 4,
            'status' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

    }
}
