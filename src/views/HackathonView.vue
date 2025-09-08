<script setup>
import { RouterLink, useRoute } from "vue-router";  
import Uvodna_stranica from '@/assets/slike/Uvodna_stranica.png';

const route = useRoute();
</script>

<template>
    <div class="flex px-1">
        <div class="w-full rounded-lg p-8 text-white">
            <div class="mb-4 flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-1/2 text-center md:text-left">
                    <h1 class="text-4xl font-bold mb-2">O Hackathonu</h1>
                    <p class="text-lg text-white/80 max-w-md mx-auto md:mx-0">
                    Sve što trebate znati o našem događaju
                    </p>
                </div>
                <div class="md:w-1/2 flex justify-end">
                    <img :src="Uvodna_stranica" alt="ikona" class="h-40 w-auto rounded-lg shadow-lg" />
                </div>
            </div>
            <div class="space-y-3">
                <div class="rounded-lg p-4">
                    <h2 class="text-2xl font-semibold mb-4">Što je Hackathon?</h2>
                    <p class="text-white/90">
                        Hackathon je intenzivan, vremenski ograničen događaj na kojem timovi sudionika, najčešće 
                        programera. Timovi udružuju snage kako bi riješili konkretne izazove, razvili inovativna 
                        rješenja ili osmislili nove proizvode i tehnologije. Održava se u dinamičnom i suradničkom 
                        okruženju koje potiče brze iteracije, kreativno razmišljanje i praktičnu primjenu znanja. 
                        Pruža nam priliku za kreativno razmišljanje, testiranje vlastitih granica i najbitniji 
                        stjecanje novih vještina kroz praktičan rad. 
                    </p>
                </div>
                <div class="rounded-lg p-4">
                    <h2 class="text-2xl font-semibold mb-4">Po čemu se naš hackathon razlikuje?</h2>
                    <p class="text-white/90 leading-relaxed">
                        Naš hackathon je poseban jer:
                        <br>
                        Spaja studente informatike s Balkana - pruža jedinstvenu platformu za regionalno povezivanje i razmjenu ideja. 
                        <br>
                        Fokusira se na tehničke izazove i umrežavanje - sudionici razvijaju softverska rješenja, analiziraju podatke i grade trajne veze koje će koristiti u budućoj karijeri.
                        <br>
                        Prilagođen je studentima - obuhvaća praktične zadatke, zanimljive teme poput održivosti i kibernetičke sigurnosti te opušteni "okrugli stol" za umrežavanje.
                    </p>
                </div>
                <div class="gap-6 flex rounded-lg p-4 items-center">
                    <p class="text-white/90 font-semibold text-center">Pridružite nam se i postanite dio zajednice koja potiče inovaciju, edukaciju i suradnju - jer upravo vi možete biti ključni dio sljedeće velike ideje!</p>
                </div>
            </div>
            <div class="border m-95 rounded-md text-center mt-8 pb-5">
                <div class="rounded-lg p-4">
                    <h3 class="text-xl font-bold mb-3 text-center">Kada i gdje?</h3>
                    <p class="text-white/90 text-center font-bold">04.08. - 07.08.2025, Sveučilišni kamput Noordung</p>
                </div>
                <RouterLink 
                    to="/registracija" 
                    class="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                    Registriraj se sada
                </RouterLink>
            </div>
        </div>
    </div>
</template>