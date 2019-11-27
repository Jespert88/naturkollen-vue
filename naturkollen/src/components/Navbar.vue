<template>
<div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="Navbar">
        <a class="navbar-brand" href="/">Naturkollen</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                     <router-link class="nav-link" to="/"> Hem </router-link>
                </li>
                <li class="nav-item active">
                     <router-link class="nav-link" to="/trees"> Trädarter </router-link>
                </li>
                 <li class="nav-item active">
                     <router-link class="nav-link" to="/trees"> Djurarter </router-link>
                </li>
                <li class="nav-item active">
                     <router-link class="nav-link" to="/trees"> Om naturkollen </router-link>
                </li>
                <li class="nav-item active">
                     <router-link class="nav-link" to="/trees"> Kontakt </router-link>
                </li>
               <!--  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/trees"> Trees </router-link>
                    </div>
                </li> -->
               
            </ul>
        </div>
    </nav>

</div>
</template>

<script>
export default {

}
</script>

<style>
    #Navbar {
        background-color: #649651 !important;
    }
</style>
