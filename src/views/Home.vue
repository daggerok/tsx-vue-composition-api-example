<template>
  <div>
    <h1>HelloWorld</h1>
  </div>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api';
  import HelloWorld from '@/components/HelloWorld';

  export default createComponent({
    name: 'Home',
    components: {
      HelloWorld,
    },
  });
</script>
