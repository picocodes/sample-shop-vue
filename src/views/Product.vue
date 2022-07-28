<script setup>
import SingleProduct from '@/components/SingleProduct.vue';
</script>

<template>
  <main>
    <SingleProduct :product_id="this.$route.params.id"/>
  </main>
</template>
