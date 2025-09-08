<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { getBlogs } from '@/services/blogService';

const objave = ref([]);
const errorPoruka = ref('');

onMounted(async () => {
    try{
        objave.value = await getBlogs();
    }
    catch (err) {
        errorPoruka.value = err.message;
    }
})
</script>

<template>
    <div class="p-6 grid gap-4">
        <p v-if="errorPoruka" class="text-red-600">{{ errorPoruka }}</p>
        <div>
            <div v-for="blog in objave" :key="blog.id" 
                class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <RouterLink :to="`/blog/${blog.id}`">
                    <div>
                        <h2 class="text-xl font-bold">{{ blog.naslov }}</h2>
                        <p>{{ blog.content }}</p>
                        <span>Vidi više...</span>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>