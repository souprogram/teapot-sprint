<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from 'vue';

const route = useRoute();
</script>

<template>
    <div class="min-h-screen flex items-center justify-center px-4">
        <div class="max-w-4xl w-full bg-white/10 backdrop:blur-md rounded-lg shadow-xl p-8 text-white">
            <div class="text-center mb-8">
                <h1 class="text-4xl  font-bold mb-4">O Hackathonu</h1>
                <p class="text-lg text-white/80">Sve što trebate znati o našem događaju</p>
            </div>
            <div class="space-y-6">
                <div class="bg-white/5 rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-4">Što je Hackathon?</h2>
                    <p class="text-white/90 leading-relaxed">
                        Hackathon je intenzivni događaj gdje se programeri, dizajneri i drugi kreativci okupljaju 
                        kako bi kroz kratko vrijeme razvili inovativne projekte i rješenja. Naš hackathon je prilika 
                        za učenje, networking i stvaranje nečeg nevjerojatnog!
                    </p>
                </div>
                <div class="bg-white/5 rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-4">Cilj događaja</h2>
                    <p class="text-white/90 leading-relaxed">
                        Cilj našeg hackathona je okupiti talentirane pojedince i timove koji će kroz kreativni 
                        proces razviti inovativna rješenja za stvarne probleme. Fokus je na suradnji, 
                        učenju i stvaranju nečeg što može imati pozitivan utjecaj.
                    </p>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white/5 rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-3">Kada?</h3>
                        <p class="text-white/90">15-17. lipnja 2025</p>
                    </div>
                    
                    <div class="bg-white/5 rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-3">Gdje?</h3>
                        <p class="text-white/90">Sveučilišni kamput Noordung</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">
                <RouterLink 
                    to="/registracija" 
                    class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                    Registriraj se sada
                </RouterLink>
            </div>
        </div>
    </div>
</template>