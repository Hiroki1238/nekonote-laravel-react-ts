<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'last_name' => 'ねこ',
            'first_name' => 'ねこぴ',
            'user_name' => 'nekopi',
            'email' => 'neko@gmail.com',
            'password' => Hash::make('nekoneko'),
            'image_path' => null,
            'vehicle_id' => 1,
        ]);

        DB::table('users')->insert([
            'last_name' => '猫山',
            'first_name' => 'ネコ',
            'user_name' => 'neko',
            'email' => 'aaa@gmail.com',
            'password' => Hash::make('aaiiuueeoo'),
            'image_path' => null,
            'vehicle_id' => 2,
        ]);

        DB::table('users')->insert([
            'last_name' => '犬川',
            'first_name' => 'イヌ',
            'user_name' => 'inu',
            'email' => 'bbb@gmail.com',
            'password' => Hash::make('abcdefgh'),
            'image_path' => null,
            'vehicle_id' => 3,
        ]);

        DB::table('users')->insert([
            'last_name' => '上下',
            'first_name' => '左右',
            'user_name' => 'center',
            'email' => 'ccc@gmail.com',
            'password' => Hash::make('abcd1234'),
            'image_path' => null,
            'vehicle_id' => 4,
        ]);
    }
}
