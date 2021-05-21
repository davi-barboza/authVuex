<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="flex justify-between">
        <router-link class="link" to="/">
          Quasar App
        </router-link>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'DefaultLayout',
};
</script>

<style>
.link{
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
}
</style>
