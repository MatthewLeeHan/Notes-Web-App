<!-- Goal: To make a simple to-do app without relying on a tutorial... -->

<template>
  <div id="app">
    <Nav></Nav>
    <!-- <Note></Note> -->
    <Note v-for="note in notes" v-bind:note = "note" v-bind:key="note.id"></Note>
    <button class="addNoteBtn" v-on:click="addCard"><img src="./assets/plus.svg" class="plusIcon"></button>

  </div>
</template>

<script>
import Note from './components/Note.vue'
import Nav from './components/Nav.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    Note,
    Nav
  },
  data: function(){
    return{
      notes:[
        {
        'id': 1,
        'title': '',
        'body': ''
        }
      ]
    }
  },
  methods:{
    addCard: function(e){
      this.notes.push({'id':this.notes.length+1,'title':'','body':''})
      e.preventDefault()
    },
    showNav: function(e){
      console.log('will show nav ...')
      e.preventDefault()
    }
  }
}
</script>

<style>
body{
  background-color: rgb(239, 239, 239);
  padding: 0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.addNoteBtn{
  background-color: aquamarine;
  position: absolute;
  border: none;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  font-size: 30px;
  bottom: 30px;
  right: 30px;
  color: black;
  outline:none !important;
}
.addNoteBtn:hover{
  background-color: aqua;
}
.plusIcon{
  width: 25px;
  margin-top: 10px;
}
</style>
