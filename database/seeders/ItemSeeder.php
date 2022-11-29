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
            'group_id' => 1,
        ]);

        DB::table('items')->insert([
            'name' => 'アポロ',
            'description' => '普通のアポロの方です。',
            'stock' => '2',
            'url' => null,
            'image_path' => 'https://www.meiji.co.jp/products/chocolate/assets/img/05079.jpg',
            'group_id' => 2,
        ]);

        DB::table('items')->insert([
            'name' => 'アポロ',
            'description' => '普通のアポロの方です。',
            'stock' => '2',
            'url' => null,
            'image_path' => 'https://www.meiji.co.jp/products/chocolate/assets/img/05079.jpg',
            'group_id' => 3,
        ]);

        DB::table('items')->insert([
            'name' => 'SUNTORY 天然水 2L',
            'description' => 'この水が売っていたら必ずこれを買ってください。',
            'stock' => '6',
            'url' => null,
            'image_path' => 'https://m.media-amazon.com/images/I/71x5x6kYruL._AC_SX679_PIbundle-9,TopRight,0,0_SH20_.jpg',
            'group_id' => 1,
        ]);

        DB::table('items')->insert([
            'name' => 'ミヨシ 無添加せっけん 泡のハンドソープ',
            'description' => '無くなる前に買ってください！',
            'stock' => '7',
            'url' => null,
            'image_path' => 'https://img.my-best.com/product_images/b3065a2bb38aecf1f2c66e6d9e533f5f.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=0d5e030edd066fbbe12dd1239a75298f',
            'group_id' => 1,
        ]);

        DB::table('items')->insert([
            'name' => 'レック 激落ちくん 激落ちポイポイ',
            'description' => '無かったら別のものでも良いです。',
            'stock' => '4',
            'url' => null,
            'image_path' => 'https://dw4dgbtzbcxdk.cloudfront.net/img/goods/L/SK1941_1.jpg',
            'group_id' => 1,
        ]);

        DB::table('items')->insert([
            'name' => 'きのこの山とたけのこの里 12袋',
            'description' => '配布用です。',
            'stock' => '1',
            'url' => null,
            'image_path' => 'https://www.meiji.co.jp/products/chocolate/assets/img/07910.jpg',
            'group_id' => 1,
        ]);
        
        DB::table('items')->insert([
            'name' => 'セブンイレブン 生ハムロース',
            'description' => '無くなる前に買ってください。',
            'stock' => '3',
            'url' => null,
            'image_path' => 'https://img.7api-01.dp1.sej.co.jp/item-image/252890/74F7BD01477246EC7AA56C142BC0EED7.jpg',
            'group_id' => 1,
        ]);

    }
}
