import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { supabase } from '../stores/supabaseClient';

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
const API_URL = import.meta.env.VITE_API_URL

export const useKorisnikStore = defineStore('korisnik', () => {
    const korisnici = ref([]) 
    const trenutni_korisnik = ref(null) 
    const profil = ref(null)

    async function registriraj(noviKorisnik) {
        try {
            const res = await fetch(`${API_URL}/api/registracija`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(noviKorisnik)
            });
            const data = await res.json();
            if (!res.ok) {
                return { uspjeh: false, poruka: data.error || 'Greška kod registracije' };
            }
            return { uspjeh: true, poruka: 'Korisnik uspješno registriran' };
        } 
        catch (err) {
            console.error(err);
            return { uspjeh: false, poruka: err.message };
        }
    }
    async function login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) return { uspjeh: false, poruka: error.message }
        trenutni_korisnik.value = data.user
        const { data: prof } = await supabase
            .from('Users')
            .select('*')
            .eq('id', data.user.id)
            .single()

        profil.value = prof

        return { uspjeh: true }
    }
    async function logOut() {
        await supabase.auth.signOut()
        trenutni_korisnik.value = null
        profil.value = null
    }
    async function dohvatiKorisnik() {
        const { data } = await supabase.auth.getUser()
        trenutni_korisnik.value = data.user;
        if (data.user) {
            const { data: prof } = await supabase
                .from('Users')
                .select('*')
                .eq('id', data.user.id)
                .single()
            profil.value = prof
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
        logOut,
        dohvatiKorisnik,
        isAdmin,
        profil,
    }
})
