<template>
  <div>
    <h1>This is an about page</h1>
    <HelloWorld msg='yay!'/>
  </div>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api';
  import HelloWorld from '@/components/HelloWorld';

  export default createComponent({
    name: 'About',
    components: {
      HelloWorld,
    },
  });

</script>
