import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Customer",
	},
	status: {
		type: String,
		required: true,
		default: "submitted",
	},

	orderItems: [
		{
			name: { type: String, required: true },
			quantity: { type: Number, required: true },
			warehouse: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: "Warehouse",
			},
			product: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: "Product",
			},
		},
	],
});

const Order = mongoose.model("Order", orderSchema);
