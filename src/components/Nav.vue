<template>
    <nav>
        <button class="hamburgerBtn"><img src="../assets/hamburger.svg" class="hamburgerIcon"></button>
    </nav>
</template>

<style scoped>
    nav{
        background-color: black;
        height: 80px;
    }
    .hamburgerIcon{
        filter:invert(100%);
    }
    .hamburgerBtn{
        width: 40px;
        position: absolute;
        left: 30px;
        top: 22px;
        background-color: black;
        border: none;
        outline:none !important;
    }

</style>