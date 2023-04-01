<script>
export default {
    data() {
        return {
            task: '',
            todos: []
        }
    },
    methods: {
        addTodoList() {
            this.todos.push({
                id: Date.now(),
                task: this.task
            })
            this.task = ''
        }
    },
    mounted() {
        // console.log('Todo list mounted')
    },
    watch: {
        todos: {
            handler(newValue, oldValue) {
                console.log(newValue)
            },
            deep: true
        }
    }
}
</script>
<template>
    <div>
        <div class="col-6 mx-auto m-2">
            <input class="form-control" @keyup.enter="addTodoList" placeholder="Enter Task" v-model="task" />
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="({ task, id }) in todos">
                    {{ task }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
ul {
    list-style-type: none;
}
</style>