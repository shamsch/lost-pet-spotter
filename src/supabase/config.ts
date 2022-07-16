import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const supabaseUrl = Constants?.manifest?.extra?.SUPABASE_API;
const supabaseAnonKey = Constants?.manifest?.extra?.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
