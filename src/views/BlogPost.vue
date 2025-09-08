<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getBlog } from '@/services/blogService';

const route = useRoute();
const blog = ref(null);
const errorPoruka = ref('');

onMounted(async () => {
    try {
        blog.value = await getBlog(route.params.id)
    }
    catch (err) {
        errorPoruka.value = err.message;
    }
})
</script>

<template>
    <div class="p-6">
        <RouterLink to="/blog">Nazad</RouterLink>
        <p v-if="errorPoruka" class="text-red-600 mt-4">{{ errorPoruka }}</p>
        <div v-if="blog" class="mt-4">
            <h1 class="text-2xl font-bold">{{ blog.naslov }}</h1>
            <p class="mt-2">{{ blog.content }}</p>
            <img v-if="blog.image" :src="blog.image" alt="slika" class="mt-4 rounded-lg" />
        </div>
    </div>
</template>