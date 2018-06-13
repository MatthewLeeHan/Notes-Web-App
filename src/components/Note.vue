<template>
  <div class="container">
    <h1>Note </h1>
    <!-- <h1>Note #{{ note.id }}</h1> -->
    <h2><input type="text" placeholder="Enter title here..." class="titleInput" v-model="title" @change="autoSave()"></h2>
    <div class="innerBox">
      <textarea v-model="body" class="noteTextArea" @change="autoSave()"></textarea>
    </div>
  </div>
</template>

<script>
  import {titlesRef} from '/Users/matthew.han/Documents/test-project/test-1/src/firebase.js';

  export default {
      props: ['note','title','body'],
      methods: {
        autoSave(){
          titlesRef.push({title: this.title, body: this.body, edit: true})
        }
      },
      data: function(){
        return{
          title:'',
          body:'',
          edit: false
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 30%;
  margin: 1.5% 1% 1.5% 1%; /* centering everything */
  height: 325px;
  box-shadow: 0px 5px 5px #888888;
  border-radius: 5px;
  background-color: white;
  display: inline-block;
  z-index: -1;
}
h1{
  text-align: left;
  padding: 0px 0px 0px 30px;
  font-weight: 500;
}
h2{
  text-align: left;
  padding: 20px 0px 0px 30px;
  margin-top: -40px;
  font-weight: 200;
  font-size: 20px;
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
</style>
