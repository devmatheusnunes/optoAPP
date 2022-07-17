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
            placeholder="Senha"
            dense
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            lazy-rules
            :rules="[val => (val && val.length >= 6) || 'Sua senha deve conter pelo menos de 6 caracteres']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
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
import useNotify from 'src/composables/UseNotify'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'PageResetPassword',

  setup () {
    const router = useRouter()
    const route = useRoute()
    const { ResetPassword } = useAuthUser()
    const { notifySuccess, notifyError } = useNotify()
    const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () => {
      try {
        await ResetPassword(token, password.value)
        notifySuccess('Senha alterada com sucesso!')
        router.push({ name: 'login' })
      } catch (error) {
        notifyError('Não conseguimos alterar a sua senha, por favor tente novamente')
      }
    }

    return {
      password,
      isPwd: ref(true),
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
