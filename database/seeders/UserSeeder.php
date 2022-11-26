<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
'last_name'=>'猫山',
'first_name'=>'ネコ',
'user_name'=>'いぬ',
'email'=>'aaa@gmail.com',
'password'=>'aaiiuueeoo',
'image_path'=>null,
'vehicle_id'=>null,
    ]);
    
    }
}




$table->id();
            $table->string('last_name');
            $table->string('first_name');
            $table->string('user_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('image_path')->nullable();
            $table->foreignId('vehicle_id')->nullable()->constrained('vehicles');