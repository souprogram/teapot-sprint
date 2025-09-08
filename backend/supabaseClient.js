import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const SUPABASE_URL=process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY=process.env.SUPABASE_SERVICE_KEY;

export const supabase=createClient(SUPABASE_URL,SUPABASE_SERVICE_KEY);