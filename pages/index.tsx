import React from 'react'
import Sample from '../components/Sample'
import Carousel from '../components/Carousel'
import Product_categories from '../components/ProductCategory'

function index() {
  return (
    <div>
      <Carousel />
     { <Product_categories />}
      <Sample />{/* just for test */}
    </div>
  )
}

export default index