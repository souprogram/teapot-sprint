<script setup>
import { RouterLink, useRoute } from "vue-router";  
import Mikro_expert from '@/assets/slike/Mikro_expert.jpg';
import BigGameShow from '@/assets/slike/BigGameShow.jpg';
import Merch from '@/assets/slike/Merch.jpg';
import RedApple_ikona from '@/assets/slike/RedApple_ikona.jpg';

const route = useRoute();
</script>

<template>
    <div class="w-screen min-h-screen flex flex-col text-white">
        <div class="w-full rounded-lg p-8">
            <h1 class="text-5xl text-center p-4 font-bold mb-3">NAGRADE KOJE MOŽETE OSVOJITI</h1>
            <p class="text-white/90 text-center leading-relaxed">
                Ovdje su sve nagrade koje možeš osvojiti. Pogledaj, saznaj više o njima i kreni u osvajanje.
                Svaka nagrada donosi novu priliku za zabavu, izazov i priznanje - ne propusti svoju šansu da postaneš jedan od pobjednika!
                Prva tri mjesta nose najbolje nagrade i osvoji ih!!!!!!
            </p>
        </div>

        <div class="flex items-end justify-center gap-5 w-full">
            <div class="flex flex-col items-center">
                <div class="bg-gray-700 w-44 h-79 rounded-t-xl flex flex-col items-center p-4">
                    <h3 class="text-2xl text-center font-bold mb-3">DRUGO MJESTO</h3>
                    <div class="flex-1 flex items-center justify-center mb-3">
                        <img :src="Mikro_expert" alt="Drugo mjesto" class="w-32 h-30 object-cover rounded-lg shadow-lg" />
                    </div>
                    <p class="text-sm mt-2 text-center">Novčana nagrada od 1500€ i ruksak za laptop</p>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="bg-yellow-600 w-48 h-86 rounded-t-xl flex flex-col items-center p-4">
                    <h3 class="text-2xl text-center font-bold mb-3">PRVO MJESTO</h3>
                    <div class="flex-1 flex items-center justify-center mb-3">
                        <img :src="BigGameShow" alt="Prvo mjesto" class="w-38 h-28 object-cover rounded-lg shadow-lg" />
                    </div>
                    <p class="text-sm mt-2 text-center">Novčana nagrada od 3000€ i poklon bon kartica</p>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="bg-orange-700 w-44 h-75 rounded-t-xl flex flex-col items-center p-4">
                    <h3 class="text-2xl text-center font-bold mb-3">TREĆE MJESTO</h3>
                    <div class="flex-1 flex items-center justify-center mb-3">
                        <img :src="RedApple_ikona" alt="Treće mjesto" class="w-32 h-30 object-cover shadow-lg" />
                    </div>
                    <p class="text-sm mt-2 text-center">Novčana nagrada od 500€ i paket energetskih pića</p>
                </div>
            </div>
        </div>

        <div class="w-full rounded-lg p-8 mt-3">
            <h2 class="text-4xl text-center font-bold mb-4">I ZA KRAJ</h2>
            <p class="text-lg text-center text-white/80">
                Svatko tko sudjeluje u našem eventu Hackathon 2025 dobiva poklon paket našeg mercha
            </p>
            <div class="flex justify-center mt-5">
                <img :src="Merch" alt="merch" class="w-auto h-80 object-cover rounded-lg shadow-lg" />
            </div>
        </div>
  </div>
</template>