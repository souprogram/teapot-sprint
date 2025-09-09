<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBlog, deleteBlog } from '@/services/blogService';
import { useKorisnikStore } from '@/stores/korisnik';

const route = useRoute();
const router = useRouter();
const korisnikStore = useKorisnikStore();
const blog = ref(null);
const errorPoruka = ref('');
const potvrda = ref(false);
const brisanje = ref(null);

onMounted(async () => {
    try {
        blog.value = await getBlog(route.params.id)
    }
    catch (err) {
        errorPoruka.value = err.message;
    }
})
const brisanjeBloga = (id) => {
    brisanje.value = blog.value;
    potvrda.value = true;
}

const potvrdaOBrisanju = async () => {
    try {
        await deleteBlog(brisanje.value.id, korisnikStore.trenutni_korisnik.email);
        potvrda.value = false;
        router.push('/blog'); 
    } 
    catch(err) {
        errorPoruka.value = err.message;
    }
}
const otkazivanjeBrisanja = () => {
    potvrda.value = false;
    brisanje.value = null;
}
</script>

<template>
    <div class="p-6 text-white">
        <p v-if="errorPoruka" class="text-red-600 mt-4">{{ errorPoruka }}</p>
        <div v-if="blog" class="p-5 m-2 mt-25">
            <h1 class="text-2xl font-bold">{{ blog.naslov }}</h1>
            <p class="mt-2">{{ blog.content }}</p>
            <img v-if="blog.image" :src="blog.image" alt="slika" class="mt-4 rounded-lg" />

            <button v-if="korisnikStore.isAdmin" @click="brisanjeBloga(blog.id)" class="absolute top-30 right-10 text-white hover:underline px-2 py-1 rounded">
                Obriši
            </button>
        </div>
        <div v-if="potvrda" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-lg max-w-sm w-full text-black">
                <p class="mb-4">Jeste li sigurni da želite obrisati blog?</p>
                <div class="flex justify-end gap-3">
                    <button @click="otkazivanjeBrisanja" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Ne</button>
                    <button @click="potvrdaOBrisanju" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Da</button>
                </div>
            </div>
        </div>
    </div>
</template>