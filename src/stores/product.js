import { defineStore } from 'pinia'

export const useProductStore = defineStore({
	id: 'product',
	state: () => ({
		id: 0,
		title: '',
		description: '',
		price: 0,
		discountPercentage: 0,
		rating: 0,
		stock: 0,
		brand: '',
		category: '',
		thumbnail: '',
		images: [],
		loading: true,
		currentImageUrl: '',
	}),
	actions: {
		load(product) {
			// Merge product keys into state.
			Object.keys(product).forEach(key => {
				this[key] = product[key]
			});
		},
	},
})
