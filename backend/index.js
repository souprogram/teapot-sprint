import express from 'express';
import cors from 'cors';
import blogRoutes from './routes/blog.js';
import timoviRoutes from './routes/timovi.js';
import registracijaRoutes from './routes/registracija.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);
app.use('/api/timovi', timoviRoutes);
app.use('/api/registracija', registracijaRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});