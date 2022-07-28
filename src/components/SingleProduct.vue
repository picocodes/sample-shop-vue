<script setup>

import { useProductStore } from '../stores/product';

// Define product_id prop.
const props = defineProps({
  product_id: Number,
})

// Create a template that receives a product_id prop loads the product from https://dummyjson.com/products/:id
// and displays it.
const store = useProductStore();

store.id = props.product_id;
store.loading = true;
store.currentImageUrl = '';

fetch(`https://dummyjson.com/products/${store.id}`)
	.then( response => response.json() )
	.then( data => {
		store.load(data);
		store.loading = false;
		store.currentImageUrl = store.thumbnail;
	} );

function ratingClass(rating, index) {
	const _rating = parseFloat(rating);

	if ( _rating < index && _rating > index - 1 ) {
		return 'bxs-star-half';
	}

	if ( _rating < index ) {
		return 'bx-star';
	}

	return 'bxs-star';
}
</script>

<template>
	<div class="product">
		<div v-if="store.loading">Loading...</div>
		<div v-else>
			<div class="container mt-5 mb-5">
				<div class="card shadow border-0">
					<div class="row g-0">
						<div class="col-md-6 border-end">
							<div class="d-flex flex-column justify-content-center position-relative">
								<div class="main_image">
									<img :src="store.currentImageUrl" width="350">
								</div>
								<div class="thumbnail_images">
									<ul id="thumbnail">
										<li v-for="image in store.images">
											<img :src="image" @click="store.currentImageUrl = image" width="70">
										</li>
									</ul>
								</div>
								<span v-if="store.discountPercentage" class="percent position-absolute">
									-{{ store.discountPercentage }}%
								</span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="p-3 right-side">
								<div class="d-flex justify-content-between align-items-center">
									<h3>{{ store.title }}</h3>
									<span class="heart">
										<i class='bx bx-heart'></i>
									</span>
								</div>
								<div class="mt-2 pr-3 content">
									<p>{{ store.description }}</p>
								</div>
								<h3>${{ store.price }}</h3>
								<div class="ratings d-flex flex-row align-items-center">
									<div class="d-flex flex-row" :rating="store.rating">
										<i class='bx' :class="ratingClass( store.rating, 1)"></i>
										<i class='bx' :class="ratingClass( store.rating, 2)"></i>
										<i class='bx' :class="ratingClass( store.rating, 3)"></i>
										<i class='bx' :class="ratingClass( store.rating, 4)"></i>
										<i class='bx' :class="ratingClass( store.rating, 5)"></i>
									</div>
								</div>
								<p class="form-text">
									<span class="fw-bold">Brand</span>
									<span class="ms-2 text-muted">{{ store.brand }}</span>
								</p>
								<p class="form-text">
									<span class="fw-bold">Category</span>
									<span class="ms-2 text-muted">{{ store.category }}</span>
								</p>
								<p class="buttons d-flex flex-row gap-3">
									<button class="btn btn-outline-dark">Buy Now</button>
									<RouterLink to="/" class="btn btn-dark">View Products</RouterLink>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

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
	cursor: pointer;
	top: -10px;
	left: -10px;
}

.thumbnail_images ul {
	list-style: none;
	justify-content: center;
	display: flex;
	align-items: center;
	margin-top: 10px
}

.thumbnail_images ul li {
	margin: 5px;
	padding: 10px;
	border: 2px solid #eee;
	cursor: pointer;
	transition: all 0.5s
}

.thumbnail_images ul li:hover {
	border: 2px solid #000
}

.main_image {
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #eee;
	height: 400px;
	width: 100%;
	overflow: hidden
}

.heart {
	height: 29px;
	width: 29px;
	background-color: #eaeaea;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center
}

.content p {
	font-size: 12px
}

.ratings span {
	font-size: 14px;
	margin-left: 12px
}

.right-side {
	position: relative
}

.buttons .btn {
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
}
</style>