<template>
    <div class="works">
        <div class="content"
        v-for="item in lists"
        :key="item.name"
        >
        <h3>{{ item.name }}</h3>
        <img>{{ item.img }}
        <p>{{ item.text }} </p>
        <p>{{ item.point }}</p>
        <p>{{ item.url }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'works',
    data() {
        return {
            lists: [
                {
                name: 'JavaScriptでミニアプリを作成',
                image_src: '../assets/image/webservice.png',
                text: 'inputの値を参照にデータを加工しレスポンスしたデータを表示させた',
                point: '成功・失敗・アピールしたいこと',
                url: 'URLを記載する'
                },
                {
                name: 'Vue.jsでToDoを作成',
                img: 'src="image.png',
                text: 'ToDoの追加・削除・進捗管理を実装',
                point: '成功・失敗・アピールしたいこと',
                url: 'URLを記載する'
                },
                {
                name: '制作物の名前',
                img: 'src="image.png',
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                url: 'URLを記載する'
                },
                {
                name: '制作物の名前',
                img: 'src="image.png',
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                url: 'URLを記載する'
                },
                {
                name: '制作物の名前',
                img: 'src="image.png',
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                url: 'URLを記載する'
                },
                {
                name: '制作物の名前',
                img: 'src="image.png',
                text: '目的・方法・言語・創意工夫・出来ることなど',
                point: '成功・失敗・アピールしたいこと',
                url: 'URLを記載する'
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
div.works {
    background-color: #333;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    padding: 8px 0;
}

div.content {
    background-color: rgba(155, 155, 155, 0.8);
    display: inline-block;
    margin: 16px;
    width: 30%;
}

h3 {
    color: #fff;
}

p {
    width: 90%;
    display: inline-block;
    text-align: left;
}

</style>