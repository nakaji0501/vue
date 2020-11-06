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
                    :class="{'state-open': isOpened }"
                    @click="accordionToggle(index)"
                    >
                    open
                    </button>
                    <div class="accordion-target"
                    :class="{ 'state-open': isOpened }"
                    v-if="isOpened"
                    >
                        <div class="accordion-body">
                            <p>・{{ item.text }} </p>
                            <p>・{{ item.point }}</p>
                            <p>・{{ item.language }}</p>
                            <a href="item.url">・リンク先へ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="space"></div>
    </div>
</template>

<script>
export default {
    name: 'works',
    data() {
        return {
            isOpened: false,
            lists: [
                {
                id: '1',
                name: 'JavaScriptでミニアプリを作成',
                img: require('@/assets/image/webservice.png'),
                text: 'inputの値を参照にデータを加工しレスポンスしたデータを表示させた',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Javascrpit',
                url: 'https://nakaji0501.github.io/app/childwithlife'
                },
                {
                id: '2',
                name: 'ホームページ',
                img: require('@/assets/image/webservice.png'),
                text: 'ToDoの追加・削除・進捗管理を実装',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Javascript,Vue.js',
                url: 'URL'
                },
                {
                id: '3',
                name: 'コーポレートサイト',
                img: require('@/assets/image/kurinote.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html.css',
                url: 'URL'
                },
                {
                id: '4',
                name: 'ETサイト(模写)',
                img: require('@/assets/image/ninco.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Javascript',
                url: 'URL'
                },
                {
                id: '5',
                name: 'コーポレートサイト',
                img: require('@/assets/image/wp-theme.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Sass,Wordpress',
                url: 'http://nakaji_junk.com/wordpress'
                },
                {
                id: '6',
                name: 'ホームページ',
                img: require('@/assets/image/cafetakuba.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Javascript',
                url: 'URL'
                },
            ]
        }
    },
    methods: {
        accordionToggle: function(index) {
            this.isOpened = !this.isOpened
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
    height: 200px;
    width: 100%;
    margin: 8px 0;
    background-color: lightgray;
    overflow-y: auto;
}
.works_img img {
    width: 100%;
}
.accordion-trigger {
    margin: 16px 0;
}
.accordion-body p {
    max-width: 90%;
}
.space {
    height: 200px;
    background-color: #333;
    transform: translateY(50%);
}

@media (max-width: 670px) {
.works_contents {
    flex-direction: column;
    width: 80%;
}
}
</style>