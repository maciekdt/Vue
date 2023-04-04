<template>
  <div id="app" class="small-container">
    <h1>Znajomi</h1>
    
    <person-form @add:person="addPerson"/>
    <authors-table :authorsSource="authors"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import AuthorsTable from '@/components/AuthorsTable.vue'
  import PersonForm from '@/components/PersonForm.vue'
  export default {
    name: 'app',
    components: {
      AuthorsTable,
      PersonForm,
    },
    data() {
      return {
        authors: []
      }
    },
    methods: {
      // addPerson(person) {
        // this.persons = [...this.persons, person] // tu nowo dodany pracownik nie otrzymuje unikalnego id
      // },
      // async getAuthors() {
      //   try {
      //     const response = await fetch('http://localhost:8080/authors')
      //     const data = await response.json()
      //     this.authors = data
      //   } catch (error) {
      //     console.error(error)
      //   }
      // },
      getAuthors() {
        var page = "http://localhost:8080/authors"
        axios.get(page)
        .then(
            ({data})=>{
              console.log("dane " + data);
              this.authors = data;
            }
        );
      }
    },
    mounted() {
      this.getAuthors()
    },
  }
</script>

<style>
   button {
    background: #009435;
    border: 1px solid #009435;
  }
  .small-container {
    max-width: 680px; 
  }
</style>
