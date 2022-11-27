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
            'url' => null,
            'image_path' => 'https://www.meiji.co.jp/products/chocolate/assets/img/05079.jpg',
            'group_id' => 1
        ]);

        DB::table('items')->insert([
            'name' => 'SUNTORY 天然水 2L',
            'description' => 'この水が売っていたら必ずこれを買ってください。',
            'stock' => '6',
            'url' => null,
            'image_path' => 'https://m.media-amazon.com/images/I/71x5x6kYruL._AC_SX679_PIbundle-9,TopRight,0,0_SH20_.jpg',
            'group_id' => 1
        ]);

        DB::table('items')->insert([
            'name' => 'ミヨシ 無添加せっけん 泡のハンドソープ',
            'description' => '無くなる前に買ってください！',
            'stock' => '7',
            'url' => null,
            'image_path' => 'https://cdn.shopify.com/s/files/1/0057/4616/3815/products/hand-b-a_533x.png?v=1622706881',
            'group_id' => 1
        ]);

        DB::table('items')->insert([
            'name' => 'レック 激落ちくん 激落ちポイポイ',
            'description' => '無かったら別のものでも良いです。',
            'stock' => '4',
            'url' => null,
            'image_path' => 'https://dw4dgbtzbcxdk.cloudfront.net/img/goods/L/SK1941_1.jpg',
            'group_id' => 1
        ]);

        DB::table('items')->insert([
            'name' => 'きのこの山とたけのこの里 12袋',
            'description' => '配布用です。',
            'stock' => '1',
            'url' => null,
            'image_path' => 'https://www.meiji.co.jp/products/chocolate/assets/img/07910.jpg',
            'group_id' => 1
        ]);

    }
}
