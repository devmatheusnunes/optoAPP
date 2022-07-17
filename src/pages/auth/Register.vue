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
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Por favor, informe seu e-email']"
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
            type="email"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Por favor, informe seu e-email']"
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
            to="/login"
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
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()
    const { notifySuccess, notifyError } = useNotify()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess('Cadastro efetuado com sucesso!')
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        notifyError('Houve algum erro, por favor tente novamente')
      }
    }

    return {
      form,
      isPwd: ref(true),
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
