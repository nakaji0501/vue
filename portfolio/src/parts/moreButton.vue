<template>
    <div class="moreButton">
        <a class="btn"></a>
    </div>
</template>

<script>
export default {
    name: 'moreButton',
}
</script>

<style scoped>
.btn{
	list-style: none;
	padding-left: 1.5rem;
	position: relative;
}
.btn:before,
.btn:after{
	content: "";
	display: block;
	position: absolute;
}
.btn:after{
	border: 8px solid transparent;
	border-left-color: #fff;
	left: 4px;
	top: 5px;
    transform: rotate(90deg);
}

</style>