import { defineStore } from "pinia";
import supabase from '@/supabase';

export default defineStore('user', {
    state: () => {
        return {
            user: null
        } 
    },
    actions: {
        async fetchUser() {
            const { data: { user } } = await supabase.auth.getUser()
            this.user = user
        },
        async signUp (email, password) {
            const { user, error } = await supabase.auth.signUp({
              email: email,
              password: password
            });
            if (error) throw error;
            if (user) this.user = user;
        },
        persist: {
            enabled: true,
            strategies: [
              {
                key: 'user',
                storage: localStorage
              }
            ]
        },
    },
})