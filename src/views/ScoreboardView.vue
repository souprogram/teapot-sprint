<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from 'vue';
import { useKorisnikStore } from "@/stores/korisnik";
import { getTimovi, getTim, updateBodovi, createTim, deleteTim } from "@/services/scoreboardService";

const korisnikStore = useKorisnikStore();
const timovi = ref([]);
const odabraniTim = ref(null);
const prikazaniTim = ref(false);

onMounted(async() => {
    timovi.value = await getTimovi();
})

const prikaziTim = async(id) => {
    if(odabraniTim.value?.id === id && prikazaniTim.value) {
        odabraniTim.value = null;
        prikazaniTim.value = false;
    } 
    else {
        odabraniTim.value = await getTim(id);
        prikazaniTim.value = true;
    }

}

const azurirajBodove = async() => {
    const noviTim = await updateBodovi(odabraniTim.value.id, odabraniTim.value.bodovi);
    odabraniTim.value.bodovi = noviTim.bodovi;
    const index = timovi.value.findIndex(t => t.id === odabraniTim.value.id);
    if (index !== -1) {
        timovi.value[index].bodovi = noviTim.bodovi;
    }
}

</script>

<template>
    <div class="p-2">
        <div class="items-center">
            <table class="w-full text-center border-collapse border-2 max-w-[1000px] mx-auto border-spacing-y-4">
                <thead>
                    <tr>
                        <th class="text-white border-2 border-white/15">TIMOVI</th>
                        <th class="text-white border-2 border-white/15">BODOVI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tim in timovi" :key="tim.id" 
                    :class="[korisnikStore.isAdmin ? 'cursor-pointer hover:bg-white/15' : '', odabraniTim?.id === tim.id ? 'bg-white/15' : '']" 
                    @click="korisnikStore.isAdmin && prikaziTim(tim.id)">
                        <td class="text-white border-2 border-white/15">{{ tim.name }}</td>
                        <td class="text-white border-2 border-white/15">{{ tim.bodovi }}</td>
                    </tr>
                </tbody>
            </table>
            <p v-if="timovi.length === 0" class="text-center text-gray-400 mt-4">
                Još nema registriranih timova. 
            </p>
        </div>
        <div v-if="prikazaniTim && korisnikStore.isAdmin" class="mt-6 p-4 bg-white/15 rounded-lg max-w-[600px] mx-auto">
                <h2 class="text-xl text-white font-bold mb-2">Detalji tima: {{ odabraniTim.name }}</h2>
                <p class="text-white mb-2">
                    Bodovi:
                    <input type="number" v-model="odabraniTim.bodovi" class="border text-white px-2 py-1 rounded w-20" />
                    <button @click="azurirajBodove" class="ml-2 bg-orange-400 px-3 py-1 rounded text-white hover:bg-orange-700">
                        Spremi
                    </button>
                </p>
            <h3 class="text-white font-semibold mt-4">Članovi tima:</h3>
            <ul class="list-disc list-inside text-white">
                <li v-for="clan in odabraniTim.Natjecatelji" :key="clan.id">
                    {{ clan.name }} {{ clan.surname }}
                </li>
            </ul>
        </div>
    </div>
</template>