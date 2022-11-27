<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            'name' => 'アポロ',
            'description' => '普通のアポロの方です。',
            'stock' => '2',
            'url' => 'https://products.suntory.co.jp/d/4901777216884/',
            'image_path' => null,
            'group_id' => 1
        ]);

        DB::table('items')->insert([
            'name' => 'SUNTORY 天然水 2L',
            'description' => 'この水が売っていたら必ずこれを買ってください。',
            'stock' => '6',
            'url' => 'https://products.suntory.co.jp/d/4901777216884/',
            'image_path' => null,
            'group_id' => 1
        ]);

        DB::table('items')->insert([
            'name' => 'きなこ棒',
            'description' => '配布用です。',
            'stock' => '7',
            'url' => 'https://products.suntory.co.jp/d/4901777216884/',
            'image_path' => null,
            'group_id' => 1
        ]);
    }
}
