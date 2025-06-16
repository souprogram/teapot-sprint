<script setup>
import { computed, ref, watchEffect } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Pozadina from '@/assets/slike/Pozadina.jpg'
import Pozadina2 from '@/assets/slike/Pozadina2.jpg'

const route = useRoute();
const currentSelection = ref('home');

const scroll = () => {
    if(route.path !== '/') return;

    const selections = ['home', 'about', 'program', 'narade', 'blog', 'lokacija', 'scoreboard', 'prijava', 'registracija'];
    const sPosition = window.scrollY + 100;

    for (const section of selections) {
        const element = document.getElementById(section);
        if(element) {
            const { offsetTop, offsetHeight } = element;
            if(sPosition >= offsetTop && sPosition < offsetTop + offsetHeight) {
                currentSelection.value = section;
                break;
            }
        }
    }
}

watchEffect((onCleanup) => {
    if(route.path !== '/') return;

    window.addEventListener('scroll', scroll);
    scroll();

    onCleanup(() => {
        window.removeEventListener('scroll', scroll);
    })
})

const backgroundStyle = computed(() => {
    if(route.path === '/' && currentSelection.value === 'home') {
        return {backgroundImage: `url(${Pozadina})`}
    }
    return {backgroundImage: `url(${Pozadina2})`}
})
</script>

<template>
    <div class="min-h-screen bg-cover bg-top bg-no-repeat bg-fixed scroll-smooth" :style="backgroundStyle">
        <Header />
        <div class="min-h-screen">
            <RouterView />
        </div>
    </div>
</template>
