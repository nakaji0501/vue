<template>
    <div class="works">

        <div class="works_title">
            <h2>WORKS</h2>
        </div>

        <div class="works_contents">

            <div class="works_content"
            v-for="(item, index) in lists"
            :key="item.id"
            >
                <h3>{{ item.name }}</h3>
                <div class="works_img">
                    <img :src="item.img">
                </div>
                <div class="accordion"
                v-cloak
                >
                    <button class="accordion-trigger" type="buton"
                    :class="{'is-active': activeToggle === index }"
                    @click="accordionToggle(index)"
                    >
                    {{ toggleButton }}
                    </button>
                    <div class=""
                    :class="{'is-active': activeToggle === index }"
                    v-if="activeToggle === index"
                    >
                        <div class="accordion-body">
                            <p>・{{ item.date }}</p>
                            <p>・{{ item.text }} </p>
                            <p>・{{ item.point1 }}<br>{{ item.point2 }}<br>{{ item.point3 }}</p>
                            <p>・{{ item.language }}</p>
                            <!-- <a @click="getUrl()">・リンク先へ</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="space">
            <p style="color: #fff; transform: translateY(-2rem);">現在調整中により表示の不具合があります。</p>
        </div>

        <div class="contactBtn-position">
        <contact-button />
      </div>
    </div>
</template>

<script>
import contactButton from '../components/contactButton'

export default {
    name: 'works',
    components: {
        contactButton,
    },
    data() {
        return {
            activeToggle: null,
            toggleButton: 'open',
            lists: [
                // {
                //     id: '',
                //     date: '[制作日]',
                //     name: '',
                //     img: 'require()',
                //     text: '',
                //     point1: '',
                //     point2: '',
                //     language: '',
                //     url: '',
                // },
                {
                id: '7',
                date: '[制作日]:2020.11.08',
                name: 'カウントダウンタイマーゲーム(Vue.js)',
                img: require('@/assets/image/cdtGame.png'),
                text: '制限時間内に思い出す作業を繰り返す脳活ゲーム',
                point1: '主な機能は「カウンドダウンタイマー」と「ToDo]です。',
                point2: '　ゲーム自体はシンプルですがVue.jsの基礎が詰まっていて基礎練習にぴったりでした。',
                language: 'Vue.js,html,css',
                url: 'http://nakaji-junk.com/CountDownTimer/',
                },
                {
                id: '6',
                date: '[制作日]:2020.08.20',
                name: 'コーポレートサイト(WordPress)',
                img: require('@/assets/image/wp-theme.png'),
                text: 'WordPressのテーマを制作',
                point1: 'WordPressとBOOTSTRAPの練習として制作',
                language: 'html,css,Sass,Wordpress',
                url: 'http://nakaji-junk.com/wordpress'
                },
                {
                id: '5',
                date: '[制作日]:2020.07.29',
                name: 'ECサイト(模写)',
                img: require('@/assets/image/ninco.png'),
                text: 'JavaScriptの理解を深めるために制作',
                point1: 'JSONデータの取得や表示、条件別の画面表示などを学習',
                point2: ' 検索機能やカートに入れるなどのECサイトの機能を実装',
                language: 'html,css,Javascript,Sass',
                url: 'https://nakaji-junk.com/ninja'
                },
                {
                id: '4',
                date: '[制作日]:2020.07.08',
                name: 'コーポレートサイト(Udemy)',
                img: require('@/assets/image/cafetakuba.png'),
                text: 'ホームページのTOPページを制作',
                point1: 'JavaScriptの理解を深めるために制作',
                point2: '　classコンストラクタとanimationとプラグインを重点的に学習',
                language: 'html,css,Javascript',
                url: 'https://nakaji-junk.com/cafe/'
                },
                {
                id: '3',
                date: '[制作日]:2020.06.23',
                name: 'JavaScriptでミニアプリを作成',
                img: require('@/assets/image/webservice.png'),
                text: 'inputの値を参照にデータを加工しレスポンスしたデータを表示させた',
                point1: '[ターゲット層]:0歳〜6歳の子どもを持つ親。',
                point2: '　[目的]:子育てをする親に子どもと接する時間の大切さを数字で認識してもらうため。',
                point3: '　[制作過程]:DOMを操作する練習として作成。DOMの変更だけで画面遷移するように意識しました。',
                language: 'html,css,Javascrpit',
                url: 'https://nakaji0501.github.io/app/childwithlife'
                },
                {
                id: '2',
                date: '[制作日]:2020.06.16',
                name: 'コーポレートサイト',
                img: require('@/assets/image/fake-outdoor.png'),
                text: 'ホームページのTOPページを実装。',
                point1: 'flexboxとSassの練習として制作',
                language: 'html,css,Javascript,Sass',
                url: 'https://nakaji-junk.com/fake-outdoor/'
                },
                {
                id: '1',
                date: '[制作日]:2020.05.20',
                name: 'コーポレートサイト(模写)',
                img: require('@/assets/image/kurinote.png'),
                text: '企業用ホームページを制作',
                point1: 'HTML,CSSとレスポンシブの練習として制作。初めての模写作品。',
                language: 'html.css',
                url: 'https://nakaji-junk.com/kurinote/'
                },
            ],
        }
    },
    methods: {
        accordionToggle: function(index) {
            if(this.activeToggle === index) {
                this.activeToggle = null;
                this.toggleButton = 'open'
            } else {
                this.activeToggle = index;
                this.toggleButton = 'close'
            }
        },
        getUrl: function() {
            location.href="http://nakaji-junk.com/CountDownTimer/"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.works {
    background-color: #333;
}

.works_title {
    margin-bottom: 40px;
    padding-top: 64px;
    color: #fff;
}
.works_contents {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 8px;
}

.works_content {
    background-color: #fff;
    display: inline-block;
    margin: 24px 0;
    flex-basis: 30%;
    box-shadow: 0 0 8px #fff;
    padding: 8px 0;
}

.works_contents h3 {
    width: 90%;
    margin: 0 auto;
    color: darkblue;
    font-size: 1.2rem;
}
p {
    width: 80%;
    display: inline-block;
    text-align: left;
    margin-bottom: 8px;
}
a {
    width: 80%;
    display: inline-block;
    text-align: left;
}
.works_img {
    height: 250px;
    width: 100%;
    margin: 8px 0;
    background-color: lightgray;
    overflow-y: auto;
}
.works_img img {
    width: 100%;
}
.accordion {
    border-top: 1px solid #333;
}
.accordion-trigger {
    margin: 16px 0;
    border-style: dashed;
    padding: 8px;
    border-radius: 4px;
}
.accordion-body p {
    max-width: 90%;
}
.accordion-body a {
    color: blue;
    cursor: pointer;
}
.space {
    height: 200px;
    background-color: #333;
    transform: translateY(50%);
}
.contactBtn-position {
    position: relative;
    z-index: 100;
    width: 280px;
    margin: 0 auto;
}
@media (max-width: 670px) {
.works_contents {
    flex-direction: column;
    width: 80%;
}
}
</style>