<template>
  <q-page class="padding">
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">
          Add Client
        </p>
      </div>
      <q-form class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md" @submit.prevent="handleSubmit">

        <q-input
          label="Name"
          v-model="form.name"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Por favor, digite o nome do cliente']"
        />
        <q-input
          label="Sex"
          v-model="form.sex"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Por favor, digite o sexo do cliente']"
        />
        <q-input
          label="Phone"
          v-model="form.phone"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Por favor, digite o telefone do cliente']"
        />

        <q-btn
          :label="isUpdate ? 'Atualizar' : 'Salvar'"
          color="primary"
          class="full-width"
          rounded
          dense
          type="submit"
        />
        <q-btn
          label="Cancelar"
          color="red"
          class="full-width"
          rounded
          dense
          flat
          :to="{ name: 'list-client' }"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageAddClient',

  setup () {
    const table = 'client'
    const router = useRouter()
    const route = useRoute()
    const { post, getById, update } = useApi()
    const { notifyError, notifySuccess } = useNotify()

    const isUpdate = computed(() => route.params.id)

    let client = {}
    const form = ref({
      name: '',
      sex: '',
      phone: ''
    })

    onMounted(() => {
      if (isUpdate.value) {
        handleGetClient(isUpdate.value)
      }
    })

    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, form.value)
          notifySuccess('Cliente Atualizado com sucesso!')
        } else {
          await post(table, form.value)
          notifySuccess('Cliente cadastrado com sucesso!')
        }
        router.push({ name: 'list-client' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    const handleGetClient = async (id) => {
      try {
        client = await getById(table, id)
        form.value = client
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleSubmit,
      isUpdate
    }
  }
})
</script>
