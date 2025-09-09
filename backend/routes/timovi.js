import express from 'express';
import { supabase } from '../supabaseClient.js';

const router = express.Router();

router.get('/', async( req, res) => {
    const { data, error } = await supabase
        .from('Timovi')
        .select('id, name, bodovi')

    if (error) return res.status(500).json({error: error.message})
    res.json(data)
})

router.post('/', async(req, res) => {
    const { name, user_id } = req.body

    const { data, error } = await supabase
        .from('Timovi')
        .insert([{ name, bodovi:0 }])
        .select();

    if (error) return res.status(500).json({error: error.message})
    res.status(201).json(data[0])
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params

    const { error } = await supabase
        .from('Timovi')
        .delete()
        .eq('id', id)
    
    if (error) return res.status(500).json({error: error.message})
    res.status(204).send()
})

router.put('/:id', async(req, res) => {
    const { id } = req.params
    const { bodovi } = req.body

    const { data, error } = await supabase
        .from('Timovi')
        .update({ bodovi })
        .eq('id', id)
        .select();
    
    if (error) return res.status(500).json({error: error.message})
    res.json(data[0])
})

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const { data: tim, error: timError } = await supabase
        .from('Timovi')
        .select('id, name, bodovi')
        .eq('id', id)
        .single();

    if (timError) return res.status(500).json({ error: timError.message });

    const { data: clanovi, error: clanoviError } = await supabase
    .from('Natjecatelji')
    .select('id, name, surname')
    .eq('id', id);

    if (clanoviError) return res.status(500).json({ error: clanoviError.message });
    res.json({ ...tim, Natjecatelji: clanovi });
})
export default router