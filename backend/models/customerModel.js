import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		facilityName: {
			type: String,
			required: true,
		},
		facilityAddress: {
			type: String,
			required: true,
		},
		facilityCity: {
			type: String,
			required: true,
		},
		phoneNum: {
			type: String,
			required: true,
		},

		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("Customer", userSchema);

export default Customer;
