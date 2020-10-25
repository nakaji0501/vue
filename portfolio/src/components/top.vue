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

          <div class="about_name">
            <h3>中島 拓海</h3>
          </div>

          <div class="about_text">
            <p>ご覧頂きありがとうございます</p>
            <p>このページはトップです</p>
            <p>これはテストテキストです。これはテストテキストです。これはテストテキストです。これはテストテキストです。</p>
            <p>これはテストテキストです。これはテストテキストです。</p>
            <p>このページはトップです</p>
            <p>このページはトップですこれはテストテキストです。</p>
          </div>

          <div class="about_deteailBtn">
            <next-button class="aboutBtn" />
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
        <next-button class="worksBtn" />
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
              <p>LP製作します。LP製作します。LP製作します。LP製作します。LP製作します。LP製作します。LP製作します。</p>
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
              <p>ホームページ制作承ります。ここはテストテキストです。ここはテストテキストです。ここはテストテキストです。ここはテストテキストです。ここはテストテキストです。ここはテストテキストです。</p>
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
              <p>WordPressでのサイト構築・テーマ作成します。ここはテストテキストです。ここはテストテキストです。ここはテストテキストです。ここはテストテキストです。ここはテストテキストです。</p>
            </div>
          </div>

        </div>

        <div class="service_deteailBtn">
          <next-button class="serviceBtn" />
        </div>
      </div>

    </div><!-- /service -->

    <!-- contact -->
    <div class="contact">

      <div class="contact_title tit">
        <h2>CONTACT</h2>
      </div>

      <div class="contact_text">
        <p>お問い合わせは下記よりご連絡ください。</p>
        <p>Twitterからでもお問い合わせいただけます。</p>
        <p>1-2日以内に返信致します。</p>
      </div>

      <div class="contact_button">
        <contact-button />
      </div>

    </div><!-- /contact -->

  </div>
</template>

<script>
import nextButton from '../parts/nextButton'
import contactButton from '../parts/contactButton'

export default {
  name: 'top',
  message: 'hekko',
  components: {
    nextButton,
    contactButton,
  }
}
</script>

<style scoped>
/* common */
.boxSize {
  margin: 80px auto;
}
.tit {
  padding: 56px 0;
  font-size: 3em;
}

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
.about_name {
  margin-bottom: 32px;
}
.about_text > p {
  margin-bottom: 16px;
}
.about_deteailBtn {
  margin-top: 64px;
  position: relative;
}

/* .works */
.works_image {
  width: 50%;
  margin: 0 auto;
  border: 2px solid black;
}
.works_deteailBtn {
  margin-top: 54px;
  position: relative;
}

/* .service */
.service {
  background-color: lightgray;
  padding-bottom: 80px;
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
.service_deteailBtn {
  margin-top: 54px;
  position: relative;
}

/* .contact */
.contact h2 {
  margin: 24px 0;
}
.contact_text p {
  margin-bottom: 8px;
}

.contact_button {
  margin-top: 80px;
}
</style>