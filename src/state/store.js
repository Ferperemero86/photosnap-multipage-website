const store = {
	planPrices: {
		monthly: [
			{
				name: "basic",
				price: "$19.00"
			},
			{
				name: "pro",
				price: "$39.00"
			},
			{
				name: "business",
				price: "$99.00"
			}
		],
		yearly: [
			{
				name: "basic",
				price: "$190.00"
			},
			{
				name: "pro",
				price: "$390.00"
			},
			{
				name: "business",
				price: "$990.00"
			}
		]
	},
	planSelected: {
		period: "monthly",
		price: "$19.00"
	}
};

export default store;
