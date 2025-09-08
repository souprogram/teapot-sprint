<script setup>
import { ref } from 'vue'

const korisnik_odabir = ref('')
const ime = ref('')
const prezime = ref('')
const email = ref('')
const password = ref('')
const imeClana = ref('')
const prezimeClana = ref('')
const clanovi = ref('')

function vrsta(vrstaKorisnika) {
  korisnik_odabir.value = vrstaKorisnika
}

function submit() {
  if (korisnik_odabir.value === 'volonter') {
    if (!ime.value || !prezime.value || !email.value || !password.value) {
      alert('Niste ispunili sva polja.')
      return
    }
  } else if (korisnik_odabir.value === 'natjecatelj') {
    if (!email.value || !password.value || !imeClana.value || !prezimeClana.value || !clanovi.value) {
      alert('Niste ispunili sva polja.')
      return
    }
  }
  
  alert(`Uspješna prijava kao ${korisnik_odabir.value}!`)

  korisnik_odabir.value = ''
  ime.value = ''
  prezime.value = ''
  email.value = ''
  password.value = ''
  imeClana.value = ''
  prezimeClana.value = ''
  clanovi.value = ''
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-[#2b2a29] p-8 rounded-lg w-full max-w-lg text-white">
      <h1 class="text-3xl font-bold text-center mb-8">
        PRIJAVA
      </h1>
      <div v-if="korisnik_odabir===''" class="flex flex-col gap-3 mb-6">
        <button @click="vrsta('natjecatelj')" class="cursor-pointer hover:text-orange-400">Prijava za natjecatelja</button>
        <button @click="vrsta('volonter')" class="cursor-pointer hover:text-orange-400">Prijava za volontera</button>
      </div>

      <div v-if="korisnik_odabir==='natjecatelj'" class="flex flex-col gap-4">
        <p class="text-xl text-center mb-4">Prijava za natjecatelje</p>
        <input type="email" v-model="email" placeholder="Email..." class="p-2 border rounded text-white" />
        <input type="password" v-model="password" placeholder="Lozinka..." class="p-2 border rounded text-white" />
        <input type="text" v-model="imeClana" placeholder="Ime glavnog člana tima..." class="p-2 border rounded text-white" />
        <input type="text" v-model="prezimeClana" placeholder="Prezime glavnog člana tima..." class="p-2 border rounded text-white" />
        <textarea v-model="clanovi" placeholder="Popis članova tima" rows="3" class="p-2 border rounded text-white"></textarea>
        <button @click="submit" class="bg-white text-black font-bold rounded-md p-2 mt-2">PRIJAVI SE</button>
      </div>
      <div v-if="korisnik_odabir==='volonter'" class="flex flex-col gap-4">
        <p class="text-xl text-center mb-4">Prijava za volontere</p>
        <input type="text" v-model="ime" placeholder="Ime..." class="p-2 border rounded text-white" />
        <input type="text" v-model="prezime" placeholder="Prezime..." class="p-2 border rounded text-white" />
        <input type="email" v-model="email" placeholder="Email..." class="p-2 border rounded text-white" />
        <input type="password" v-model="password" placeholder="Lozinka..." class="p-2 border rounded text-white" />
        <button @click="submit" class="bg-white text-black font-bold rounded-md p-2 mt-2">PRIJAVI SE</button>
      </div>
    </div>
  </div>
</template>
