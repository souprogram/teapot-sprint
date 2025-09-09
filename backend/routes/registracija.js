import express from 'express';
import { supabase } from '../supabaseClient.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password, ime, prezime, uloga, opis, imeTima, leader } = req.body;

        const { data: authData, error: authError } = await supabase.auth.admin.createUser({ email, password, email_confirm: true });
        if (authError) return res.status(400).json({ error: authError.message });

        const user_id = authData.user.id;

        const { error: userError } = await supabase
            .from('Users')
            .insert({
                id: user_id,
                email,
                name: ime,
                surname: prezime,
                role: uloga || 'user'
        });
        if (userError) return res.status(500).json({ error: userError.message });

        if (uloga === 'volonter') {
            const { error: volonterError } = await supabase
                .from('Volonteri')
                .insert({
                    user_id,
                    name: ime,
                    surname: prezime,
                    type: opis || null
            });
            if (volonterError) return res.status(500).json({ error: volonterError.message });
        }

        if (uloga === 'natjecatelj') {
            let { data: tim, error: timError } = await supabase
                .from('Timovi')
                .select('*')
                .eq('name', imeTima)
                .single();

            if (!tim) {
                const { data: noviTim, error: noviTimError } = await supabase
                    .from('Timovi')
                    .insert({ name: imeTima, bodovi: 0 })
                    .select()
                    .single();

                if (noviTimError) return res.status(500).json({ error: noviTimError.message });
                tim = noviTim;
            }
            else if (timError) {
                return res.status(500).json({ error: timError.message });
            }

            const { error: natjecateljiError } = await supabase
                .from('Natjecatelji')
                .insert({
                    user_id,
                    name: ime,
                    surname: prezime,
                    leader_tima: leader || false,
                    tim_id: tim.id
                });
            if (natjecateljiError) return res.status(500).json({ error: natjecateljiError.message });
        }

        res.json({ uspjeh: true, user_id });
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

export default router;