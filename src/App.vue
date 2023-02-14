<template>
    <h4>Get data from firestore</h4>

    <button type="button" class="btn btn-primary" @click="getMovies">Get Data</button>

    <table>
        <tr v-for="(movie, key) in movies">
            <td>{{ movie.title }}</td>
            <td>{{ movie.year }}</td>
        </tr>
    </table>

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

</script>
