import "./CustomerReviews.css";

function CustomerReviews() {
  return (
    <section className="reviews-section">
      <h2>What Our Customers Say ❤️</h2>
      <p>Read what our happy customers have to say about us.</p>

      <div className="reviews-container">
        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "The Chicken Biryani was absolutely delicious! The aroma and taste
            were authentic. Highly recommended."
          </p>
          <h4>- Rahul Sharma</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "Best biryani in town. Fresh ingredients, quick delivery, and
            excellent service."
          </p>
          <h4>- Priya Patil</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "Loved the Mutton Biryani! Perfectly cooked and full of flavor.
            Will definitely order again."
          </p>
          <h4>- Amit Verma</h4>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;