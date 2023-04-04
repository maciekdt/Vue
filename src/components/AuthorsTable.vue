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
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
 export default {
    name: 'authors-table',
    props: {
        authorsSource: Array,
    },
 }
</script>

<style scoped></style>