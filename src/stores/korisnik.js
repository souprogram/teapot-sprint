import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

export const useKorisnikStore = defineStore('korisnik', () => {
    const korisnici = ref([]) 
    const trenutni_korisnik = ref(null) 

    function registriraj(noviKorisnik) {
        const postoji = korisnici.value.some(k => k.email === noviKorisnik.email)
        if (postoji) {
            return { uspjeh: false, poruka: 'Email već postoji.' }
        }
        korisnici.value.push(noviKorisnik)
        return { uspjeh: true }
    }

    function login(email, password) {
        const korisnik = korisnici.value.find(k => k.email === email && k.password === password)
        if (korisnik) {
            trenutni_korisnik.value = korisnik
            return { uspjeh: true }
        } else {
        return { uspjeh: false, poruka: 'Pogrešan email ili lozinka' }
        }
    }

    const isAdmin = computed(() => {
        return trenutni_korisnik.value?.email === ADMIN_EMAIL;
    })

    return {
        korisnici,
        trenutni_korisnik,
        registriraj,
        login,
        isAdmin,
    }
})
