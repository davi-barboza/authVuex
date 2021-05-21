<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente v-for="gerente in gerentes" :key="gerente.numero" :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '../components/Gerente';

export default {
  components: {
    Gerente,
  },
  data() {
    return {
      gerentes: [],
    };
  },

  mounted() {
    this.$api.get('gerentes')
      .then((res) => {
        this.gerentes = res.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
