const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: true,
  },
  tasks: {
    type: [String],
    default: undefined
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(AutoIncrement);
ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);