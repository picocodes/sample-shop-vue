<script setup>

import ArchiveProduct from './ArchiveProduct.vue';
import { useProductsStore } from '../stores/products';

// Create a vue app that fetches products from https://dummyjson.com/products
// and displays them in a list.
const store = useProductsStore();

fetch('https://dummyjson.com/products')
	.then( response => response.json() )
	.then( data => {
		store.products = data.products;
		store.total = data.total;
		store.loading = false;
	} );

</script>

<template>
	<div class="products container mt-3 mb-3">
		<div v-if="store.loading">Loading...</div>
		<div class="row g-2" v-else>
			<div class="col-md-3 col-sm-4 col-12 mb-4" v-for="product in store.products">
				<ArchiveProduct :product="product" />
			</div>
		</div>
	</div>
</template>
