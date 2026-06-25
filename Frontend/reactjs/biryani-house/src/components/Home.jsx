
import img1 from "../assets/biryani1.jpg"
import img2 from "../assets/biryani2.png"
import img3 from "../assets/biryani3.jpg"
import {Link} from 'react-router-dom'


function Home() {
  return (
    <>
        <div id="carouselExample" class="carousel slide mb-5">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="1"/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="2"/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section className="welcome-section">
  <div className="welcome-content">
    <h2>Welcome to Biryani House 🍛</h2>
    <p>
      At Biryani House, we serve authentic and flavorful biryanis prepared
      with premium basmati rice, fresh ingredients, and traditional spices.
      Every dish is crafted with passion to give you a royal dining experience.
    </p>

   <Link to="/Menu"> <button className="explore-btn">Explore Menu</button></Link>
  </div>
</section>
    </>
  );
}

export default Home;