<template>
  <q-page class="flex flex-center">
   <div class="q-pa-md" style="max-width: 400px">
     <h4>Login</h4>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >

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

      <router-link v-link-style="{ color: '#3e3e3e' }" to="/cadastre-se">
        Não possui um cadastro? Cadastre-se aqui!
      </router-link>

      <div class="flex justify-between">
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },

  methods: {
    onSubmit() {
      this.$api.post('auth/login', this.user)
        .then((res) => {
          this.$store.commit('DEFINIR_USUARIO_LOGADO', {
            token: res.data.access_token,
            user: res.data.user,
          });
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          // this.notifyNegative(error.response.data);
          console.log(error);
        });
    },

    notifyPositive() {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Login efetuado com sucesso',
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
