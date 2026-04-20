import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  let [products, setproducts] = useState([])
  let [category, setCategory] = useState('')
  let [categoryList, setCategoryList] = useState([])
  let [search, setsearch] = useState('')
  let [viewBtn, setviewBtn] = useState(0)
  let [page, setPage] = useState(1)

  let perpage = 10

  useEffect(() => {
    async function ProductsApis() {
      let { data } = await axios.get('https://dummyjson.com/products/category-list')
      setCategoryList(data)
    }
    ProductsApis()
  }, [])

  useEffect(() => {
    async function ListApis() {
      let url;

      if (category) {
        url = `https://dummyjson.com/products/category/${category}`
      } else if (search) {
        url = `https://dummyjson.com/products/search?q=${search}`
      } else {
        url = `https://dummyjson.com/products?limit=200`
      }

      let { data } = await axios.get(url)

      let AllProducts = data.products || []
      setviewBtn(AllProducts.length)

      let pagination = AllProducts.slice((page - 1) * perpage, page * perpage)
      setproducts(pagination)
    }

    ListApis()
  }, [category, search, page])

  let totalPages = Math.ceil(viewBtn / perpage)

  return (
    <div className="container">

      <div className="row g-3 my-3">

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => {
              setsearch(e.target.value)
              setCategory('')
              setPage(1)
            }}
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-control"
            onChange={(e) => {
              setCategory(e.target.value)
              setsearch('')
              setPage(1)
            }}
          >
            <option value="">All Categories</option>
            {
              categoryList.map((item) => (
                <option key={item}>{item}</option>
              ))
            }
          </select>
        </div>

      </div>

      <div className="row g-4">
        {
          products.map((item) => (
            <div className="col-md-3" key={item.id}>

              {/* ✅ CLICKABLE */}
              <Link 
                to={`/products/${item.id}`} 
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card h-100 shadow-sm">

                  <img src={item.thumbnail} className="card-img-top" />

                  <div className="card-body">
                    <h5>{item.title}</h5>
                    <p>₹ {item.price}</p>
                  </div>

                </div>
              </Link>

            </div>
          ))
        }
      </div>

      <div className="mt-4 text-center">
        {
          Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className="btn btn-outline-primary m-1"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))
        }
      </div>

    </div>
  )
}

export default Products