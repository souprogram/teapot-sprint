<script setup>
import { RouterLink } from "vue-router";
import Lokacija_slika1 from '@/assets/slike/Lokacija_slika1.jpg';
import Lokacija_slika2 from '@/assets/slike/Lokacija_slika2.jpg';
import Lokacija_slika3 from '@/assets/slike/Lokacija_slika3.jpg';

</script>

<template>
    <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <h2 class="text-3xl font-bold text-white mb-6 text-center">Dobrodošli u Pulu</h2>
        <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2">
                <img :src="Lokacija_slika1" alt="slika1" class="w-full h-80 object-cover rounded-lg shadow-lg">
            </div>
            <div class="lg:w-1/2 lg:pl-8">
                <p class="text-gray-200 text-lg leading-relaxed mb-4 text-center">
                    Hackathon se održava u gradu Puli na Sveučilišnom kampusu Noordung. Pula je najveći grad i glavna 
                    luka Istarskog poluotoka smješten na južnom dijelu rta. Jedan je od najpopularnijih turističkih 
                    centara i kulturnih prizora Hrvatskoj obali.
                </p>
                <p class="text-gray-200 text-lg leading-relaxed text-center">
                    Njegovi povijesni atributi i karakteristike vidljive su na svakome uglu, ulici, crkvi i muzeju. 
                    No najvrjednija i najvažnija povijesna baština zasigurno je veličanstveni Amfiteatar poznat kao 
                    Koloseum iz 2. stoljeća koji privlači milijune posjetitelja godišnje.
                </p>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div class="lg:w-1/2">
                <img :src="Lokacija_slika2" alt="slika2" class="w-full h-80 object-fit:contain rounded-lg shadow-lg">
            </div>
            <div class="lg:w-1/2 lg:pr-8">
                <h2 class="text-3xl font-bold text-white mb-6 text-center">Bogata povijest</h2>
                <p class="text-gray-200 text-lg leading-relaxed mb-4 text-center">
                    Znamenitosti su ostavile snažan utisak na današnji turizam i daljnji razvoj. Najpoznatije su: 
                    Amfiteatar, Augustov Hram, Sergijev Slavoluk pobjede poznat kao i Zlatna Vrata, Katedrala 
                    Uznesenja Blažene Djevice Marije, Hramovi i Bazilike na Forumu i još mnoge druge.
                </p>
                <p class="text-gray-200 text-lg leading-relaxed text-center">
                    Pula je grad gdje se moderna tehnologija susreće s tisućljetnom poviješću. Ovdje antički 
                    spomenici koegzistiraju s modernim fakultetskim kampusima, stvarajući jedinstvenu atmosferu 
                    koja nadahnjuje mlade umove i tehnološke inovatore.
                </p>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2">
                <img :src="Lokacija_slika3" alt="slika3" class="w-full h-80 object-cover rounded-lg shadow-lg">
            </div>
            <div class="lg:w-1/2 lg:pl-8">
                <h2 class="text-3xl font-bold text-white mb-6 text-center">Tehnološka budućnost</h2>
                <p class="text-gray-200 text-lg leading-relaxed mb-4 text-center">
                    Sveučilišni kampus Noordung predstavlja srce tehnološkog razvoja u Istri. Ovdje se okupljaju 
                    najbrilljantniji mladi umovi koji će oblikovati budućnost tehnologije. Kampus je opremljen 
                    najsuvremenijom opremom i laboratorijima koji omogućavaju realizaciju najsmelijih ideja.
                </p>
                <p class="text-gray-200 text-lg leading-relaxed text-center">
                    Povezanost s prirodnom ljepotom Istre, kristalno čistim morem i bogatom gastronomskom tradicijom 
                    čini Pulu idealnim mjestom za kreativnost i inovacije. Ovdje tradicija susreće budućnost, 
                    stvarajući jedinstvenu sinergiju koja nadahnjuje sve koji sudjeluju u hackathonu.
                </p>
            </div>
        </div>
    </div>
</template>