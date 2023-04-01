<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Edit User</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="user.city" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Edit User</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { db } from "@/firebase.js"
export default {
    data() {
        return {
            user: {
            }
        }
    },
    created() {
        let dbRef = db.collection('users').doc(this.$route.params.id);
        dbRef.get().then((doc) => {
            this.user = doc.data();
        }).catch((error) => {
            console.log(error)
        })
    },
    methods: {
        onFormSubmit() {
            db.collection('users').add(this.user).then(() => {
                this.user.name = ''
                this.user.email = ''
                this.user.phone = ''
                this.user.city = ''
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>