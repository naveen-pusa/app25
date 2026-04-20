import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const SingleProduct = () => {

  let { id } = useParams()
  let [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  if (!product) return <h2>Loading...</h2>  

  return (
    <div className="container mt-4">

      <Link to="/products" className="btn btn-secondary mb-3">
        ← Back
      </Link>

      <div className="card p-4">

        <img src={product.thumbnail} style={{ width: "300px" }} />

        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>₹ {product.price}</h4>

      </div>

    </div>
  )
}

export default SingleProduct