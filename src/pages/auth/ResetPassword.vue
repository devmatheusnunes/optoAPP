<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="handlePasswordReset">
      <q-card class="q-card" bordered>
        <q-card-sections>
          <h3>Reset Password</h3>
        </q-card-sections>

        <q-card-sections>
          <q-input
            class="q-mx-md q-mb-lg"
            outlined
            rounded
            placeholder="Nova Senha"
            dense
            v-model="password"
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
            label="Salvar"
            type="submit"
          />
          <q-btn
            class="q-btn q-mb-lg"
            color="white"
            flat
            rounded
            dense
            text-color="red"
            label="Voltar"
            to="login"
          />
        </q-card-sections>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'PageResetPassword',

  setup () {
    const router = useRouter()
    const route = useRoute()
    const { ResetPassword } = useAuthUser()
    const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () => {
      await ResetPassword(token, password.value)
      router.push({ name: 'login' })
    }

    return {
      password,
      handlePasswordReset
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
