<template>
 <div id="author-form">
    <form  @submit.prevent="handleSubmit">
        <label>Id</label>
        <input
            v-model="author.id"
            type="text"
            @focus="clearStatus"
            @keypress="clearStatus"
        />
        <label>Imię</label>
        <input
            v-model="author.firstName"
            type="text"
            :class="{ 'has-error': submitting && invalidName }"
            @focus="clearStatus"
        />
        <label>Nazwisko</label>
        <input
            v-model="author.latsName"
            type="text"
            :class="{ 'has-error': submitting && invalidLastName }"
            @focus="clearStatus"
        />
        <p v-if="error && submitting" class="error-message">
            Proszę wypełnić wskazane pola formularza
        </p>
        <p v-if="success" class="success-message">
            Dane poprawnie zapisano
        </p>
        <button>Dodaj autora</button>
    </form>
 </div>
</template>

<script>
    export default {
        name: 'authors-form',
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                author: {
                    id: '',
                    firstName: '',
                    latsName: '',
                },
            }
        },
        methods: {
            async handleSubmit() {
                this.submitting = true
                this.clearStatus()

                if (this.invalidName || this.invalidLastName) {
                    this.error = true
                    return
                }
                
        
                await fetch('http://localhost:8080/author', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.author)
                })
                location.reload()
            },

            clearStatus() {
                this.success = false
                this.error = false
            },
        },
        computed: {
                invalidName() {
                return this.author.firstName === ''
            },

                invalidLastName() {
                return this.author.latsName === ''
            },
        },
    }
</script>