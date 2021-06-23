<template>
    <nav class="d-flex justify-content-between align-items-center">
        <h1 class="title">Libros</h1>
        <input type="text" v-model="state.search" placeholder="Filtro">
        <router-link to="/book/new" class="btn btn-primary">Crear Nuevo</router-link>
    </nav>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Título</th>
                <th scope="col">Año</th>
                <th scope="col">Genero</th>
                <th scope="col"># Páginas</th>
                <th scope="col">Editorial</th>
                <th scope="col">Autor</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in list"
                :key="book._key">
                <td>{{ book.title }}</td>
                <td>{{ book.year }}</td>
                <td>{{ book.gender }}</td>
                <td>{{ book.pages }}</td>
                <td>{{ book.editorial.name }}</td>
                <td>{{ book.author?.name }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { computed, defineComponent, onBeforeMount, reactive } from 'vue'
import axios from 'axios'

export default defineComponent({
    setup() {
        const state = reactive({
            books: [],
            search: ""
        })

        const filtered = computed(function () {
            const regex = new RegExp(state.search.toLowerCase(), "i")
            return state.books.filter(function (book){
                return (
                    regex.test(book.title) ||
                    regex.test(book.year) ||
                    regex.test(book.author.name)
                )
            })
        })

        onBeforeMount(async function () {
            try {
                const res = await axios.get("/book")
                if (res.data.content) {
                    state.books = res.data.content
                }
            }
            catch (err) {
                console.error(err)
            }
        })

        return {
            state: state,
            list: filtered
        }
    },
})
</script>
