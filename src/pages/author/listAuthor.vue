<template>
    <h1>Autores</h1>
    <router-link to="/author/new">Crear Nuevo</router-link>
    <div 
        v-for="author in state.authors"
        :key="author._key"
    >
        <p>{{ author.name}}</p>
        <small>{{ author.birthDate }}</small>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive } from 'vue'
import axios from "axios"

export default defineComponent({
    setup() {
        const state = reactive({
            authors: []
        })

        onBeforeMount(async function () {
            try {
                const res = await axios.get("/author")
                if (res.data.content) {
                    state.authors = res.data.content
                }
            }

            catch (err) {
                console.log(err)
            }
        })

        return {    
            state: state
        }
    },
})
</script>
