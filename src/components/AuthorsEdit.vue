<template>
 <div id="author-edit-form">
    <form  @submit.prevent="handleSubmit">
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
        name: 'authors-edit-form',
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                author: {
                    firstName: '',
                    latsName: '',
                },
            }
        },
        methods: {
            //async setAuthor() {
            //    let id = this.$route.params.id
            //    const response = await fetch('http://localhost:8080/author/' + id)
            //    const data = await response.json()
            //    this.author = data
            //},

            async handleSubmit() {
                //let id = this.$route.params.id
                this.submitting = true
                this.clearStatus()

                if (this.invalidName || this.invalidLastName) {
                    this.error = true
                    return
                }
                
                //await fetch('http://localhost:8080/author/' + id, {
                await fetch('http://localhost:8080/author', {
                    method: 'PUT',
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