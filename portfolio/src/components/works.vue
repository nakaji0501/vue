<template>
    <div class="works">

        <div class="works_title">
            <h2>WORKS</h2>
        </div>

        <div class="works_contents">

            <div class="works_content"
            v-for="item in lists"
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
                    @click="accordionToggle()"
                    >
                    open
                    </button>
                    <div class="accordion-target"
                    :class="{ 'state-open': isOpened }"
                    v-if="isOpened"
                    >
                        <div class="accordion-body">
                            <p>{{ item.text }} </p>
                            <p>{{ item.point }}</p>
                            <p>{{ item.language }}</p>
                            <p>{{ item.url }}</p>
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
                url: 'URLを記載する'
                },
                {
                id: '2',
                name: 'Vue.jsでToDoを作成',
                img: require('@/assets/image/webservice.png'),
                text: 'ToDoの追加・削除・進捗管理を実装',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Javascript,Vue.js',
                url: 'URLを記載する'
                },
                {
                id: '3',
                name: '制作物の名前',
                img: require('@/assets/image/kurinote.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html.css',
                url: 'URLを記載する'
                },
                {
                id: '4',
                name: '制作物の名前',
                img: require('@/assets/image/ninco.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Javascript',
                url: 'URLを記載する'
                },
                {
                id: '5',
                name: '制作物の名前',
                img: require('@/assets/image/wp-theme.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Sass,Wordpress',
                url: 'URLを記載する'
                },
                {
                id: '6',
                name: '制作物の名前',
                img: require('@/assets/image/cafetakuba.png'),
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                language: 'html,css,Javascript',
                url: 'URLを記載する'
                },
            ]
        }
    },
    methods: {
        accordionToggle: function() {
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
.works_img {
    height: 200px;
    width: 100%;
    margin: 8px 0;
    background-color: lightgray;
}
.works_img img {
    height: 200px;
    overflow: hidden;
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
.works_content {
    flex-basis: 40%;
}
}
</style>