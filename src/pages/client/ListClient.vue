<template>
  <q-page padding>
    <div class="row">
      <q-table :rows="clients" :columns="columns" row-key="id" class="col-12" :loading="loading">
        <template v-slot:top>
          <span class="text-h6">
            Lista de Clientes
          </span>
          <q-space />
          <q-btn label="Adicionar Cliente" color="primary" :to="{ name: 'form-client' }" />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon="mdi-pencil-outline" color="info" dense size="sm" @click="handleEdit(props.row)">
              <q-tooltip>
                Editar
              </q-tooltip>
            </q-btn>
            <q-btn icon="mdi-delete-outline" color="negative" dense size="sm" @click="handleRemoveClient(props.row)">
              <q-tooltip>
                Deletar
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  { name: 'id', align: 'left', label: 'Código', field: 'id', sortable: true },
  { name: 'name', align: 'left', label: 'Cliente', field: 'name', sortable: true },
  { name: 'sex', align: 'left', label: 'Sexo', field: 'sex', sortable: true },
  { name: 'phone', align: 'left', label: 'Telefone', field: 'phone', sortable: true },
  { name: 'created_at', align: 'left', label: 'Data de Criação', field: 'created_at', sortable: true },
  { name: 'actions', align: 'right', label: 'Ações', field: 'actions', sortable: true }
]

import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageClientList',

  setup () {
    const clients = ref([])
    const loading = ref(true)
    const router = useRouter()
    const $q = useQuasar()
    const table = 'client'
    const { list, remove } = useApi()
    const { notifyError, notifySuccess } = useNotify()

    const handleListClients = async () => {
      try {
        loading.value = true
        clients.value = await list(table)
        loading.value = false
      } catch (error) {
        notifyError(error.message)
      }
    }

    const handleEdit = (client) => {
      router.push({ name: 'form-client', params: { id: client.id } })
    }

    const handleRemoveClient = async (client) => {
      try {
        $q.dialog({
          title: 'Você está tentando deletar um cliente',
          message: `Deseja reamente remover o(a) cliente ${client.name}`,
          cancel: true,
          persistent: true
        }).onOk(async () => {
          await remove(table, client.id)
          notifySuccess('Cliente removido com sucesso!')
          handleListClients()
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    onMounted(() => {
      handleListClients()
    })

    return {
      columns,
      clients,
      loading,
      handleEdit,
      handleRemoveClient
    }
  }
})
</script>
