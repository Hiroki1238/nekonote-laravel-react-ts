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
            'last_name' => '猫山',
            'first_name' => 'ネコ',
            'user_name' => 'いぬ',
            'email' => 'aaa@gmail.com',
            'password' => Hash::make('aaiiuueeoo'),
            'image_path' => null,
            'vehicle_id' => null,
        ]);
    }
}
