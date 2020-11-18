// ローカルストレージAPI
// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'CountDownTimer'
var listsStorage = {
  fetch: function() {l
    var lists = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    lists.forEach(function(list, index) {
      list.id = index
    })
    listsStorage.uid = lists.length
    return lists
  },
  save: function(lists) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists))
  }
}

var app = new Vue ({
    el: '#app',
    data: {
        lists: [],
        thema: '',
        gamePage: false,
        result: false,
        min: 1,
        sec: 0,
        msec: 0,
        timerOn: false,
        timerOn: null,
        resetOn: false,
        // resultLists: [],
    },
    methods: {
        addedThema: function() {
            this.gamePage = true;
        },
        back: function() {
            clearInterval(this.timerObj);
            this.gamePage = false;
            this.lists = '';
            this.timerOn = false;
            this.timerReset();
            this.moveToTop();
        },
        textAdd: function() {
            var text = this.$refs.text
            if (!text.value.length) {
                return
            }
            this.lists.push({
                text: text.value,
            })
            text.value = ''
        },
        count: function() {
            if (this.msec <= 0 && this.sec >= 1) {
                this.sec --;
                this.msec = 59;
            } else if (this.msec <= 0 && this.sec <= 0 && this.min >= 1) {
                this.min --;
                this.msec =59;
                this.sec = 59;
            } else if (this.msec <= 0 && this.sec <= 0 && this.min <= 0) {
                this.complete();
            } else {
                this.msec --;
            }
        },

        start: function() {
            let self = this;
            this.timerObj = setInterval(function() {self.count()}, 1000 / 60)
            this.timerOn = true;
            this.resetOn = false;
        },

        stop: function() {
            clearInterval(this.timerObj);
            this.timerOn = false;
            this.resetOn = true;
        },

        complete: function() {
            clearInterval(this.timerObj)
            var options = {
                title: "Finish!!",
                text: "3秒後に自動的に閉じます",
                icon: "success", // warning, info, error
                timer: 3000, // 3秒後に自動的にアラートを閉じる
                buttons: false,
              }
              swal(options);
              this.timerOn = false;
              this.result = true;
              this.timerReset();
              this.moveToTop();
            },
        reset: function() {
            this.resetOn = false;
            this.timerReset();
        },
        resultReset: function() {
            this.result = false;
            this.gamePage = false;
            this.lists = [];
            this.thema = '';
            this.moveToTop();
        },
        timerReset: function() {
            this.min = 1;
            this.sec = 0;
            this.msec = 0;
        },
        moveToTop() {
            const duration = 1;  // 移動速度（0.001秒で終了）
            const interval = 25;    // 0.025秒ごとに移動
            const step = -window.scrollY / Math.ceil(duration / interval); // 1回に移動する距離
            const timer = setInterval(() => {
                window.scrollBy(0, step);   // スクロール位置を移動
                if(window.scrollY <= 0) {
                    clearInterval(timer);
                }
            }, interval);
        },
        // resultLists: function() {
        //     this.lists = listsStorage.fetch();
        // },
    },
    computed: {
        formatTime: function() {
            let timeStrings = [
                this.min.toString(),
                this.sec.toString(),
                this.msec.toString()
            ]
            .map(function(str) {
                if(str.length < 2) {
                    return "0" + str
                } else {
                    return str
                }
            })
            return timeStrings[0] + ":" + timeStrings[1] + ":" + timeStrings[2]
        },
    },
    // updated() {
    //     resultLists = this.lists
    //     this.lists = listsStorage.fetch();
    // },
    watch: {
        lists: {
            handler: function(lists) {
                listsStorage.save(lists)
            },
            deep: true
        }
    },
})