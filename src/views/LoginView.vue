<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useKorisnikStore } from '@/stores/korisnik';

const router = useRouter();
const korisnik = useKorisnikStore();

const korisnik_odabir = ref('')
const email = ref('')
const password = ref('')
const poruka = ref('')

function vrsta(vrstaKorisnika) {
  korisnik_odabir.value = vrstaKorisnika
}

async function submit() {
  if (!email.value || !password.value) {
    poruka.value = 'Email i lozinka su obavezni.'
    return
  }
  const rezultat = await korisnik.login(email.value, password.value)
  if (rezultat.uspjeh) {
    router.push('/')
  } else {
    poruka.value = rezultat.poruka
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-[#2b2a29] p-8 rounded-lg w-full max-w-lg text-white">
      <h1 class="text-3xl font-bold text-center mb-8"> PRIJAVA </h1>

      <div class="flex flex-col gap-4">
        <input type="email" v-model="email" placeholder="Email..." class="p-2 border rounded text-white" />
        <input type="password" v-model="password" placeholder="Lozinka..." class="p-2 border rounded text-white" />
        <button @click="submit" class="bg-white text-black font-bold rounded-md p-2 mt-2">PRIJAVI SE</button>
        <div v-if="poruka" class="text-red-400 mt-2">{{ poruka }}</div>
      </div>
    </div>
  </div>
</template>