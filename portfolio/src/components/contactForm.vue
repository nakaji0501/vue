<template>
  <div class="contactForm">
    <v-card>
      <v-container>
        <h2>お問い合わせ</h2>
        <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
          <v-text-field
            v-model="contactForm.name"
            :rules="contactFormValidation.nameRules"
            label="名前"
            required
          ></v-text-field>
          <v-text-field
            v-model="contactForm.email"
            :rules="contactFormValidation.emailRules"
            label="メールアドレス"
            required
          ></v-text-field>
          <v-textarea
            v-model="contactForm.contents"
            :rules="contactFormValidation.contentsRules"
            label="内容"
            required
          ></v-textarea>
          <v-btn
            :loading="contactForm.loading"
            :disabled="!contactFormValidation.valid"
            @click="sendMail()"
            block
            large
            color="black"
            class="sendBtn mt-4 font-weight-bold"
          >送信
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
    <v-snackbar
      v-model="snackBar.show"
      :color="snackBar.color"
      bottom
      right
      :timeout="6000"
      class="font-weight-bold"
    >
      {{snackBar.message}}
    </v-snackbar>

    <router-link
    :to='path'>
    <next-button
    text="私について"
    class="nextBtn" />
    </router-link>

  </div>
</template>

<script>
  import { functions } from '@/plugins/firebase'
  import nextButton from '../parts/nextButton'

  export default {
  components: { nextButton },
    data: () => ({
      contactForm: {
        name: '',
        contents: '',
        email: '',
        loading: false
      },
      path: '/#',
      component: {
        nextButton,
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレスは必須項目です'],
        contentsRules: [v => !!v || '内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),
    methods: {
      sendMail: function () {
        if (this.$refs.form.validate()) {
          this.contactForm.loading = true
          const mailer = functions.httpsCallable('sendMail')

          mailer(this.contactForm)
            .then(() => {
              this.formReset()
              this.showSnackBar(
                'success',
                'お問い合わせありがとうございます。送信完了しました'
              )
            })
            .catch(err => {
              this.showSnackBar(
                'error',
                '送信に失敗しました。時間をおいて再度お試しください'
              )
              console.log(err)
            })
            .finally(() => {
              this.contactForm.loading = false
            })
        }
      },
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
.contactForm {
  margin: 80px auto;
  background: #fff;
}
.sendBtn {
  margin: 40px 0;
}
.nextBtn {
  position: relative;
  z-index: 100;
  margin-top: 60px;
  font-size: 1.2rem;
  letter-spacing: 8px;
  transform: translateY(10px);
}
</style>