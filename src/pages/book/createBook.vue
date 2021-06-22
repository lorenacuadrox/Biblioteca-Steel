<template>
    <h1>Crear un libro</h1>

    <form >
        <input type="text" placeholder="título" required>
        <input type="text" placeholder="género" required>
        <input type="text" placeholder="año" pattern="[0-9]{4}" minlength="4" maxlength="4" required>
        <input type="number" placeholder="páginas" required>

        <select v-model="book.author" required>
            <option value="" disabled>Seleccione una opción</option>
            <option 
                v-for="author in state.authors"
                :key="author._key"
                :value="author._key"
            >
                {{author.name}}
            </option>
        </select>

        <select v-model="book.editorial" required>
            <option value="" disabled>Seleccione una opción</option>
            <option 
                v-for="editorial in state.editorials"
                :key="editorial._key"
                :value="editorial._key"
            >
                {{editorial.name}}
            </option>
        </select>

        <button>Crear</button>
    </form>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, onBeforeMount, reactive } from 'vue'

export default defineComponent({
    setup() {
        const state = reactive({
            authors: [],
            editorials:[]
        })

        const book = reactive({
            title: "",
            gender: "",
            year: "",
            author: "",
            editorial: "",
        })

        onBeforeMount(async function (){
            try {
                const res = await axios.all([
                    axios.get("/author"),
                    axios.get("/editorial")
                ])

                if(res.every(item => item.data.content)) {
                    state.authors = res[0].data,
                    state.editorials = res[1].data
                }
            }

            catch (err) {
                console.error(err)
            }
        })

        async function send() {
            try {
                const res = await axios.post("/book", state)

                if (res.data.code === "book_created") {
                    alert("El libro fue creado correctamente")
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
            book: book,
            send: send
        }
    },
})
</script>
