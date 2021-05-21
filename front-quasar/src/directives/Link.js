import Vue from 'vue';

Vue.directive('link-style', {
  bind(el, binding) {
    el.style.textDecoration = 'none';
    el.style.fontSize = binding.value.fontSize || '1rem';
    el.style.color = binding.value.color || '#3e3e3e';
  },
});
