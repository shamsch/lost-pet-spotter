import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const supabaseUrl = process.env.SUPABASE_API || Constants?.manifest?.extra?.SUPABASE_API;
const supabaseAnonKey = process.env.SUPABASE_KEY || Constants?.manifest?.extra?.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
