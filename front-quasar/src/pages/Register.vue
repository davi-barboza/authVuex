<template>
  <q-page class="flex flex-center">
   <div class="q-pa-md" style="max-width: 400px">
     <h4>Registrar usuário</h4>
    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="user.name"
        label="Nome *"
        hint="Nome e sobrenome"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Campo obrigatório',
          val => val && val.includes(' ') || 'Digite seu sobrenome',
        ]"
      />

      <q-input
        filled
        type="email"
        v-model="user.email"
        label="E-mail *"
        lazy-rules
        :rules="[
          val => val && val.includes('@') || 'Digite um e-mail válido',
          val => val && val.length > 0 || 'Campo obrigatório'
        ]"
      />

      <q-input
        filled
        type="password"
        v-model="user.password"
        label="Senha *"
        lazy-rules
        maxlength="6"
        :rules="[
          val => val && val.length > 0 || 'Campo obrigatório',
          val => val && val.length === 6 || 'A senha precisa ter 6 digitos',
        ]"
      />

      <q-toggle v-model="user.accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

      <router-link class="flex flex-center" to="/login">
        Já sou cadastrado!
      </router-link>
    </q-form>

  </div>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        accept: false,
      },
    };
  },

  methods: {
    onSubmit() {
      if (!this.user.accept) {
        this.notifyNegative('Você precisa aceitar os termos');
      } else {
        this.$api.post('auth/register', this.user)
          .then(() => {
            this.notifyPositive();
            this.$router.push('/login');
          })
          .catch((error) => {
            this.notifyNegative(error.response.data.message);
          });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },

    notifyPositive() {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Usuário registrado com sucesso',
        timeout: 500,
      });
    },

    notifyNegative(msg) {
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: msg,
        timeout: 500,
      });
    },
  },
};
</script>
