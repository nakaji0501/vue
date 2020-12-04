<template>
    <div class="photo">

        <figure class="photo__wrapper">
            <img class="photo__image" src="item.url" alt="`Photo by ${item.owner.name}`">
        </figure>

        <router-link class="photo__overlay"
        :to="`/photos/${item.id}`"
        :title="`View the photo by ${item.owner.name}`"
        >

        <div class="photo__controls">

            <button class="photo__action photo__action--like"
            title="Like Photo">
                <i class="icon ion-md-heart"></i>12
            </button>

            <a href="`/photos/${item.id}/download`"
            class="photo__action"
            title="Dowload photo"
            @click.stop>
                <i class="icon ion-md-arrow-round-down"></i>
            </a>

        </div>

        <div class="photo__username">
            {{ item.owner.name }}
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>