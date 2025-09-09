<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from "vue-router";
import { useKorisnikStore } from '@/stores/korisnik'

const router = useRouter();
const korisnik = useKorisnikStore();

const korisnik_odabir = ref('');
const ime = ref('');
const prezime = ref('');
const email = ref('');
const password = ref('');
const opis = ref('');
const imeTima = ref('');
const clanovi = ref('');
const leader = ref(false);
const poruka = ref('');

function vrsta(vrstaKorisnika) {
  korisnik_odabir.value = vrstaKorisnika
}

async function registracija() {
  if (!email.value || !password.value || !korisnik_odabir.value) {
    poruka.value = 'Email, lozinka i uloga su obavezni.'
    return
  }
  const noviKorisnik = {
    email: email.value,
    password: password.value,
    uloga: korisnik_odabir.value
  }
  if (korisnik_odabir.value === 'volonter') {
    if (!ime.value || !prezime.value || !opis.value) {
      poruka.value = 'Ispuni sva polja za volontera.'
      return
    }
    Object.assign(noviKorisnik, {
      ime: ime.value,
      prezime: prezime.value,
      opis: opis.value
    })
  }
  if (korisnik_odabir.value === 'natjecatelj') {
    if (!ime.value || !prezime.value || !imeTima.value || !clanovi.value) {
      poruka.value = 'Ispuni sva polja za natjecatelja.'
      return
    }
    Object.assign(noviKorisnik, {
      ime: ime.value,
      prezime: prezime.value,
      imeTima: imeTima.value,
      leader: leader.value,
      clanovi: clanovi.value
    })
  }
  const rezultat = await korisnik.registriraj(noviKorisnik)
  if (rezultat.uspjeh) {
    router.push('/')
  } else {
    poruka.value = rezultat.poruka
  }
}

</script>

<template>
  <div class="min-h-screen">
    <div>
      <section id="home" class="min-h-screen flex items-center justify-center">
        <div class="text-center text-black bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
          <div v-if="korisnik_odabir === ''" class="flex flex-col gap-3">
            <h1 class="text-5xl font-bold mb-6">REGISTRACIJA</h1>
            <button @click="vrsta('volonter')" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Registracija volontera</button>
            <button @click="vrsta('natjecatelj')" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Registracija natjecatelja</button>
          </div>
          <div v-else class="mt-6 py-2 px-2 flex flex-col gap-5">
            <p class="text-xl">Registracija za {{ korisnik_odabir }}</p>
            <input type="text" v-model="ime" placeholder="Ime" class="p-2 border rounded" />
            <input type="text" v-model="prezime" placeholder="Prezime" class="p-2 border rounded" />
            <input type="email" v-model="email" placeholder="Email" class="p-2 border rounded" />
            <input type="password" v-model="password" placeholder="Lozinka" class="p-2 border rounded" />
            <textarea v-if="korisnik_odabir === 'volonter'" v-model="opis" placeholder="Opis (što želiš raditi)" class="p-2 border rounded"></textarea>

            <div v-if="korisnik_odabir === 'natjecatelj'" class="flex flex-col gap-2">
              <input type="text" v-model="imeTima" placeholder="Ime tima" class="p-2 border rounded" />
              <textarea v-model="clanovi" placeholder="Popis članova tima" class="p-2 border rounded"></textarea>
              <label>
                <input type="checkbox" v-model="leader" />
                  Glavni u timu
              </label>
            </div>
            <button @click="registracija" class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Registriraj se</button>
            <div v-if="poruka" class="text-red-500 mt-2">{{ poruka }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

