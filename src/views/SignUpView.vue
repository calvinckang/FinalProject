<template>
    <h2>Sign Up</h2>
    <form>
        <div>
            <label>Email</label>
            <input v-model="email" type="email" placeholder="Enter your email" required />
        </div>
        <div>
            <label>Password</label>
            <input v-model="password" type="password" placeholder="Create password" required />
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="Retype password" required />
        </div>
        <button type="button" @click="handleSignUp">Sign Up</button>
    </form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user';

export default {
    name: 'SignUpView',
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
        ...mapActions(userStore, ['signUp']),
        async handleSignUp() {
            try {
                const userData = {
                email: this.email,
                password: this.password,
                };
                await this.signUp(userData);
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