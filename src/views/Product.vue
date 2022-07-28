<script setup>
import SingleProduct from '@/components/SingleProduct.vue';
</script>

<template>
  <main>
    <SingleProduct :product_id="parseFloat(this.$route.params.id)"/>
  </main>
</template>
