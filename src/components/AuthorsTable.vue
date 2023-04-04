<template>
    <div id="authors-table">
        <table>
        <thead>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="author in authorsSource" :key="author.id">
                    <td>{{ author.firstName }}</td>
                    <td>{{ author.latsName }}</td>
                    <td><button>Edit</button></td>
                    <td><button @click="remove(author.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
        <button>New</button>
    </div>
</template>

<script>
 export default {
    name: 'authors-table',
    data() {
        return {
            authorsSource: []
        };
    },
    methods: {
        async remove(authorId){
            await fetch('http://localhost:8080/author/' + authorId, {
                method: 'DELETE'
            })
            await this.getAuthors
        },

        async getAuthors() {
        try {
          const response = await fetch('http://localhost:8080/authors/')
          const data = await response.json()
          this.authorsSource = data
        } 
        catch (error) {
          console.error(error)
        }
      }
    },
    mounted() {
      this.getAuthors()
    },
 }
</script>

<style scoped></style>