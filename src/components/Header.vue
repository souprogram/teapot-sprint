<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { computed, onMounted } from 'vue';
import { useKorisnikStore } from "@/stores/korisnik";

const router = useRouter();
const route = useRoute();
const isHomePage = computed(() => route.path=='/');
const korisnik = useKorisnikStore();

onMounted(() => {
  korisnik.dohvatiKorisnik()
})
async function odjava() {
  await korisnik.logOut()
  router.push('/')
}
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
                <div v-if="korisnik.trenutni_korisnik">
                    <button @click="odjava" class="text-black hover:text-white">Odjava</button>
                </div>
                <div v-else>
                    <RouterLink to="/login" class="text-black hover:text-white">Prijava</RouterLink>
                </div>
            </div>
        </nav>
    </header>
</template>
