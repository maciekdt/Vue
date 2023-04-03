<template>
  <div id="app" class="small-container">
    <h1>Znajomi</h1>
    
    <person-form @add:person="addPerson"/>
    <persons-table :personsSource="persons"/>
  </div>
</template>

<script>
  import PersonsTable from '@/components/PersonsTable.vue'
  import PersonForm from '@/components/PersonForm.vue'

  export default {
    name: 'app',
    components: {
      PersonsTable,
      PersonForm,
    },
    data() {
      return {
        persons: []
      }
    },
    methods: {
      addPerson(person) {
        this.persons = [...this.persons, person] // tu nowo dodany pracownik nie otrzymuje unikalnego id
      },
      async getPersons() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json()
          this.persons = data
        } catch (error) {
          console.error(error)
        }
      },
    },
    mounted() {
      this.getPersons()
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
