<template>
  <div id="app" class="small-container">
    <h1>Autorzy</h1>
    
    <!-- <person-form @add:person="addPerson"/> -->
    <authors-table :authorsSource="authors"/>
  </div>
</template>

<script>
  import AuthorsTable from '@/components/AuthorsTable.vue'
  // import PersonForm from '@/components/PersonForm.vue'
  export default {
    name: 'app',
    components: {
      AuthorsTable,
      // PersonForm,
    },
    data() {
      return {
        authors: []
      }
    },
    mounted() {
      this.getAuthors()
    },
    methods: {
      // addPerson(person) {
      //   this.persons = [...this.persons, person] // tu nowo dodany pracownik nie otrzymuje unikalnego id
      // },
      async getAuthors() {
        try {
          const response = await fetch('http://localhost:8080/authors')
          console.log("dane " + data);
          const data = await response.json()
          this.authors = data
        } catch (error) {
          console.error(error)
        }
      },
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
