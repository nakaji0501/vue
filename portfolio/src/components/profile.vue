<template>
    <div class="profile">
        <!-- <transition appear> -->
        <div class="content">
            <h1>{{ name }}</h1>
            <!-- <img src="../assets/image/img1.jpg" alt=""> -->
            <h2>{{ me }}</h2>
            <p>{{ furikana }}</p>
        </div>
        <!-- </transition> -->

        <div class="centerLine">
            <span></span>

            <div class="status c-width">
                <p v-once
                class="subTitle">STATUS</p>
                <a>{{ status.old }}</a>
                <a>{{ status.from }}</a>
                <a>{{ status.hobby }}</a>
                <a>{{ status.strong }}</a>
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
            </div>

            <div class="skill c-width">
                <p v-once
                class="subTitle">LEARNING</p>
                <ul
                v-for="skill in skills"
                :key="skill.id"
                >
                    <li>
                        <font-awesome-icon
                         :prefix="skill.prefix"
                         :icon="skill.icon"
                         :size="skill.size"
                        />
                        {{ skill.name }} <br>
                        {{ skill.level }}
                    </li>
                </ul>
            </div>

            <div class="output c-width">
                <p v-once
                class="subTitle">OUTPUT</p>
                <a href="">Qiita</a>
                <a href="@nakaji-junk">Twitter</a>
            </div>

            <div class="business c-width">
                <p v-once
                class="subTitle">BUSINESS</p>
                <ul v-for="work in business"
                :key="work.date"
                >
                <li>
                <a>
                {{ work.date }} <br>
                </a>
                {{ work.title }} <br>
                {{ work.language }}
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile',
    data() {
        return {
            name: 'profile',
            me: '中島拓海',
            furikana: 'Nakajima Takumi',
            status: {
                old: '年齢 : 32',
                from: '出身地 : 愛知県',
                hobby: '趣味: コーヒー, 旅行, スノボー',
                strong: '得意 : 改善',
            },
            studyList: [
                { date: '2020.05.01', study: 'HTML5, CSS3 学習開始', works: 'イメージ' },
                { date: '2020.05.01', study: 'HTML5, CSS3' },
                { date: '2020.05.01', study: 'HTML5, CSS3' },
                { date: '2020.05.01', study: 'HTML5, CSS3' },
                { date: '2020.05.01', study: 'HTML5, CSS3' },
                { date: '2020.05.01', study: 'HTML5, CSS3' },
            ],
            skills: [
                { id: '1', name: 'HTML5', level: '★★★★☆', prefix: 'fas', icon: 'code', size: 'fa-3x' },
                { id: '2', name: 'CSS3', level: '★★★★☆' },
                { id: '2', name: 'JavaScript', level: '★★☆☆☆' },
                { id: '2', name: 'jQuery', level: '★★☆☆☆' },
                { id: '2', name: 'Vue.js', level: '★★★☆☆' },
                { id: '2', name: 'PHP', level: '★☆☆☆☆' },
            ],
            business: [
                { date: '2020.08.05', title: 'CMSサイトのコーディング・修正', language: 'HTML,CSS' },
            ],
        }
    }
}
</script>

<style scoped>
.centerLine {
    position: relative;
}
.centerLine span {
    display: block;
    width: 1px;
    height: 800px;
    background-color: #333;
    margin: 0 auto;
}
.subTitle {
    font-size: 20px;
    font-weight: bold;
    /* text-align: center; */
}
.c-width {
    width: 330px;
}
.status {
    position: absolute;
    top: 2%;
    right: 52%;
}
.status a {
    display: block;
    text-align: right;
}
.study_map {
    position: absolute;
    top: 9%;
    left: 48%;
}
.study_map li {
    text-align: left;
}
.study_map a {
    color: rgb(95, 0, 0);
}
.skill {
    position: absolute;
    top: 32%;
    right: 52%;
}
.skill li {
    text-align: right;
}
.output {
    position: absolute;
    top: 70%;
    left: 48%;
    text-align: center;
}
.output a {
    display: block;
    text-align: center;
    margin-bottom: 8px;
}
.business {
    position: absolute;
    top: 85%;
    right: 52%;
}
.business a {
    color: rgb(95, 0, 0);
}
/* transition */
/* .v-enter-active, .v-leave-active {
    transition: opacity 2s, transform 1s;
}
.v-enter {
    opacity: 0;
    transform: translateY(20px); */
/* } */
</style>