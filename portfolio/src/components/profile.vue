<template>
    <div class="profile">
        <div class="parallax-wrapper">

        <div class="content">
            <p>{{ page }}</p>
            <p class="content_name">{{ name }}</p>
            <p>{{ furikana }}</p>
        </div>

        <div class="centerLine">
            <span></span>

            <div class="status c-width">
                <p v-once
                class="subTitle">STATUS</p>
                <a>年齢: {{ status.old }}</a>
                <a>出身地: {{ status.from }}</a>
                <a>趣味: {{ status.hobby }}</a>
                <a>得意: {{ status.strong }}</a>
                <a>資格: {{ status.qualifications }}</a>
            </div>

            <div class="study_map c-width">
                <p v-once
                class="subTitle">STUDY</p>
                <ul
                v-for="(list, index) in studyList"
                :key="index"
                >
                    <li>
                        <a>{{ list.date }}</a>
                        <br>
                        {{ list.study }}
                    </li>
                </ul>
                <div class="study_books">
                    <p>Lesson -Books-</p>
                    <ul v-for="(book, index) in books"
                    :key="index">
                        <li>{{ book.name }}</li>
                    </ul>
                </div>
            </div>

            <div class="skill c-width">
                <p v-once
                class="subTitle">LEARNING</p>
                <div class="skill_inner">
                    <ul class="skill_list">
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'html5']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'css3']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'js']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'vuejs']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'php']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'sass']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'bootstrap']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'wordpress']" />
                        </li>
                        <li class="skill_item">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </li>
                    </ul>
                </div>
                <!-- v-forでiconが呼び出せない。fab→fasになる -->
                <!-- <ul class="list">
                    <li
                    v-for="skill in skills"
                    :key="skill.id"
                    class="item">
                        <p>
                        <font-awesome-icon
                        :prefix="fab"
                        :icon="skill.icon"
                        :size="skill.size"
                        class="faIcon"
                        style='color: #fff'
                        />
                        </p>
                    </li>
                </ul> -->
                <!-- /v-forでiconが呼び出せない。fab→fasになる -->

                <next-button
                text="私にできること"
                class="nextBtn" />
            </div>

            <div class="output c-width">
                <p v-once
                class="subTitle">OUTPUT</p>
                <a style="text-decoration: line-through">Qiita</a>
                <a href="@nakaji-junk">Twitter</a>
            </div>

            <div class="business c-width">
                <p v-once
                class="subTitle">BUSINESS<br>-online-</p>
                <ul v-for="work in business"
                :key="work.date"
                >
                <li>
                    <p>{{ work.date }}</p>
                    <a>{{ work.title }} <br>
                        {{ work.language }}
                </a>
                </li>
                </ul>
            </div>
        </div>
        </div>

        <div class="parallax-bg"></div>

        <div class="messageText">
            <div class="messageText_inner">
                <h3>Web制作への思い</h3>
                <p>小さい頃にレゴブロックに夢中になり工作が何よりも好きでした。大人になっても制作したりDIYをしたりと物作りを楽しんでいます。</p>
                <p>この「形ある物を作る」という工程がWeb制作においても共通だと思い興味を持ちました。</p>
                <p>始めは興味が強かったのですがだんだんと楽しくなり、いつしか本気で仕事にしたいと考え出しました。</p>
                <p>自分の考えを全世界誰でも見られるインターネットに「形」として作り楽しむことができる。それを楽しんでくれるあなたがいる。そう思うととても素敵な仕事だと感じています。</p>
                <p>「自分」×「相手」の両者の喜びを作り出していきたいです。</p>
            </div>
            <router-link
            to="/works">
            <next-button
            text="過去の制作物はこちら"
            class="nextBtn" />
            </router-link>
        </div>
    </div>
</template>

<script>
import nextButton from '../parts/nextButton'

export default {
    name: 'profile',
    components: {
        nextButton,
    },
    data() {
        return {
            page: 'profile',
            name: '中島拓海',
            furikana: 'Nakajima Takumi',
            fab: '',
            icon: '',
            status: {
                old: '32',
                from: '愛知県',
                hobby: 'コーヒー, 旅行, スノボー, バスケ',
                strong: '臨機応変に対応すること, 工作, DIY',
                qualifications: 'MOS Excel 2010 Expert',
            },
            studyList: [
                { date: '2020.05.01', study: 'プログラミング学習開始', works: 'イメージ' },
                { date: 'Lesson -online-', study: 'Progate,dotinstall, Udemy,tecpit' },
                { date: '2020.10.31', study: '転職活動スタート' },
            ],
            books: [
                { name: '確かな力が身につくJavaScript「超」入門' },
                { name: 'ブレイクスルー JavaScript' },
                { name: '基礎から学ぶ Vue.js' },
                { name: 'JavaScript本格入門' },
                { name: 'いちばんやさしいGit&GitHubの教本' },
            ],
            skills: [
                { id: '1', name: 'HTML5', prefix: 'fab', icon: 'html5', size: '2x' },
                { id: '2', name: 'CSS3', prefix: 'fab', icon: 'css3', size: '2x' },
                { id: '3', name: 'JavaScript', prefix: 'fab', icon: 'js', size: '2x' },
                { id: '4', name: 'Vue.js', prefix: 'fab', icon: 'vuejs', size: '2x' },
                { id: '5', name: 'PHP', prefix: 'fab', icon: 'php', size: '2x' },
            ],
            business: [
                { date: '2020.08.05', title: 'HTML,CSSコーディング・修正', language: 'HTML,CSS' },
                { date: '2020.10.28', title: 'HTML,CSSコーディング・修正', language: 'HTML,CSS' },
            ],
        }
    }
}
</script>

<style scoped>
/* common */
.centerLine {
    position: relative;
}
.centerLine span {
    display: block;
    width: 1px;
    height: 1080px;
    background-color: #333;
    margin: 0 auto;
}
.subTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 24px;
}
.c-width {
    width: 330px;
}
.parallax-wrapper {
    background-color: #fff;
    height: 1300px;
    /* padding-bottom: 160px; */
}
.parallax-bg {
    height: 550px;
    width: 100%;
}
.parallax-bg::after {
    display: block;
    position: fixed;
    content: '';
    top: 30px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -100;
    background: url('../assets/image/bgimg2.jpg') no-repeat center center;
    background-size: cover;
}
.nextBtn {
    margin-top: 60px;
}
/* .content */
.content {
    padding: 40px 0;
}
.content p {
    margin-bottom: 16px;
}
.content_name {
    font-size: 2rem;
}
.status {
    position: absolute;
    top: 2%;
    right: 52%;
}
.status a {
    display: block;
    text-align: right;
    margin-bottom: 8px;
}
.study_map {
    position: absolute;
    top: 9%;
    left: 48%;
}
.study_map ul {
    margin-left: 60px;
}
.study_map li {
    text-align: left;
    margin-bottom: 20px;
}
.study_map a {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 8px;
}
.study_books {
    text-align: left;
    margin-left: 60px;
}
.study_books p {
    font-weight: bold;
    margin-bottom: 8px;
}
.study_books ul {
    text-align: left;
    margin: 0;
}
.study_books li {
    margin: 0 0 8px 20px;
    list-style: disc;
}
.skill {
    position: absolute;
    top: 33%;
    right: 52%;
}
.skill_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: 0 0 0 auto;
}
.skill_item {
    font-size: 2em;
    flex-basis: 25%;
    margin-bottom: 16px;
}
.output {
    position: absolute;
    bottom: 25%;
    left: 48%;
    text-align: center;
}
.output a {
    display: block;
    text-align: center;
    margin-bottom: 14px;
}
.business {
    position: absolute;
    bottom: 6%;
    right: 52%;
}
.business li {
    text-align: right;
}
.business li p {
    margin-bottom: 8px;
    font-weight: bold;
}
.business a {
    display: inline-block;
    margin-bottom: 8px;
}
.messageText {
    position: relative;
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    padding: 40px 0;
    box-shadow: 0 0 20px black;
    z-index: 100;
}
.messageText_inner {
    width: 70%;
    margin: 0 auto;
}
.messageText_inner h3 {
    margin-bottom: 40px;
}
.messageText_inner p {
    margin-bottom: 24px;
    font-size: 18px;
}

@media (max-width: 670px){
.status {
    width: 160px;
    right: 54%;
}
.study_map {
    width: 160px;
}
.study_map > ul {
    margin-left: 24px;
}
.study_books {
    margin-left: 24px;
}
.skill {
    width: 160px;
    right: 54%;
}
.skill_item {
    flex-basis: 30%;
}
.output {
    width: 160px;
}
.business {
    width: 160px;
}
.messageText_inner {
    width: 90%;
}
.nextBtn {
    margin-left: 16px;
    width: 90%;
}
}
</style>