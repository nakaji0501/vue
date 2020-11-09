var app = new Vue ({
    el: '#app',
    data: {
        min: 0,
        sec: 1,
        msec: 0,
        timerOn: false,
        timerOn: null,
        resetOn: false,
    },
    methods: {
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
                text: "3秒後にアラートが自動的に閉じます",
                icon: "success", // warning, info, error
                timer: 3000, // 3秒後に自動的にアラートを閉じる
                buttons: false,
              }
              swal(options);
              this.sec = 1;
              this.timerOn = false;
        },

        reset: function() {
            this.resetOn = false;
            this.sec = 1;
            this.msec = 0;
        }
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
        }
    }
})