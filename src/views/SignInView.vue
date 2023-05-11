<template>
    <h2>Sign In</h2>
    <form>
        <div>
            <label>Email</label>
            <input v-model="email" type="email" placeholder="Enter your email" required />
        </div>
        <div>
            <label>Password</label>
            <input v-model="password" type="password" placeholder="Enter your password" required />
        </div>
        <button type="button" @click="handleSignIn">Sign In</button>
    </form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user';

export default {
    name: 'SignInView',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        ...mapState(userStore, ['user']),
    },
    methods: {
        ...mapActions(userStore, ['signIn']),
        async handleSignIn() {
            try {
                const userData = {
                email: this.email,
                password: this.password,
                };
                await this.signIn(userData);
                this.$router.push({ name: 'home' })
            } catch(err) {
                console.error(err)
            }
        },
    },
}
</script>

<style>

</style>