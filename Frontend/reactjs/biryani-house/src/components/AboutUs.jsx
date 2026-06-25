import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="../src/assets/biryani3.jpg"
            alt="Biryani"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h1 className="text-warning fw-bold mb-4">
            About Biryani House 🍛
          </h1>

          <p className="lead">
            Welcome to Biryani House, where tradition meets taste.
            We serve authentic biryanis prepared with premium basmati rice,
            fresh ingredients, and aromatic spices.
          </p>

          <p>
            Our chefs follow traditional recipes to bring you the rich flavors
            of India. From Chicken Biryani and Mutton Biryani to delicious
            desserts and refreshing beverages, every dish is crafted with care.
          </p>

          <p>
            We believe in quality, hygiene, and customer satisfaction.
            Whether you're dining with family or ordering online,
            Biryani House promises a memorable food experience.
          </p>

          <Link to="/Menu"> <button className="btn btn-warning text-white px-4 py-2">
            Explore Menu
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default About;