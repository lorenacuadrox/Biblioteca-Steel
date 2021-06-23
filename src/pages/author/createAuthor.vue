<template>
    <h1 class="title">Crear nuevo autor</h1>

    <form @submit.prevent="send">
        <div class="input-group mb-3">
            <label class="input-group-text">Nombre Completo</label>
            <input type="text" class="form-control" placeholder="Carlos Eduardo Cortes Perez" v-model="state.name" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Correo</label>
            <input type="email" class="form-control" placeholder="correo@editorial.com" v-model="state.email" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Ciudad de Nacimiento</label>
            <input type="text" class="form-control" placeholder="Bogotá" v-model="state.city" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Fecha Nacimiento</label>
            <input type="date" class="form-control" v-model="state.birthDate" required>
        </div>
        <button class="btn btn-primary" type="submit">Enviar</button>
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
