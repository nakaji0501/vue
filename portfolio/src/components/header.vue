<template>
  <div class="vueHeader">

    <div class="title">
      <h1>Port Folio</h1>
    </div>

    <div class="mainImage">
    </div>
    <div class="text">
      <text-anime v-if="anime" />
    </div>

    <div class="mask"></div>

    <div class="nav">

      <ul class="list">
      <li
      v-for="(item, index) in lists"
      :key="index"
      class="item"
      >
      <router-link
      :to=item.path
      >
        <p>
          <font-awesome-icon
          :prefix="item.prefix"
          :icon="item.icon"
          :size="item.size"
          class="faIcon"
          style='color: #fff'
          />
        </p>
        <p class="item_text" >
          {{ item.title }}
        </p>

        <more-button />

      </router-link>
      </li>

      </ul>

    </div>

  </div>
</template>

<script>
import TextAnime from '../parts/textAnime'
import moreButton from '../parts/moreButton'

export default {
  name: 'vueHeader',
  components: {
    TextAnime,
    moreButton,
  },
  data() {
    return {
      anime: true,
      autoplay: true,
      lists: [
        { title: 'top', path: '/', prefix: 'fas', icon: 'desktop', size: '2x',
        id: 1, text: 'TOPページです。', subText: '制作物の紹介と私に出来る業務・私自身についてご紹介します。' },
        { title: 'profile', path: '/profile', prefix: 'fas', icon: 'address-card', size: '2x',
        id: 2, text: 'Profileページです。', subText: '私のプログラミング学習の経過や学習している言語などをご紹介します。' },
        { title: 'works', path: '/works', prefix: 'fas', icon: 'file-code', size: '2x',
        id: 3, text: 'Serviceページです。', subText: '過去の制作物をご紹介します。'},
        { title: 'contact', path: '/contactForm', prefix: 'far', icon: 'envelope', size: '2x',
        id: 4, text: 'contactページです。', subText: 'お気軽にお問い合わせください。' },
      ],
    }
  },
}
</script>

<style scoped>
.router-link-exact-active p,
.router-link-exact-active * {
  color: red;
  border-color: transparent !important;
  border-left-color: red !important;
}
.active {
  background-color: lightgray;
}
.vueHeader {
  position: relative;
  color: #fff;
}
.title {
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 50;
}
.title h1 {
  font-size: 3em;
}
.mainImage {
  background: url('../assets/image/bgimg2.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 500px;
}
.text {
  font-size: 20px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
.mask {
  background-color: rgba(20, 20, 20, 0.7);
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 30;
  width: 100%;
  height: 200px;
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
}
.nav {
  position: absolute;
  bottom: 3%;
  left: 0;
  width: 100%;
  z-index: 60;
}
.list {
  display: flex;
  justify-content: space-around;
}
.item_text {
  font-size: 2rem;
  color: rgb(25, 87, 255);
  margin: 12px 0;
}
a {
  text-decoration: none;
}
@media (max-width: 568px){
  .item_text {
    font-size: 1.3em;
  }
}

</style>