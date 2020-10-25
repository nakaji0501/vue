<template>
    <div class="contactButton">
        <a href="" class="btn btn--orange btn-c">
            お問い合わせはこちら
        </a>
    </div>
</template>

<script>
export default {
    name: 'contactButton'
}
</script>

<style scoped>
a.btn--orange {
  color: #fff;
  background-color: rgb(11, 71, 139);
}

a.btn--orange:hover {
  color: #fff;
  background: #2aafe4;
}

a.btn-c {
  position: relative;
  padding: 1.5rem 2rem 1.5rem 2rem;
}

a.btn-c i.fa {
  margin-right: 1rem;
}

</style>