<template>
  <q-page class="flex flex-center column">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <q-page-container class="flex justify-around full-width">
      <router-link
        v-link-style="{color: '#1976D2', fontSize: '1.3rem'}"
        class="flex flex-center red"
        to="/login"
      >
        Login
      </router-link>

      <router-link
        v-link-style="{color: '#1976D2', fontSize: '1.3rem'}"
        class="flex flex-center"
        to="/cadastre-se"
      >
        Cadastrar-se
      </router-link>
    </q-page-container>
  </q-page>
</template>

<script>

export default {
  name: 'Home',
};
</script>
