<template>
    <div class="contact">

      <div class="contact_title tit">
        <h2>CONTACT</h2>
      </div>

      <div class="contact_text">
        <p>お問い合わせは下記よりご連絡ください。</p>
        <p>Twitterからでもお問い合わせいただけます。</p>
        <p>1-2日以内に返信致します。</p>
      </div>

      <div class="contact_button">
        <contact-button />
      </div>

    </div>

</template>j

<script>
import contactButton from '../components/contactButton'

export default {
    name: 'contact',
    components: {
        contactButton,
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.contact {
    position: relative;
    z-index: 120;
}
.contact h2 {
  margin: 24px 0;
}
.contact_text p {
  margin-bottom: 8px;
}

.contact_button {
  margin-top: 80px;
}
</style>