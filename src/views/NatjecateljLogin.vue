<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const korisnik_odabir = ref('')
const ime = ref('')
const prezime = ref('')
const email = ref('')
const password = ref('')

function vrsta(vrstaKorisnika) {
  korisnik_odabir.value = vrstaKorisnika
}

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
                <div class="text-center text-white bg-transparent p-8 rounded-xl w-full max-w-xl">
                    <h1 class="text-6xl text-center font-bold mb-20">PRIJAVA</h1>
                    <div v-if="korisnik_odabir===''" class="flex flex-col gap-3 border rounded-md pb-4 pt-4 m-20">
                        <button @click="vrsta('natjecatelj')" class="cursor-pointer hover:text-orange-400">Prijava za natjecatelja</button>
                        <button @click="vrsta('volonter')" class="cursor-pointer hover:text-orange-400">Prijava za volontera</button>
                    </div>
                    <div v-else class="mt-6 py-2 px-2 flex flex-col gap-5">
                        <p class="text-xl ">Prijava za {{ korisnik_odabir }}</p>
                        <input type="text" v-model="ime" placeholder="Ime" class="p-2 border rounded" />
                        <input type="text" v-model="prezime" placeholder="Prezime" class="p-2 border rounded" />
                        <input type="email" v-model="email" placeholder="Email" class="p-2 border rounded" />
                        <input type="password" v-model="password" placeholder="Lozinka" class="p-2 border rounded">
                        <button @click="submit" class="bg-transparent text-white border rounded-md p-2 ml-50 mr-50">Prijavi se</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>