<script setup>
import { RouterLink, useRoute } from "vue-router";
import RedApple_ikona from '@/assets/slike/RedApple_ikona.jpg';
import BigGameShow_ikona from '@/assets/slike/BigGameShow_ikona.jpg'

const route = useRoute();
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center p-4">
        <div class="flex flex-col px-2">
            <div class="w-full rounded-lg p-5 text-white">
                <h1 class="text-4xl font-bold mb-2">Sponzori natjecanja</h1>
            </div>
        </div>
        <div class="w-full rounded-lg p-8 text-white">
            <p class="text-center">
                "Zahvaljujemo se našim sponzorima koji svojom podrškom omogućuju održavanje i organizaciju ovog događaja i stvaranje nezaboravnog iskustva za sve sudionike Hackathona 25'.
                Njihova pomoć ne samo da donosi fantastične nagrade, nego i podržava zajednicu, potiče kreativnost i 
                motivira sve natjecatelje da daju svoj maksimum i ostvare najbolji mogući rezultat. Bez njihovog doprinosa, ostvarivanje ovako uzbudljivog natjecanja ne bi bilo moguće. 
                U nastavku pogledajte tko stoji iza ovog projekta i saznajte više o sponzorima koji vjeruju u našu i vašu viziju i podržavaju rast i uspjeh                 svih sudionika natjecanja.
            </p>
        </div>
        <div class="w-full px-4 py-8">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">Naši sponzori</h2>
            <div class="flex flex-wrap justify-center gap-6">
                <img :src="RedApple_ikona" alt="Sponzor1" class="h-50 w-auto rounded-lg">
                <img :src="BigGameShow_ikona" alt="Sponzor2" class="h-50 w-auto rounded-lg shadow-lg">
            </div>
        </div>
    </div>
</template>