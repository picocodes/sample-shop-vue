<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    props: ['product'],
}
</script>

<template>
	<div class="card">
		<img v-if="product.thumbnail" :src="product.thumbnail" class="thumb-image card-img-top" :alt="product.title">
		<div class="d-flex justify-content-between align-items-center p-2 position-absolute w-100">
			<span v-if="product.discountPercentage" class="percent">-{{ product.discountPercentage }}%</span>
			<span class="wishlist bg-light d-flex justify-content-center align-items-center p-1"><i class='bx bx-heart'></i></span>
		</div>

		<div class="card-body product-detail-container d-flex justify-content-between flex-column">
			<h5 class="card-title d-flex justify-content-between">
				<span class="text-muted">{{ product.title }}</span>
				<span class="text-dark small d-inline-block ms-1">${{ product.price }}</span>
			</h5>
			<p class="card-text form-text text-muted d-none">{{ product.description }}</p>
			<div class="mt-3">
				<RouterLink :to="'/products/' + product.id" class="btn btn-primary">View Details</RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	height: 100%;
}

.thumb-image {
	max-width: 100%;
	width: 100%;
	height: 200px;
	object-fit: cover;
}

.percent {
	padding: 5px;
	background-color: red;
	border-radius: 5px;
	color: #fff;
	font-size: 14px;
	height: 35px;
	width: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer
}

.wishlist {
	height: 40px;
	width: 40px;
	border-radius: 50%;
	cursor: pointer;
}
</style>