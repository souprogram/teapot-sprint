<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { getBlogs } from '@/services/blogService';
import { useKorisnikStore } from '@/stores/korisnik';
import AdminBlog from './AdminBlog.vue';

const korisnikStore = useKorisnikStore();
const objave = ref([]);
const errorPoruka = ref('');

onMounted(async () => {
  try {
    objave.value = await getBlogs();
  } catch (err) {
    errorPoruka.value = err.message;
  }
});
</script>

<template>
    <div class="p-6 grid gap-4">
        <div v-if="korisnikStore.isAdmin" class="absolute top-30 right-0">
            <RouterLink to="/admin" class="text-white px-4 py-2 rounded hover:underline">
                Dodaj novi blog
            </RouterLink>
        </div>
        
        <div class="text-white space-y-3">
            <div v-for="blog in objave" :key="blog.id" 
                class="p-4 bg-white/15 rounded-2xl gap-3 shadow hover:shadow-lg transition">
                <RouterLink :to="`/blog/${blog.id}`">
                    <div class="p-1.5 space-y-2">
                        <h2 class="text-xl font-bold">{{ blog.naslov }}</h2>
                        <p class="text-sm leading-relaxed">{{ blog.content }}</p>
                        <span class="block mt-4 hover:underline">Vidi više...</span>
                    </div>
                </RouterLink>     
            </div>
        </div>
    </div>
</template>