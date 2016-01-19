'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

import shortid from 'shortid';
import Category from '../category/category.model';
import Brand from '../brand/brand.model';

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    'default': shortid.generate
  },
  price: {
    type: Number,
    required: true
  },
  sale_price: Number,
  status: {
    type: String,
    required: true
  },
  category: [{type: Schema.Types.ObjectId, ref: 'Category'}],
  stock_level: {
    type: Number,
    required: true
  },
  stock_status: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requires_shipping: {
    type: String,
    required: true
  },
  weight: Number,
  height: Number,
  width: Number,
  depth: Number,
  brand: {type: Schema.Types.ObjectId, ref: 'Brand'},
  tax_band: {
    type: String,
    required: true
  },
  catalog_only: {
    type: String,
    required: true
  }
});

export default mongoose.model('Product', ProductSchema);
