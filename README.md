# ネコノテ

<img width="91" alt="raion_logo" src="https://user-images.githubusercontent.com/105682555/201507595-326dd310-0420-4194-a3fa-f8e6b183b3f0.png">
いつも使ってる歯磨き粉がもう無くなる...
ストックもない...
そんな悲しみから沢山の人を救うためのアプリケーションです。

## 本アプリの概要
本アプリは主に以下の二点を目的としたアプリケーションです。
1. 買い出しを頼む作業をサポートします。家族やサークル、職場などでの使用を想定しています。
2. グループを自由に作ることができ、グループのメンバーが使う商品を商品一覧画面で表示します。自由に登録できるので、商品のラインナップは各グループによって異なります。
3. 残り在庫が少なくなった商品があったら通知することができます。（未完成）

#### デプロイ先
調整中です。

#### テスト用アカウント
メールアドレス：neko@gmail.com  
パスワード：nekoneko

#### 注意
本アプリは制作途中です。

#### 制作背景
文章作成中

---

## 実装済み機能
- 会員登録機能
- 商品の一覧表示機能
- タスク表示機能
- 画像投稿機能（S3）


#### 今後の展望
- ソーシャルログイン(Google,Twitterなど)
- タスク等をLINEに通知できるようにする
- 全体的なデザインの修正

---

## 使用技術
#### フロントエンド
- React18
- TypeScript
- HTML
- CSS(Tailwind)

#### バックエンド
- Laravel9 (PHP)

#### インフラ
- Docker
- MySQL
- Amazon S3

#### その他
- Visual Studio Code

---

## 構成図
※修正中です。

---

## データベース設計

#### 各テーブルについて
|テーブル名|説明|
| :---: | :---: |
|  users  |  ユーザー情報  |
|  vehicles  |  ユーザーの移動手段の情報  |
|  tasks  |  タスクの情報  |
|  task_user  |  タスクとその引受人の情報  |
|  items  |  ユーザーが登録した商品情報  |
|  likes (item_user)  |  商品に対するお気に入り情報  |
|  groups  |  グループの情報  |
|  group_user  |  各グループに所属するユーザーの情報  |

<img width="1000" alt="ER-diagram" src="https://user-images.githubusercontent.com/105682555/204138769-97df4f39-1eda-4a68-ac86-79abc53efb27.png">

---

## 環境の立ち上げ方
1. DockerDesktopのインストール
2. このリポジトリをクローン
3. 対象箇所で下記を実行
```
//nekonote-laravel-react-tsで下記を実行

＄ sail up -d
```

4. マイグレーション
```
//nekonote-laravel-react-tsで下記を実行
$ sail artisan migrate
$ sail artisan db:seed
```

5. composer、node.jsのインストール
```
$composer install
$npm install
```

6.ローカルでアプリケーションを起動
```
$ sail up -d
$ npm run dev
// localhostにアクセスするとプレビューが確認できる
```

#### dockerの停止
```
// dockerコンテナの停止
$ sail stop

// dockerコンテナの削除
$ sail down
```
