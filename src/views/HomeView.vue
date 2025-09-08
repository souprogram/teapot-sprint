<script setup>
import { computed } from 'vue';
import { useRoute } from "vue-router";
import HackathonView from '@/views/HackathonView.vue';
import BlogView from '@/views/BlogView.vue';
import LokacijaView from '@/views/LokacijaView.vue';
import NagradeView from '@/views/NagradeView.vue';
import ProgramView from '@/views/ProgramView.vue';
import ScoreboardView from '@/views/ScoreboardView.vue';
import SponzoriView from '@/views/SponzoriView.vue';

const route = useRoute();
const isHomePage = computed(() => route.path=='/');

</script>

<template>
    <div class="min-h-screen">
        <section id="home" class="min-h-screen flex items-center justify-center gap-5">
            <div class="text-center text-white">
                <h1 class="text-6xl font-bold mb-6">Dobrodošli na Hackathon</h1>
                <p class="text-xl mb-8">Najveći tech događaj godine</p>
                <RouterLink 
                    to="/registracija" 
                    class="inline-block bg-white hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-lg transition duration-200">
                    Registriraj se sada
                </RouterLink>
            </div>
        </section>
    </div>
    
    <section id="about" class="min-h-screen py-20 -mt-20 pt-40">
        <HackathonView />
    </section>

    <section id="program" class="min-h-screen py-20 -mt-20 pt-40">
        <ProgramView />
    </section>

    <section id="nagrade" class="min-h-screen py-20 -mt-20 pt-40">
        <NagradeView />
    </section>

    <section id="sponzori" class="min-h-screen py-20 -mt-20 pt-40">
        <SponzoriView />
    </section>

    <section id="blog" class="min-h-screen py-20 -mt-20 pt-40">
        <BlogView />
    </section>

    <section id="lokacija" class="min-h-screen py-20 -mt-20 pt-40">
        <LokacijaView />
    </section>

    <section id="scoreboard" class="min-h-screen py-20 -mt-20 pt-40">
        <ScoreboardView />
    </section>
</template>

