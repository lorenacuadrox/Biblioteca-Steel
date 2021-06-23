<template>
    <h1 class="title">Crear nuevo editorial</h1>

    <form @submit.prevent="send">
        <div class="input-group mb-3">
            <label class="input-group-text">Nombre</label>
            <input type="text" class="form-control" placeholder="Animamundo" v-model="state.name" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Dirección</label>
            <input type="text" class="form-control" placeholder="calle35#20-18" v-model="state.address" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Telefono</label>
            <input type="number" class="form-control" placeholder="3224985" v-model="state.phone" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Correo</label>
            <input type="email" class="form-control" v-model="state.email" placeholder="ejemplo@ejemlo.com" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Máximo de libros</label>
            <input type="number" class="form-control" v-model="state.maxBooks" placeholder="20" required>
        </div>
        <div class="input-group mb-3">
            <small>Si no tiene máximo indique -1</small>
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
            address: "",
            phone: "",
            email: "",
            maxBooks: "",
        })

        async function send() {
            try {
                const res = await axios.post("/editorial", state)

                if (res.data.code === "editorial_created") {
                    alert("El editorial fue creado correctamente")
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
