import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  let [products, setproducts] = useState([])
  let [category, setCategory] = useState('')
  let [categoryList, setCategoryList] = useState([])
  let [search, setsearch] = useState('')
  let [viewBtn, setviewBtn] = useState('')
  let [page, setPage] = useState(1)

  let perpage = 10

  // Fetch categories
  useEffect(() => {
    async function ProductsApis() {
      let { data } = await axios.get('https://dummyjson.com/products/category-list')
      setCategoryList(data)
    }
    ProductsApis()
  }, [])

  // Fetch products
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

      let pagenation = AllProducts.slice((page - 1) * perpage, page * perpage)
      setproducts(pagenation)
    }

    ListApis()
  }, [category, search, page])

  let totalPages = Math.ceil(viewBtn / perpage)

  return (
    <>
      <div className="container">

        {/* 🔥 Search + Category (SIDE BY SIDE) */}
        <div className="row g-3 my-3">
          
          {/* Search */}
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              onChange={(e) => {
                setsearch(e.target.value)
                setCategory('')
                setPage(1)
              }}
            />
          </div>

          {/* Category */}
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
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))
              }
            </select>
          </div>

        </div>

        {/* Products */}
        <div className="row g-4">
          {
            products.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card h-100 shadow-sm">

                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">
                      {item.description}
                    </p>
                    <h6 className="mt-auto text-primary">
                      ₹ {item.price}
                    </h6>
                  </div>

                </div>
              </div>
            ))
          }
        </div>

        {/* Pagination */}
        <div className="mt-4 text-center">
          {
            totalPages > 1 &&
            Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                className={`btn me-2 ${page === num ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Products