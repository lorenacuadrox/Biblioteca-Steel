<template>
    <h1>Crear nuevo autor</h1>

    <form @submit.prevent="send">
        <input type="text" placeholder="Nombre" v-model="state.name" required>
        
        <input type="email" placeholder="correo@editorial.com" v-model="state.email" required>
        
        <input type="text" placeholder="Ciudad Nacimiento" v-model="state.city" required>
        
        <input type="date" v-model="state.birthDate" required>
        <button type="submit">Enviar</button>
    </form>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        const state = reactive({
            name: "",
            email: "",
            city: "",
            birthDate: "",
        })

        async function send() {
            try {
                const res = await axios.post("/author", state)

                if (res.data.code === "author_created") {
                    alert("El autor fue creado correctamente")
                }
                else {
                    alert("Algo falló intente nuevamente")
                }
            }

            catch (err) {
                console.error(err)
            }
        }

        return {
            state: state,
            send: send,
        }
    },
})
</script>
