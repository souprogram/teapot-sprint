import express from 'express';
import { supabase } from '../supabaseClient.js';

const router = express.Router();

router.get('/', async(req, res) => {
    const { data, error } = await supabase
        .from('Blog')
        .select('id, naslov, image, content, created_at')
        .order('created_at', { ascending: false})
    
    if (error) return res.status(500).json({ error: error.message })
    res.json(data)
})

router.get('/:id', async(req, res) => {
    const { data, error } = await supabase
        .from('Blog')
        .select('id, naslov, image, content, created_at')
        .eq('id', req.params.id)
        .single();

    if (error) return res.status(404).json({ error: error.message });
    res.json(data)
})

router.post('/', async(req, res) => {
    const { naslov, content, image } = req.body;
    const { data, error } = await supabase
        .from('Blog')
        .insert([{ naslov, content, image, autor_id: process.env.ADMIN_USER_ID }])
        .select()
        .single();
    if (error) return res.status(400).json({ error: error.message })
    res.json(data);
})

router.delete('/:id', async(req, res) => {
    const userEmail = req.headers['x-user-email']
    if(userEmail !== process.env.ADMIN_EMAIL) {
        return res.status(403).json({ error: 'Nisi admin'});
    }
    const { error } = await supabase.from('Blog').delete().eq('id', req.params.id);

    if (error) return res.status(404).json({ error: error.message });
    res.json({ message: 'Objava obrisana' });
})

export default router;