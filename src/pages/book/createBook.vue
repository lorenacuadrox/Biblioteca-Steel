<template>
    <h1 class="title">Crear nuevo libro</h1>

    <form @submit.prevent="send">
        <div class="input-group mb-3">
            <label class="input-group-text">Título</label>
            <input class="form-control" type="text" v-model="book.title" placeholder="El principito" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Género</label>
            <input class="form-control" type="text" v-model="book.gender" placeholder="Infantíl" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text">Año publicación</label>
            <input class="form-control" type="text" v-model="book.year" placeholder="2000" pattern="[0-9]{4}" minlength="4" maxlength="4" required>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text"># Páginas</label>
            <input class="form-control" type="number" v-model="book.pages" placeholder="300" required>
        </div>
        
        <div class="input-group mb-3" >
            <label class="input-group-text">Autor</label>
            <select class="form-select" v-model="book.author" required>
                <option value="" disabled>Seleccione una opción</option>
                <option 
                    v-for="author in state.authors"
                    :key="author._key"
                    :value="author._key"
                >
                    {{author.name}}
                </option>
            </select>
        </div>

        <div class="input-group mb-3">
            <label class="input-group-text">Editorial</label>
            <select class="form-select" v-model="book.editorial" required>
                <option value="" disabled>Seleccione una opción</option>
                <option 
                    v-for="editorial in state.editorials"
                    :key="editorial._key"
                    :value="editorial._key"
                >
                    {{editorial.name}}
                </option>
            </select>
        </div>
        <div v-if="state.authors.length === 0 || state.editorials.length === 0">
            <div class="alert alert-warning" role="alert">
                    Oye! No se ha creado <a href="/author" class="link-primary">Autores</a> o <a href="/editorial" class="link-primary">Editoriales</a> 
            </div>
        </div>
        <div v-if="state.rangeExceeded">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Ésta editorial a alcanzado su máximo de libros 
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Crear</button>
    </form>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, onBeforeMount, reactive } from 'vue'

export default defineComponent({
    setup() {
        const state = reactive({
            authors: [],
            editorials:[],
            rangeExceeded: false
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
                    state.authors = res[0].data.content
                    state.editorials = res[1].data.content
                }
            }

            catch (err) {
                console.error(err)
            }
        })

        async function send() {
            try {
                const res = await axios.post("/book", book)

                if (res.data.code === "book_create") {
                    alert("El libro fue creado correctamente")
                }
                else if(res.data.code === "limit_exceeded") {
                    state.rangeExceeded = true
                }
                else {
                    console.error(res.data.code)
                    alert("Algo falló intente nuevamente")
                }
            }

            catch (err) {
                console.error(err)
            }
        }

        return {
            state: state,
            book: book,
            send: send
        }
    },
})
</script>
