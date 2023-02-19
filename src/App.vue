<template>
    <header>
<!--
        <a href="#/">Home</a> |
        <a href="#/about">Parser</a>
        <component :is="currentView" />
-->


        <Toolbar>
            <template #start>
                <a href="#/">Home  </a> |
                <a href="#/about">  Parser</a>

<!--                <Button hre label="New" icon="pi pi-plus" class="p-button-link" />-->
<!--                <Button label="Fetch" icon="pi pi-data" class="p-button-link" />-->
<!--                <i class="pi pi-bars p-toolbar-separator mr-2" />-->
<!--                <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>-->
            </template>

            <template #end>
                <Button icon="pi pi-search" class="p-button-sm mr-2" />
            </template>
        </Toolbar>

    </header>


    <Button>frfre</Button>
    <Button>wefervfe</Button>

    <article>
        <h4>Get data from firestore</h4>

        <button type="button" class="btn btn-primary" @click="getMovies">Get Data</button>

        <table>
            <tr v-for="(movie, key) in movies">
                <td>{{ movie.title }}</td>
                <td>{{ movie.year }}</td>
            </tr>
        </table>
    </article>

    <article>
        <h4>Create an Account</h4>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Submit</button></p>
    </article>

</template>


<script setup>
import {ref, onMounted} from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {connection} from './firebase.js'

const db = getFirestore(connection);
console.log('db=', db);

const movies = ref([])

onMounted(() => {
    console.log('myheader mounted');
})


async function getMovies() {
    const moviesCol = collection(db, 'movie');
    const moviesSnapshot = await getDocs(moviesCol);
    movies.value = moviesSnapshot.docs.map(doc => doc.data());
}


const email = ref('')
const password = ref('')
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Successfully registered!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message, ' ### Error code:', error.code, )
        });
}

</script>

<style scoped>
.p-button {
    margin-right: 0.5rem;
}

body #app header {
    margin: 0;
    padding: 0;
}


.template .p-button i {
    line-height: 2.25rem;
}

Toolbar {
    display: flex;
    width: 100vw;
}

.wrapper{
    padding-left: 30px;
}
</style>