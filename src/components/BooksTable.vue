<template>
    <div id="books-table">
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Tytuł</th>
                <th>Autorzy</th>
                <th>Liczba stron</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="book in booksSource" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ stringifyAuthors(book.authors) }}</td>
                    <td>{{ book.pages }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
 export default {
    name: 'books-table',
    props: {
        booksSource: Array,
    },
    methods: {
        stringifyAuthors(authors) {
            return authors.map(x => x.firstName+' '+x.latsName).join(",")
        }
    }
 }
</script>

<style scoped></style>