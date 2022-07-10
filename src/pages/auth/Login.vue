<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="handleLogin">
      <q-card class="q-card" bordered>
        <q-card-sections>
          <h3>LOGIN</h3>
        </q-card-sections>

        <q-card-sections>
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
            label="Entrar"
            type="submit"
          />
          <q-btn
            class="q-btn q-mb-lg"
            color="white"
            flat
            rounded
            dense
            text-color="black"
            label="Esqueci a Senha"
            to=""
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
  name: 'PageLogin',

  setup () {
    const router = useRouter()
    const { login } = useAuthUser()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: 'me' })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin
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
