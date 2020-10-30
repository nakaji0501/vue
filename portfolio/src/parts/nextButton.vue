<template>
    <div class="nextButton">
        <a class="btn">
      {{ text }}
        </a>
    </div>
</template>

<script>
export default {
	name: 'nextButton',
  props: {
    'text': {
      type: String,
      default: 'BUTTON'
    }
  },
	data() {
		return {
		}
	}
}
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  color: #FFF;
  background-image: linear-gradient(45deg, rgb(11, 71, 139) 0%, #b0c9ff 100%);
  transition: .4s;
}

.btn:hover {
  background-image: linear-gradient(45deg, #709dff 50%, rgb(11, 71, 139) 100%);
}
</style>