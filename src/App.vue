<!-- Goal: To make a simple to-do app without relying on a tutorial... -->
<!-- Matthew Han -->

<template>
  <div id="app">
    <Nav v-on:showSideBar="toggle"></Nav>
    <!-- <Note></Note> -->
    <!-- <SideBar></SideBar> -->
    <component v-bind:is="component"></component>
    <!-- <Note v-for="note in notes" v-bind:note = "notes" v-bind:key="note.id"></Note> -->
    <div class="savedNotesLoader" v-for="title in titles.slice().reverse()" :key="title['.key']">
      <Note v-on:changeTitle="updateTitle" v-bind:keyvalue="title['.key']" v-bind:noteIndex="titles.indexOf(title)" class="savedNote" v-bind:yeet="title.title" v-bind:bodyyeet="title.body"></Note>
        <!-- {{ title.body }} -->
    </div>
    <button class="addNoteBtn" v-on:click="addCard"><img src="./assets/plus.svg" class="plusIcon"></button>
  </div>
</template>

<script>
import Note from './components/Note.vue'
import Nav from './components/Nav.vue'
import SideBar from './components/SideBar.vue'
import {titlesRef} from './firebase';


export default {
  name: 'app',
  components: {
    Note,
    Nav,
    SideBar,
  },
  firebase:{
    titles: titlesRef
  },
  data: function(){
    return{
      component:''
      // newNote:{
      //   title:'',
      //   body: '',
      //   edit: true
      // }
    }
  },
  methods:{
    addCard: function(e){
      // this.notes.push({'id':this.notes.length+1,'title':'','body':''})
      titlesRef.push({title: '', body: '', edit: true, label:''})
      e.preventDefault()
    },
    // showNav: function(e){
    //   console.log('will show nav ...')
    //   e.preventDefault()
    // }
    updateTitle: function(updatedTitle, idNum, updatedBody){
      // console.log('ID: ' + updatedTitle)
      // var updateNote = titlesRef.child(updatedTitle)
      // console.log(updatedTitle)
      // console.log(idNum)
      titlesRef.child(idNum).update({title: updatedTitle, body: updatedBody})
    },
    toggle: function(test){
      // alert(test)
      if(this.component === ''){
        this.component= SideBar
      }
      else{
        this.component = ''
      }
    }
  }
}
</script>

<style>
#app{
  z-index: -2;
}
body{
  background-color: rgb(239, 239, 239);
  padding: 0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; /** centering my cards cause divs treated as text element */
  color: #2c3e50;
}

.addNoteBtn{
  background-color: aquamarine;
  position: fixed;
  border: none;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  font-size: 30px;
  bottom: 30px;
  right: 30px;
  color: black;
  outline:none !important;
  box-shadow: 0px 5px 5px #888888;
}
.addNoteBtn:hover{
  background-color: aqua;
}
.plusIcon{
  width: 25px;
  margin-top: 10px;
}
.savedNotesLoader{
  display: inline-block;
}


</style>
