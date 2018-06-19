<template>
    <nav>
        <button v-on:click="showSideBar()" class="hamburgerBtn"><img src="../assets/hamburger.svg" class="hamburgerIcon"></button>
        <button class="profileBtn" ><img class="userIcon" src="../assets/user.svg"></button>
    </nav>
</template>

<script>
export default{
    methods:{
        showSideBar: function(){
            this.$emit('showSideBar','meep')
        }
    }
}

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
        top: 33px;
        background-color: black;
        border: none;
        outline:none !important;
    }
    .testt{
        height: 100px;
        background-color: red;
    }
    .profileBtn{
        background: none;
        border: none;
        height: 80px;
        float: right;
        margin: 0 11px 0 0;
        outline: none;
    }
    .userIcon{
        width: 30px;
        filter:invert(100%);
    }

</style>