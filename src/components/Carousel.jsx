import React from 'react'

const Carousel = () => {
  return (
     <>
        <div className='continer'>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/Soothing-nature-backgrounds-2.jpg" className="d-block w-100 " style={{ height: "550px" }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDpdESZq-3Wpj65-s4kbDNMSKFbW5eJUY2Q&s" className="d-block w-100 "style={{ height: "550px" }}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjekS3AUYYwpVw4DCWbyhDAjGZ8oi4qtTfIA&s" className="d-block w-100" style={{ height: "550px" }} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </div>
        </>
  )
}

export default Carousel
