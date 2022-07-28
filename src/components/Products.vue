<script>

import { RouterLink, RouterView } from 'vue-router';
import ArchiveProduct from './ArchiveProduct.vue';

// Create a vue app that fetches products from https://dummyjson.com/products
// and displays them in a list.

export default {
	components: {
		ArchiveProduct,
	},
	data() {
		return {
			products: [],
			loading: true,
			total: 0,
		}
	},

	// Fetch the products from the dummyjson.com API.
	async created() {
		const response = await fetch('https://dummyjson.com/products');
		const data = await response.json();
		this.products = data.products;
		this.total = data.total;
		this.loading = false;
	},

}

</script>

<template>
	<div class="products container mt-3 mb-3">
		<div v-if="loading">Loading...</div>
		<div class="row g-2" v-else>
			<div class="col-md-3 col-sm-4 col-12 mb-4" v-for="product in products">
				<ArchiveProduct :product="product" />
			</div>
		</div>
	</div>
</template>
