<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('groups')->insert([
            'name' => 'ねこねこ会',
            'description' => '毎週火曜日活動',
            'invitation_code' => null,
            'image_path' => null,
        ]);

        DB::table('groups')->insert([
            'name' => '猫山家',
            'description' => '猫山家その1',
            'invitation_code' => null,
            'image_path' => null,
        ]);

        DB::table('groups')->insert([
            'name' => 'ラーメン猫の手 千葉店',
            'description' => '水曜日休業(水曜日は買い出しに行かないでください)',
            'invitation_code' => null,
            'image_path' => null,
        ]);
    }
}
