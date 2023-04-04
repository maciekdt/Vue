<template>
    <div id="books-form">
    <form  @submit.prevent="handleSubmit">
        <label>Imię i nazwisko</label>
        <input
            v-model="person.name"
            type="text"
            :class="{ 'has-error': submitting && invalidName }"
            @focus="clearStatus"
            @keypress="clearStatus"
        />
        <label>Email</label>
        <input
            v-model="person.email"
            type="text"
            :class="{ 'has-error': submitting && invalidEmail }"
            @focus="clearStatus"
        />
        <label>Telefon</label>
        <input
            v-model="person.phone"
            type="text"
            :class="{ 'has-error': submitting && invalidPhone }"
            @focus="clearStatus"
            @keypress="clearStatus"
        />
        <p v-if="error && submitting" class="error-message">
            Proszę wypełnić wskazane pola formularza
        </p>
        <p v-if="success" class="success-message">
            Dane poprawnie zapisano
        </p>
        <button>Dodaj kontakt</button>
    </form>
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