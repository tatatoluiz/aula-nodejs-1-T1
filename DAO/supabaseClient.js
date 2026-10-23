require('dotenv').config({ quiet: true });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
});



async function testSupabase(){
const { data, error } = await supabase
.from('musicas') // da tabela partes
.select('*') // selecione estas colunas
.eq('id', 4) // ondemusica_id = 1


console.log(data)
}

testSupabase()

module.exports = supabase