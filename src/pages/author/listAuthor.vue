<template>
    <nav class="d-flex justify-content-between align-items-center">
        <h1 class="title">Autores</h1>
        <input type="text" v-model="state.search" placeholder="Filtro">
        <router-link to="/author/new" class="btn btn-primary">Crear Nuevo</router-link>
    </nav>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha Nacimiento</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Correo</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in list"
                :key="author._key">
                <td>{{ author.name}}</td>
                <td>{{ author.birthDate}}</td>
                <td>{{ author.city}}</td>
                <td>{{ author.email}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, reactive } from 'vue'
import axios from 'axios'

export default defineComponent({
    setup() {
        const state = reactive({
            authors: [],
            search: "",
        })

        const filtered = computed(function () {
            const regex = new RegExp(state.search.toLowerCase(), "i")
            return state.authors.filter(function (author){
                return (
                    regex.test(author.name) ||
                    regex.test(author.email) 
                )
            })
        })

        onBeforeMount(async function () {
            try {
                const res = await axios.get("/author")
                if (res.data.content) {
                    state.authors = res.data.content
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
