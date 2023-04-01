<script>
export default {
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'login' })
        }
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/#">Vue</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/todo-list">Todo List</router-link>
                </li>
                <li class="nav-item nav-pills ml-auto">
                    <router-link @click="logout" class="nav-link" to="/#">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
