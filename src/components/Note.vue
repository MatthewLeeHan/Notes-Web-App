<template>
  <div class="container">
      <h1>Note #{{noteIndex+1}}</h1>
      <button class="delBtn" v-on:click="removeNote(keyvalue)"><img class="trashIcon" src="../assets/trash.svg"></button>
      <!-- <h1>Note #{{ note.id }}</h1> -->
      <h2><input type="text" placeholder="Enter title here..." class="titleInput" v-model="title" v-on:change="autoSave(keyvalue)"></h2>
      <div class="innerBox">
        <textarea v-model="body" class="noteTextArea" v-on:change="autoSave(keyvalue)"></textarea>
      </div>
    </div>
</template>

<script>
  import {titlesRef} from '/Users/matthew.han/Documents/test-project/test-1/src/firebase.js';

  export default {
      props: ['note','title','body','keyvalue','noteIndex'], /** already declared warning popping up... why? */
      methods: {
        autoSave(key){
          // titlesRef.push({title: this.title, body: this.body, edit: true})
          // if(titlesRef.child(key) != null){
          //   titlesRef.child(key).update({title: this.title, body: this.body})
          this.$emit('changeTitle',this.title, key, this.body)
          // this.$emit('changeTitle',key)
          // }
          // else{
          //   titlesRef.push({title: this.title, body: this.body, edit: true})
          // }
        },
        removeNote(key){
          titlesRef.child(key).remove();
        }
      },
      data: function(){
        return{
          // title:'',
          // body:'',
          // edit: false
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 400px;
  height: 325px;
  box-shadow: 0px 5px 5px #888888;
  border-radius: 5px;
  background-color: white;
  display: inline-block;
  z-index: -1;
  margin: 10% 2vw 0 2vw;
}
h1{
  padding: 0px 0px 0px 0px;
  margin: 20px 205px 0 0;
  text-align: left;
  font-weight: 500;
  display: inline-block;
}
h2{
  margin: 0 0 0 23px;
  padding: 10px 0 20px 0;
  font-weight: 200;
  font-size: 20px;
  display: block;
  text-align: left;
}
.noteTextArea{
  margin: 0;
  padding: 0;
  width: 95%;
  border: 1px solid rgb(193, 193, 193);
  border-radius: 5px;
  resize: none;
  height: 180px;
  font-size: 15px;
}
.innerBox{
  width: 93%;
  height: 180px;
  margin: 0 auto;
}
.titleInput{
  border: none;
  font-size: 20px;
  background: none;
}
.titleInput:focus{
  outline: none;
}
.delBtn{
  border: none;
  background-color: none;  
  display: inline-block;
}
.trashIcon{
  width: 20px;
  
}

</style>
