<template>
    <nav>
        <button class="hamburgerBtn"><img src="../assets/hamburger.svg" class="hamburgerIcon"></button>
    </nav>
</template>

<script>

</script>

<style scoped>
    nav{
        background-color: black;
        height: 80px;
        margin: 10px 10px 0px 10px;
        border-radius: 5px;
        box-shadow: 0px 4px 5px #888888;
        border: none;
    }
    .hamburgerIcon{
        filter:invert(100%);
    }
    .hamburgerBtn{
        width: 40px;
        position: absolute;
        left: 30px;
        top: 32px;
        background-color: black;
        border: none;
        outline:none !important;
    }
    .testt{
        height: 100px;
        background-color: red;
    }

</style>