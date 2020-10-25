<template>
<div class="skills">
    <div class="content">
        <p>SKILLS</p>
        <div class="list"
        v-for="skill in lists"
        :key="skill.id"
        >
            {{ skill.name }}
            {{ skill.level }}
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'skills',
    data() {
        return {
            lists: [
                { id: '1', name: 'HTML5', level: '★★★★☆' },
                { id: '2', name: 'CSS3', level: '★★★★☆' },
                { id: '2', name: 'JavaScript', level: '★★☆☆☆' },
                { id: '2', name: 'jQuery', level: '★★☆☆☆' },
                { id: '2', name: 'Vue.js', level: '★★★☆☆' },
                { id: '2', name: 'PHP', level: '★☆☆☆☆' },
            ]
        }
    }
    }
</script>