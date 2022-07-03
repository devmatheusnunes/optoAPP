<template>
  <q-page class="flex flex-center">
    <q-card class="q-card" bordered>
      <q-card-sections>
        <h3>Forgot Password</h3>
      </q-card-sections>

      <q-card-sections>
        <q-input
          class="q-mx-md q-mb-lg"
          outlined
          rounded
          placeholder="E-mail"
          dense
          v-model="text"
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
          label="Entrar"
        />
        <q-btn
          class="q-btn q-mb-lg"
          color="white"
          flat
          rounded
          dense
          text-color="red"
          label="Voltar"
        />
      </q-card-sections>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageForgotPassword'
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
