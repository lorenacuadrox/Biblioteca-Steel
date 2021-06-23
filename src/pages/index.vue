<template>
    <h1 class="title">Biblioteca</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/author" class="nav-link">Autores</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/book" class="nav-link">Libros</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/editorial" class="nav-link">Editoriales</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
