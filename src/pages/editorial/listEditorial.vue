<template>
    <nav class="d-flex justify-content-between align-items-center">
        <h1 class="title">Editoriales</h1>
        <input type="text" v-model="state.search" placeholder="Filtro">
        <router-link to="/editorial/new" class="btn btn-primary">Crear Nuevo</router-link>
    </nav>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Correo</th>
                <th scope="col">Máximo de libros</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="editorial in list"
                :key="editorial._key">
                <td>{{ editorial.name}}</td>
                <td>{{ editorial.address}}</td>
                <td>{{ editorial.phone}}</td>
                <td>{{ editorial.email}}</td>
                <td>{{ editorial.maxBooks}}</td>
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
            editorials: [],
            search: ""
        })

        const filtered = computed(function () {
            const regex = new RegExp(state.search.toLowerCase(), "i")
            return state.editorials.filter(function (editorial){
                return (
                    regex.test(editorial.name) ||
                    regex.test(editorial.email) ||
                    regex.test(editorial.address)
                )
            })
        })

        onBeforeMount(async function () {
            try {
                const res = await axios.get("/editorial")
                if (res.data.content) {
                    state.editorials = res.data.content
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
