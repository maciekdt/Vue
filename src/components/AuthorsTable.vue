<template>
    <div id="authors-table">
        <h1>Autorzy</h1>
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
        <b-table
            id="my-table"
            :items="authorsSource"
            :per-page="perPage"
            :current-page="currentPage"
            small
        ></b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>
        <p class="mt-3">Strona: {{ currentPage }}</p>
        <router-link to="/authors-form">
            <button>New</button>
        </router-link>
    </div>
</template>

<script>
 export default {
    name: 'authors-table',
    data() {
        return {
            perPage: 3,
            currentPage: 1,
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
    computed: {
      rows() {
        return this.authorsSource.length
      }
    },
    mounted() {
      this.getAuthors()
    },
 }
</script>

<style scoped></style>