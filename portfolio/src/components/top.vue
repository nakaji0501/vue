<template>
  <div class="top">

    <!-- message -->
    <div class="message">
      <h2>初めまして</h2>
      <p>ご覧頂きありがとうございます。</p>
      <p>独学でプログラミングを学習しWEB開発へ転職を目指している中島と申します。</p>
      <p>現在はVue.jsをメインに開発しつつオンラインで頂いたWEB制作をしています。</p>
      <p>このサイトはVus.jsの基礎を出来るだけ詰めこんで製作しました。</p>
      <p>Vue.jsらしくSPA(シングル・ページ・アプリケーション)となっているのが特徴です。</p>
      <p>ぜひ最後までご覧ください。</p>
    </div>

    <!-- about -->
    <div class="about boxSize">

      <div class="about_title tit">
        <h2>ABOUT ME</h2>
      </div>

      <div class="about_contents">

        <div class="about_image">
          <img src="../assets/image/img1.jpg" alt="">
        </div>

        <div class="about_inner">

          <div class="about_name-icon">
            <font-awesome-icon :icon="['fas', 'user']" size='2x'
            class="user" />
            <div class="about_name">
              <h3>中島 拓海</h3>
            </div>
          </div>

          <div class="about_text-icon">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" size='2x' 
            class="prof" />
            <div class="about_text">
              <p>1988年 10月 生まれ</p>
              <p>愛知県出身 在住</p>
              <p>2020年5月から独学でプログラミングを学習中。</p>
              <p>フロントエンド(開発)への転職を目指しています。</p>
              <p>工作・DIYなど作ることが好きで「面白そう＋スキルになる」と思い始めたプログラミングに今ではハマっています。</p>
            </div>
          </div>

          <div class="about_deteailBtn">
            <next-button
            text="詳細はこちらへ"
            class="aboutBtn" />
          </div>

        </div>

      </div>

    </div><!-- /top -->

    <!-- works -->
    <div class="works boxSize">

      <div class="works_title tit">
        <h2>WORKS</h2>
      </div>

      <div class="works_contents">

        <div class="works_image">
          <img src="../assets/image/webservice.png" alt="">
        </div>

      </div>

      <div class="works_deteailBtn">
        <next-button
        text="過去の制作物はこちら"
        class="worksBtn"
        />
      </div>

    </div><!-- /works -->

    <!-- service -->
    <div class="service boxSize">

      <div class="service_title tit">
        <h2>SERVICE</h2>
      </div>

      <div class="service_wrapper">
        <div class="service_contents">

          <div class="service_item-box">
            <div class="service_item-circle">
              <p>
              <font-awesome-icon :icon="['fas', 'code']" size="2x" />
              </p>
            </div>
            <div class="service_item">
              <h3>LP製作</h3>
              <p>商品の販売促進に適した[LP(ランディングページ)」の制作をお手伝いします。</p>
              <p>コンバージョンに結びつくようにしっかりとご提案致します。</p>
            </div>
          </div>

          <div class="service_item-box">
            <div class="service_item-circle">
              <p>
              <font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" />
              </p>
            </div>
            <div class="service_item">
              <h3>ホームページ製作</h3>
              <p>トップページ・下層ページのみのコーディングもお気軽にお申し付けください。</p>
              <p>お客様のサービスの魅力が最大限に伝わるWebサイトをお作りします。</p>
            </div>
          </div>

          <div class="service_item-box">
            <div class="service_item-circle">
              <p>
              <font-awesome-icon :icon="['fab', 'wordpress']" size="3x" />
              </p>
            </div>
            <div class="service_item">
              <h3>WordPress構築</h3>
              <p>コーディング済みのサイトにWordPressを導入致します。</p>
              <p>既存テーマでの構築やオリジナルテーマの制作・カスタマイズも可能です。</p>
            </div>
          </div>

        </div>

      </div>

    </div><!-- /service -->

    <div class="appeal">
      <div class="appeal_wrapper">

        <div class="appeal_title tit">
          <h2>私の強み</h2>
        </div>

        <div class="appeal_contents">

          <div class="appeal_content">
            <div class="appeal_subtitle">
              <font-awesome-icon :icon="['fas', 'lightbulb']" />
            <h3>発想力</h3>
            </div>
            <p>枠にとらわれない自由な発想が得意です。</p>
            <p>web制作でアピール出来るポイントをかくweb制作でアピール出来るポイントをかくweb制作でアピール出来るポイントをかく</p>
          </div>

          <div class="appeal_content">
            <div class="appeal_subtitle">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            <h3>改善力</h3>
            </div>
            <p>問題点を見つける観察力とそれらを良くする改善力には自信があります。</p>
            <p>Web制作ではより良いデザイン・レイアウト・機能を追求します。</p>
          </div>

          <div class="appeal_content">
            <div class="appeal_subtitle">
              <font-awesome-icon :icon="['fas', 'code']" />
            <h3>地道にコツコツ</h3>
            </div>
            <p>ここに本文です。ここに本文です。ここに本文です。</p>
            <p>ここに本文です。ここに本文です。ここに本文です。</p>
          </div>
        </div>
      </div>

    </div>

    <!-- contact -->
    <contact />

  </div>
</template>

<script>
import contact from '../components/contact'
import nextButton from '../parts/nextButton'

export default {
  name: 'top',
  components: {
    contact,
    nextButton,
  },
}
</script>

<style scoped>
/* .top */
.message {
  margin: 80px 0;
}
.message h2 {
  margin: 24px 0;
}
.message p {
  margin-bottom: 12px;
}
/* about */
.about {
  background-color: lightgray;
}
.about_contents{
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.about_image {
  flex-basis: 30%;
  width: 300px;
  height: 300px;
}
.about_image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.about_inner {
  flex-basis: 50%;
  margin: 16px 0 56px 0;
}
.about_name-icon {
  display: flex;
}
.about_name {
  margin-bottom: 32px;
}
.about_text-icon {
  display: flex;
}
.about_text > p {
  text-align: left;
  margin-bottom: 16px;
}
.about_deteailBtn {
  margin-top: 64px;
  position: relative;
}
.user, .prof {
  width: 50px;
  transform: translateY(-25%);
}

/* .about-media- */
@media (max-width: 670px){
.about_contents {
  flex-direction: column;
  align-items: center;
}
.about_inner {
  margin-top: 40px;
}
}

/* .works */
.works {
  padding-bottom: 40px;
}
.works_image {
  width: 50%;
  margin: 0 auto;
  border: 2px solid black;
}
.works_image img {
  width: 100%;
}
.works_deteailBtn {
  margin-top: 54px;
  position: relative;
}

/* .service */
.service {
  background-color: lightgray;
  padding: 80px;
  padding-bottom: 200px;
}
.service_contents {
  display: flex;
  justify-content: space-evenly;
  margin-top: 24px;
}
.service_item-box {
  flex-basis: 30%;
  position: relative;
  border: 1px solid black;
  box-shadow: 0 0 12px #333;
}
.service_item-circle {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border: 1px solid black;
  box-shadow: 0 0 12px #333;
  border-radius: 50%;
  background-color:lightgray;
}
.service_item-circle p {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
.service_item {
  width: 80%;
  margin: 0 auto;
  padding: 60px 16px 16px 16px;
}
.service_item h3 {
  margin: 16px 0;
}

/* .service-media- */
@media (max-width: 670px){
.service_contents {
  flex-wrap: wrap;
}
.service_item {
  padding-bottom: 40px;
}
.service_item-box {
  flex-basis: 100%;
  margin-bottom: 140px;
}
.service_item-box:first-child {
  margin-top: 60px;
}
.service_item-box:last-child {
  margin-bottom: 0;
}
}

/* .appeal */
.appeal {
  margin: 10vh auto;
}
.appeal_wrapper {
  width: 80%;
  margin: 0 auto;
}
.appeal_contents {
  display: flex;
  justify-content: space-between;
}
.appeal_content {
  flex-basis: 25%;
  background-color: lightgray;
  padding: 40px 8px;
  clip-path: polygon(0 100%, 0 10%, 100% 0, 100% 90%);
}
.appeal_subtitle {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
.appeal_content h3 {
  margin-left: 8px;
}
.appeal_content p {
  margin-bottom: 16px;
}
/* .appeal-media- */
@media (max-width: 670px) {
.appeal_contents {
  flex-direction: column;
}
.appeal_content {
  margin-bottom: 24px;
}
.appeal_content:last-child {
  margin-bottom: 0;
}
}
</style>