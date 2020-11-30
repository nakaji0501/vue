<template>
    <div>

        <header>
            <Navbar />
        </header>

        <main>
            <div class="container">
                <router-view />
            </div>
        </main>

    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    components: {
        Navbar,
    }
}
</script>