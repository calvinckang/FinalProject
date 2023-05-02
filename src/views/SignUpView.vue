<template>
    <h2>Sign Up</h2>
    <form>
        <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" placeholder="Create password" required />
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="Retype password" required />
        </div>
        <button>Sign Up</button>
    </form>
</template>

<script>
export default {
    name: 'SignUpView'
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 24px auto;
}

form div {
    display: flex;
    flex-direction: column;
}

button {
    margin-top: 12px;
}
</style>