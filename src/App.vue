<template>
  <div id="app" class="small-container">
    <h1>Autorzy</h1>
    <authors-table/>
  </div>
</template>

<script>
  import AuthorsTable from '@/components/AuthorsTable.vue'
  //import AuthorsForm from '@/components/AuthorsForm.vue'

  export default {
    name: 'app',
    components: {
      AuthorsTable,
      //AuthorsForm,
    }
    
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
