import mongoose from "mongoose";

const warehouseSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	pickupAddress: {
		address: { type: String, required: true },
		city: { type: String, required: true },
		postalCode: { type: String, required: true },
	},
});

const Warehouse = mongoose.model("Warehouse", warehouseSchema);

export default Warehouse;
