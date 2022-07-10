<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="handleRegister">
      <q-card class="q-card" bordered>
        <q-card-sections>
          <h3>Register</h3>
        </q-card-sections>

        <q-card-sections>
          <q-input
            class="q-mx-md q-mb-sm"
            outlined
            rounded
            placeholder="Nome de usuário"
            dense
            v-model="form.name"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            class="q-mx-md q-mb-sm"
            outlined
            rounded
            placeholder="E-mail"
            dense
            v-model="form.email"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input
            class="q-mx-md q-mb-lg"
            outlined
            rounded
            placeholder="Senha"
            dense
            v-model="form.password"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-card-sections>

        <q-card-sections class="flex flex-center">
          <q-btn
            class="q-btn"
            rounded
            dense
            color="primary"
            label="Registrar"
            type="submit"
          />
          <q-btn
            class="q-btn q-mb-lg"
            flat
            rounded
            dense
            text-color="red"
            label="Voltar"
          />
        </q-card-sections>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
        console.log(register)
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }
})
</script>

<style scoped>
h3{
  font-size: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.q-card {
  max-width: 350px;
}
.q-btn {
  width: 20vw;
}
</style>
