<template>
  <q-page class="flex flex-center">
    <form @submit.prevent="handleForgotPassword">
      <q-card class="q-card" bordered>
        <q-card-sections>
          <h3>Forgot Password</h3>
        </q-card-sections>

        <q-card-sections>
          <q-input
            class="q-mx-md q-mb-sm"
            outlined
            rounded
            placeholder="E-mail"
            dense
            v-model="email"
            type="email"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Por favor, informe seu e-email']"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
        </q-card-sections>

        <q-card-sections class="flex flex-center">
          <q-btn
            class="q-btn"
            rounded
            dense
            color="primary"
            label="Recuperar Senha"
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
    </form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useNotify from 'src/composables/UseNotify'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageForgotPassword',

  setup () {
    const { sendPasswordRestEmail } = useAuthUser()
    const { notifySuccess, notifyError } = useNotify()

    const email = ref('')

    const handleForgotPassword = async () => {
      try {
        await sendPasswordRestEmail(email.value)
        notifySuccess(`Seu acesso de alteração foi enviado para ${email.value}`)
      } catch (error) {
        notifyError('Não conseguimos enviar uma mensagem para seu e-mail, por favor tente novamente')
      }
    }

    return {
      email,
      handleForgotPassword
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
  width: 25vw;
}
.q-btn {
  width: 20vw;
}
</style>
