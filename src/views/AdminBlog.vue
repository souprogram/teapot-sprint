<script setup>
import { createBlog } from '@/services/blogService';
import { ref } from 'vue';

const naslov = ref('');
const content = ref('');
const image = ref('');
const poruka = ref('');
const errorPoruka = ref('');

const dodajObjavu = async() => {
    poruka.value = '';
    errorPoruka.value = '';

    try{
        await createBlog(naslov.value, content.value, image.value || null)
        poruka.value = 'Objava uspješno dodana';

        naslov.value = '';
        content.value = '';
        image.value = '';
    }
    catch(err) {
        errorPoruka.value = err.message;
    }
}

</script>
<template>
    <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Dodaj novu objavu</h2>

    <div class="flex flex-col gap-3">
      <input v-model="naslov" placeholder="Naslov" class="border p-2 rounded" />
      <textarea v-model="content" placeholder="Sadržaj" rows="5" class="border p-2 rounded"></textarea>
      <input v-model="image" placeholder="URL slike (opcionalno)" class="border p-2 rounded" />

      <button @click="dodajObjavu" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Dodaj objavu
      </button>

      <p v-if="poruka" class="text-green-600">{{ poruka }}</p>
      <p v-if="errorPoruka" class="text-red-600">{{ errorPoruka }}</p>
    </div>
  </div>
</template>