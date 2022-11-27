<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vehicles')->insert([
            'walking' => 1,
            'bicycle' => 0,
            'mortorcycle' => 0,
            'car' => 1,
        ]);

        DB::table('vehicles')->insert([
            'walking' => 1,
            'bicycle' => 1,
            'mortorcycle' => 0,
            'car' => 0,
        ]);

        DB::table('vehicles')->insert([
            'walking' => 1,
            'bicycle' => 0,
            'mortorcycle' => 1,
            'car' => 0,
        ]);

        DB::table('vehicles')->insert([
            'walking' => 0,
            'bicycle' => 0,
            'mortorcycle' => 0,
            'car' => 1,
        ]);
    }
}
