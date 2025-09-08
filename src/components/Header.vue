<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from 'vue';

const route = useRoute();
const isHomePage = computed(() => route.path=='/');

</script>

<template>
    <header class="w-full p-4 fixed top-0 left-0 z-10">
        <nav class="flex items-center justify-between relative z-10">
            <RouterLink to='/' class="text-black hover:text-white">
                Hackathon
            </RouterLink>
            <div class="flex items-center space-x-6">
                <RouterLink :to="{ path: '/', hash: '#about'}" class="text-black hover:text-white">
                    O Hackathonu
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#program'}" class="text-black hover:text-white">
                    Program
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#nagrade'}" class="text-black hover:text-white">
                    Nagrade
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#sponzori'}" class="text-black hover:text-white">
                    Sponzori
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#blog'}" class="text-black hover:text-white">
                    Blog
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#lokacija'}" class="text-black hover:text-white">
                    Lokacija
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#scoreboard'}" class="text-black hover:text-white">
                    Scoreboard
                </RouterLink>
                <RouterLink to="/login">Prijava</RouterLink>
            </div>
        </nav>
    </header>
</template>
