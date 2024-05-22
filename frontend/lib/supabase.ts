import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gggphxeolciyznbxtjfc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZ3BoeGVvbGNpeXpuYnh0amZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMTA1NDMsImV4cCI6MjAzMTg4NjU0M30.ACIa3MtL1_f0CQljFGOsQoIbwJPh0PC0TjTgXZAjXcQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})