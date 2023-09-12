<script >
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <RouterLink class="navbar-brand" to="/">Portfolio</RouterLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link active" aria-current="page" to="/contact">Contact</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
/* --- STYLE HERE... --- */

/*CSS reset*/

/*Pseudo-classes*/

/*Generics*/

/*Utilties*/
</style>