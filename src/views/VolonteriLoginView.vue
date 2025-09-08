<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const korisnik_odabir = ref('')
const ime = ref('')
const prezime = ref('')
const email = ref('')
const password = ref('')


function submit() {
    if (!ime.value || !prezime.value || !email.value || !password.value) {
        alert('Niste ispunili sva polja.')
        return
    }
    else
        alert(`Uspješna prijava kao ${korisnik_odabir.value}!`)

    korisnik_odabir.value = ''
    ime.value = ''
    prezime.value = ''
    email.value = ''
    password.value = ''
}
</script>

<template>
  <div class="min-h-screen">
    <div>
      <section id="home" class="min-h-screen flex items-center justify-center">
        <div class="text-center text-black bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
          <div v-if="korisnik_odabir === ''" class="flex flex-col gap-3">
            <h1 class="text-5xl font-bold mb-6">PRIJAVA ZA VOLONTERE</h1>
            <button @click="vrsta('volonter')" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Nastavi kao volonter</button>
            <button @click="vrsta('natjecatelj')" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Nastavi kao natjecatelj</button>
          </div>
          <div v-else class="mt-6 py-2 px-2 flex flex-col gap-5">
            <p class="text-xl">Prijava za {{ korisnik_odabir }}</p>
            <input type="text" v-model="ime" placeholder="Ime" class="p-2 border rounded" />
            <input type="text" v-model="prezime" placeholder="Prezime" class="p-2 border rounded" />
            <input type="email" v-model="email" placeholder="Email" class="p-2 border rounded" />
            <input type="password" v-model="password" placeholder="Lozinka" class="p-2 border rounded" />
            <button @click="submit" class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer">Prijavi se</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
