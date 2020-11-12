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
        min: 0,
        sec: 10,
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
            this.sec = 10;
            this.msec = 0;
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
              this.sec = 10;
              this.timerOn = false;
              this.result = true;
            },

        reset: function() {
            this.resetOn = false;
            this.sec = 10;
            this.msec = 0;
        },

        resultReset: function() {
            this.result = false;
            this.gamePage = false;
            this.lists = [];
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