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
              <p>工作・DIYなど作ることが好きで「面白そう＋役に立ちたい」と思い始めたプログラミングに今ではハマっています。</p>
            </div>
          </div>

          <div class="about_deteailBtn">
          <router-link
          to="/profile">
            <next-button
            text="詳細はこちらへ"
            class="aboutBtn" />
          </router-link>
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
          <a href=""></a>
          <img src="../assets/image/cdtGame.png" alt="">
        </div>

      </div>

      <div class="works_deteailBtn">
        <router-link
        to="/works">
        <next-button
        text="過去の制作物はこちら"
        class="worksBtn"
        />
        </router-link>
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
          <h2>STORENGTH</h2>
          <p>私の強み</p>
        </div>

        <div class="appeal_contents">

          <div class="appeal_content">
            <div class="appeal_subtitle">
              <font-awesome-icon :icon="['fas', 'lightbulb']" />
            <h3>発想力</h3>
            </div>
            <p>枠にとらわれない自由な発想が得意です。</p>
            <p>人とは違うことが好きだったために自分ならではのオリジナルにこだわりを持っています。<br>そこで培った発想力はWEB制作・開発で活かせると思います。</p>
          </div>

          <div class="appeal_content">
            <div class="appeal_subtitle">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            <h3>改善力</h3>
            </div>
            <p>問題点を見つける観察力と改善力には自信があります。</p>
            <p>仕事もプライベートも常に問題意識を持ちながらもっと良くなる方法を模索しています。<br>これまで仕事で13年間改善活動に積極的に取り組み得た知識はIT業界でも応用が効くはずです。</p>
          </div>

          <div class="appeal_content">
            <div class="appeal_subtitle">
              <font-awesome-icon :icon="['fas', 'running']" />
            <h3>自走力</h3>
            </div>
            <p>主体的に考え積極的に挑戦する熱意があります。</p>
            <p>自ら問い、調べ、考え、試し、検討することで解決することを前提に職務に当たります。<br>また貪欲に知識を探求しより高いスキルを身につけことに全力で挑み続けています。
            </p>
          </div>
        </div>
      </div>

    </div>

    <div class="spaceArrow"><span></span></div>

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
/* .message */
.message {
  margin: 80px 0;
}
.message h2 {
  margin: 24px 0;
}
.message p {
  margin-bottom: 12px;
}
@media (max-width: 670px){
  .message {
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
  }
}
/* about */
.about {
  background-color: lightgray;
}
.about_contents{
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.about_image {
  flex-basis: 30%;
  height: 300px;
  margin-top: 24px;
}
.about_image img {
  width: 300px;
  height: 300px;
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
  font-size: 2rem;
  margin-bottom: 32px;
  margin-left: 24px;
  align-items: flex-start;
}
.about_text-icon {
  display: flex;
}
.about_text > p {
  text-align: left;
  margin-bottom: 16px;
  margin-left: 24px;
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
@media (max-width: 976px){
.about_contents {
  width: 80%;
}
.about_image {
  flex-basis: 40%;
}
.about_inner {
  flex-basis: 60%;
}
}
@media (max-width: 768px){
.about_contents {
  width: 90%;
}
.about_contents,
.about_name-icon,
.about_text-icon
{
  flex-direction: column;
  align-items: center;
}
.about_name,
.about_text
{
  margin-top: 16px;
  margin-left: 0;
}
.about_inner {
  margin-top: 40px;
}
}

/* .works */
.works_image {
  width: 50%;
  height: 400px;
  margin: 0 auto;
  border: 2px solid black;
  overflow-y: auto;
}
.works_image img {
  width: 100%;
  object-fit: cover;
}
.works_deteailBtn {
  margin-top: 24px;
  position: relative;
}
@media (max-width: 670px){
  .works_image {
    width: 90%;
  }
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
  padding: 60px 16px 32px 16px;
}
.service_item h3 {
  margin: 16px 0;
}
.service_item p {
  line-height: 30px;
}

/* .service-media- */
@media (max-width: 976px){
.service_contents {
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
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
  width: 90%;
  margin: 0 auto;
}
.appeal_title p {
  font-size: 1.5rem;
}
.appeal_contents {
  display: flex;
  justify-content: space-between;
}
.appeal_content {
  flex-basis: 30%;
  background-color: lightgray;
  padding:64px 16px 40px 16px;
  clip-path: polygon(0 100%, 0 10%, 100% 0, 100% 90%);
}
.appeal_subtitle {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
.appeal_content h3 {
  font-size: 1.3em;
  margin-left: 8px;
}
.appeal_content p {
  margin-bottom: 16px;
  padding: 0 16px;
}
/* .appeal-media- */
@media (max-width: 976px) {
.appeal_wrapper {
  width: 90%;
}
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

/* .spaceArrow */
.spaceArrow {
  display: block;
  height: 300px;
  position: relative;
}
span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: black;
}
</style>