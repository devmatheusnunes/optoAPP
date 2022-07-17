<template>
  <q-page class="flex flex-center">
    <q-card class="q-card" bordered>
      <q-card-sections>
        <h3>Email Confirmation</h3>
      </q-card-sections>

      <q-card-sections>
        <p class="text-body1 text-center q-px-md">
          Obrigado por se registrar!
        </p>
        <p class="text-body1 text-center q-px-md">
          Por favor confirme seu email: <strong>{{ $route.query.email }}</strong>
        </p>
      </q-card-sections>

      <q-card-sections class="flex flex-center">
        <q-btn
          class="q-btn q-mb-lg"
          rounded
          dense
          color="primary"
          label="Voltar"
          to="/login"
        />
      </q-card-sections>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation',

  setup () {
    return {
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
