import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
    },
    description: {
      type: String,
      required: [true, "Please Enter Product Description"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter Product Stock"],
      maxLength: [5, "Stock cannot exceed 5 characters"],
      default: 1,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
