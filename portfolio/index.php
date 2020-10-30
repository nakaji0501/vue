<!-- //入力ページ -->
<?php
//セッションを開始
session_start();
 
//セッションIDを更新して変更（セッションハイジャック対策）
session_regenerate_id( TRUE );
 
//エスケープ処理やデータチェックを行う関数のファイルの読み込み
require 'libs/functions.php';
 
//初回以外ですでにセッション変数に値が代入されていれば、その値を。そうでなければNULLで初期化
$name = isset( $_SESSION[ 'name' ] ) ? $_SESSION[ 'name' ] : NULL;
$email = isset( $_SESSION[ 'email' ] ) ? $_SESSION[ 'email' ] : NULL;
$subject = isset( $_SESSION[ 'subject' ] ) ? $_SESSION[ 'subject' ] : NULL;
$body = isset( $_SESSION[ 'body' ] ) ? $_SESSION[ 'body' ] : NULL;
$error = isset( $_SESSION[ 'error' ] ) ? $_SESSION[ 'error' ] : NULL;
 
//個々のエラーを初期化（$error は定義されていれば配列）
$error_name = isset( $error['name'] ) ? $error['name'] : NULL;
$error_email = isset( $error['email'] ) ? $error['email'] : NULL;
$error_subject = isset( $error['subject'] ) ? $error['subject'] : NULL;
$error_body = isset( $error['body'] ) ? $error['body'] : NULL;
 
//CSRF対策の固定トークンを生成
if ( !isset( $_SESSION[ 'ticket' ] ) ) {
  //セッション変数にトークンを代入
  $_SESSION[ 'ticket' ] = sha1( uniqid( mt_rand(), TRUE ) );
}
 
//トークンを変数に代入
$ticket = $_SESSION[ 'ticket' ];
?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio</title>
<!-- google font -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@400;700&display=swap" rel="stylesheet">
<!-- fontawesome -->
<link href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" rel="stylesheet">
<!-- jQuery CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<!-- スライダー　プラグイン -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
<!-- Bootstrap css-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
<!-- AOS(スクロールフェード)プラグイン -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<!-- image 拡大 プラグイン -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/js/lightbox.min.js" type="text/javascript"></script>
<!-- reset css reboot-->
<link rel="stylesheet" href="css/base/bootstrap-reboot.css">
<!-- css -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/php.css">

</head>
<body>
<!-- wrapper hidden用-->
<div class="wrapper">

<!-- ローディング -->
<div class="loading" id="loading">
<div class="spinner"></div>
</div><!-- /loading -->

<!--menu-->
<nav class="menu"">
<ul class="menu_list" id="menu-list">
<li class="menu_item">
<a href="#top">top</a></li>
<li class="menu_item">
<a href="#about">about</a></li>
<li class="menu_item">
<a href="#skills">skills</a></li>
<li class="menu_item">
<a href="#service">service</a></li>
<li class="menu_item">
<a href="#works">works</a></li>
<li class="menu_item">
<a href="#contact">contact</a></li>
</ul>
</nav><!--/menu-->

<!--humberger-->
<div class="humberger">
<button class="humberger_btn" id="humberger-btn">
<span></span>
<span></span>
<span></span>
</button>
</div><!--/humberger-->

<!-- main -->
<main class="main" id="top">

<!-- main_img -->
<div class="main_img">
<img src="images/topImage.jpg" alt="TopImage" style="max-width: 100%;">
</div><!-- /main_img -->

<!-- main_title -->
<div class="main_title">
<p id="typA">Welcom</p>
<p id="typB">to Port Folio</p>
<p id="typC">by Nakajima Takumi</p>
</div><!-- /main_title -->

</main><!-- /main -->

<!--about-->
<section class="about contentWidth row" id="about">

<!-- about_title -->
<div class="about_title tit col-sm-12" data-aos="zoom-in" data-aos-duration="500">
<h2>About Me</h2>
</div><!-- /about_title -->
    
<!-- about_wrappar -->
<div class="about_wrappar row">

<!-- about_img -->
<div class="about_img col-sm-12 col-md-6" data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="center">
<img src="images/img1.jpg" alt="自分">
</div><!-- /about_img -->

<!-- about_text main -->
<div class="about_text col-sm-12 col-md-6" data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="center">
<p style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">中島　拓海</p>
<p>愛知県出身　在住</p>
<p>未経験からフロントエンドへの転職を目指し、</p>
<p>2020年5月より独学でプログラミングを学習。</p>
<p>現在はWordpressのthemeを制作しコーディングのスキルアップを目指しています。</p>
<p>小さい頃からブロックや工作が好きということもあり、プログラミングで制作物を作る過程を楽しみながら活動しています。</p>
<button class="btn aboutBtn">more</button>
<a style="color: blue;" href="https://twitter.com/nakaji_junk"><i class="icon fab fa-twitter-square fa-2x"></i>@nakaji_junk</a>
</div><!-- /about_text main -->

<!-- about_text-more -->
<div class="about_text-more col-md-6" data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="center">
<p style="font-size: 24px; font-weight: bold; text-align: center; margin-bottom: 8px;">中島　拓海</p>
<p>13年間製造工場に製造技術者として勤務</p>
<p>得意なことは「改善」で、様々な改善活動により生産性・安全面の向上に貢献してきました。</p>
<p>エクセル(関数・VBA・マクロ)を使って日々のパソコン作業の時間負荷を大幅に削減した実績があります。</p>
<p>具体的には毎日1時間のパソコン作業が20分で終わる仕組みをつくりました。</p>
<p>改善で効率化を図るのが得意なのでプログラミングに活かしつつお客様へ貢献していきます。</p>
<button class="btn aboutMoreBtn">戻る</button>
</div><!-- /about_text-more -->

</div><!-- /about_wrappar -->

</section><!--/about-->

<!-- skills -->
<section class="skills contentWidth row" id="skills">

<!-- skills_title -->
<div class="skills_title tit col-sm-12" data-aos="zoom-in" data-aos-duration="500">
<h2>Skills</h2>
</div><!-- /skills_title -->

<!-- skills_contents -->
<div class="skills_contents col-sm-12 row">

<!-- skills_item -->
<div class="skills_item col-sm-12" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-anchor-placement="top-center">
<ul class="row">

<div class="skills_item-one col-md-3">
<li><span>HTML5</span></li>
<a class="skills_item-mq js-icon icon-fab html">
<i class="fab fa-html5 fa-5x fa-size" style="color: rgb(206, 0, 0);"></i></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>CSS3</span></li>
<a class="skills_item-mq js-icon icon-fab css">
<i class="fab fa-css3-alt fa-5x fa-size" style="color: blue;"></i></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>JavaScript</span></li>
<a class="skills_item-mq js-icon icon-fab js">
<i class="fab fa-js fa-5x fa-size" style="color: gold"></i></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>jQuery</span></li>
<a class="skills_item-mq js-icon icon-jquery jquery">
<img class="fa-img" src="images/jquery.png" alt="jQuery"></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>Vue.js</span></li>
<a class="skills_item-mq js-icon icon-fab vue">
<i class="fab fa-vuejs fa-5x fa-size" style="color: green;"></i></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>Sass</span></li>
<a class="skills_item-mq js-icon icon-fab sass">
<i class="fab fa-sass fa-5x fa-size" style="color: red;"></i></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>Bootstrap</span></li>
<a class="skills_item-mq js-icon icon-fab bootstrap">
<i class="fab fa-bootstrap fa-5x fa-size" style="color: blue;"></i></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>Git hub</span></li>
<a class="skills_item-mq js-icon icon-fab github">
<i class="fab fa-github fa-5x fa-size"></i></a>
</div>

<div class="skills_item-one col-md-3">
<li><span>WordPress</span></li>
<a class="skills_item-mq js-icon icon-fab wp">
<i class="fab fa-wordpress fa-5x fa-size"></i></a>
</div>

</ul>
</div><!-- /skills_item -->

</div><!-- /skills_contents -->
</section><!-- /skills -->

<!-- service -->
<div class="service contentWidth" id="service">

<!-- service_title -->
<div class="service_title col-sm-12 tit" data-aos="zoom-in" data-aos-duration="500">
<h2>Service</h2>
</div><!-- /service_title -->

<!-- service_wrapper -->
<div class="service_wrapper row">

<!-- service_content -->
<div class="service_content col-sm-12 col-md-7 col-lg-5" data-aos="flip-left"  data-aos-duration="500">
<div class="service_content-title">
<h3>WordPress テーマ制作</h3>
</div>
<div class="service_content-text">
<p>コーディング済みのサイトにWordPressを導入・構築します。
オリジナルテーマの制作から既存テーマでの制作・カスタマイズお受けします。
</p>
</div>
</div><!-- /service_content -->

<div class="col-md-5 col-lg-7"></div><!-- 空div配置用 -->
<div class="col-md-5 col-lg-7"></div><!-- 空div配置用 -->

<!-- service_content -->
<div class="service_content col-sm-12 col-md-7 col-lg-5" data-aos="flip-right"  data-aos-duration="500">
<div class="service_content-title">
<h3>LP制作</h3>
</div>
<div class="service_content-text">
<p>商品の販売促進に適した「LP（ランディングページ）」の制作をお受けします。
しっかりとコンバージョンに結びつくようにご提案致します。
</p>
</div>
</div><!-- /service_content -->

<!-- service_content -->
<div class="service_content col-sm-12 col-md-7 col-lg-5" data-aos="flip-left"  data-aos-duration="500">
<div class="service_content-title">
<h3>コーディング代行</h3>
</div>
<div class="service_content-text">
<p>Webサイトのコーディングをお受けします。
ご希望のデザイン・Javascript(Jquery)による動きもお任せください。
レスポンシブにも対応致します。
</p>
</div>
</div><!-- /service_content -->
<div class="col-md-5 col-lg-7"></div><!-- 空div配置用 -->

</div><!-- /service_wrapper -->
</div><!-- /service -->

<!-- works -->
<div class="works contentWidth row" id="works">

<!-- works_title -->
<div class="works_title col-sm-12 tit" data-aos="zoom-in" data-aos-duration="500">
<h2>Works</h2>
</div><!-- /works_title -->

<!-- <div class="works_nav" data-aos="fade-up" data-aos-duration="2000">
<ul class="works_menu">
<li>ALL</li>
<li>Web service</li>
<li>LP</li>
<li>Copy site</li>
</ul>
</div> -->

<!-- works_contents -->
<div class="works_contents row" data-aos="oom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-anchor-placement="top-center">

<div class="works_list col-sm-6 col-md-4">
<a>My Web service</a>
<div class="works_item" data-aos="fade-up">
<a href="https://nakaji0501.github.io/app/childwithlife" data-lightbox="work">
<img src="images/webservice.png" alt="webservice"></a>
</div>
</div>

<div class="works_list col-sm-6 col-md-4">
<a>Wordpress Theme</a>
<div class="works_item" data-aos="fade-up">
<a href="http://nakaji_junk.com/wordpress" data-lightbox="work">
<img src="images/wp-theme.png" alt="wp-theme"></a>
</div>
</div>

<div class="works_list col-sm-6 col-md-4">
<a>架空 ECサイト</a>
<div class="works_item">
<a href="images/ninco.png" data-lightbox="work">
<img src="images/ninco.png" alt=""></a>
</div>
</div>

<div class="works_list col-sm-6 col-md-4">
<a>架空コーポレート</a>
<div class="works_item" data-aos="fade-up">
<a href="images/kurinote.png" data-lightbox="work">
<img src="images/kurinote.png" alt="corporate"></a>
</div>
</div>

<div class="works_list col-sm-6 col-md-4">
<a>架空コーポレート</a>
<div class="works_item" data-aos="fade-up">
<a href="images/cafetakuba.png" data-lightbox="work">
<img src="images/cafetakuba.png" alt="corporate"></a>
</div>
</div>

</div><!-- /works_contents -->

</div><!-- /works -->

<!--contact-->
<section class="contact contentWidth" id="contact">
<!-- contact_wrapper -->
<div class="contact_wrapper">

<!-- contact_title -->
<div class="contact_title tit" data-aos="zoom-in" data-aos-duration="500">
<h2>Contact</h2>
</div><!-- /contact_title -->

<!-- contact_form -->
<form action="confirm.php" method="post" id="main_contact">
<div class="contact_form row data-aos="fade-up" data-aos-duration="2000">

<div class="col-sm-12">
<label for="name">
<span class="error"><?php echo h( $error_name ); ?></span>
</label>
<input name="name" id="name" class="name validate max50 required" type="text" placeholder="お名前">
</div>

<div class="col-sm-12">
<label for="email">
<span class="error"><?php echo h( $error_email); ?></span>
</label>
<input name="email" id="email" class="validate mail required" type="text" placeholder="Email">
</div>

<div class="col-sm-12">
<label for="subject">
<span class="error"><?php echo h( $error_subject ); ?></span>
</label>
<input name="subject" id="subject" class="title subject validate max100 required"" type="text" placeholder="題名">
</div>

<div class="col-sm-12">
<label for="body">
<span class="error"><?php echo h( $error_body ); ?></span>
</label>
<textarea class="text validate max1000 required body" name="body" id="body" cols="30" rows="5" placeholder="本文（1000文字まで）をお書きください"></textarea><br>
</div>

</div><!-- /contact_form -->

<!-- contact_btn -->
<div class="contact_btn" style="text-align: center;">
<button class="btn btn-primary" type="submit">送信</button>
<!--確認ページへトークンをPOSTする、隠しフィールド「ticket」-->
<input type="hidden" name="ticket" value="<?php echo h($ticket); ?>">
<a>1-2日以内に必ずご連絡致します。</a>
</div><!-- /contact_btn -->
</form>

</div><!-- /contact_wrapper -->
</section><!--/contact-->

<!--footer-->
<footer class="footer">
<div class="footer_item">
<a href="https://twitter.com/nakaji_junk"><i class="icon fab fa-twitter-square fa-3x"></i></a>
<a href="https://github.com/nakaji0501"><i class="icon fab fa-github fa-3x"></i></a>
</div>
</footer><!--/fotter-->

<!--copyright-->
<article class="copyright">
©copyright | Nakajima Takumi
</article><!--/copyright-->

<!-- topBack -->
<div class="topBack">
<i class="fas fa-angle-double-up fa-2x"></i>
</div><!-- /topBack -->

</div><!-- /wrapper hidden用-->

<!-- Bootstrap script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

<!-- AOS(スクロールフェード)プラグイン -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init();</script>

<!-- JS/jQuery -->
<script src="js/main.js"></script>
</body>
</html>