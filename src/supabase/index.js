
import { createClient } from '@supabase/supabase-js'

const baseUrl = 'https://sellxjzdeczrhjweafag.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlbGx4anpkZWN6cmhqd2VhZmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5Nzk1MjMsImV4cCI6MTk5ODU1NTUyM30.7ZyPblKRKqIAJgulM88F06GO8onhmeKF2AaAHutKW84';

export default createClient(baseUrl, apiKey)