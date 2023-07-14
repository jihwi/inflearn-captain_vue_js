<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">password: </label>
      <input type="text" id="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
      return {
        username: '', 
        password: ''
      }
    }, 
    metjthods: {
      submitForm: function() {
        // event.preventDefault(); //form 새로고침 막음
        console.log(this.username, this.password);
        var url = 'https://jsonplaceholder.typicode.com/users'; 
        var data = {
          username: this.username, 
          password: this.password
        }
        axios.post(url, data)
        .then(function(reponse){
          console.log(reponse);
        })
        .catch(function(error) {
          console.log(error);
        });  
      }
    }
}
</script>

<style>

</style>