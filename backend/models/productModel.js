import mongoose from "mongoose";

const warehouseSchema = mongoose.Schema({
	name: { type: String, required: true },
});

const productSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
			unique: true,
		},
		warehouse: [warehouseSchema],

		totQuantity: {
			type: Number,
			required: true,
			default: 0,
		},
		category: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("Product", productSchema);

export default Product;
