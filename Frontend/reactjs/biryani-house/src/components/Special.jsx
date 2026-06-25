import "./Special.css";

function PopularDishes() {
  const dishes = [
    {
      name: "Chicken Biryani",
      image: "https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg",
      price: "₹249",
      desc: "Aromatic basmati rice cooked with juicy chicken and traditional spices."
    },
    {
      name: "Mutton Biryani",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg",
      price: "₹349",
      desc: "Tender mutton pieces layered with flavorful rice and rich spices."
    },
    {
      name: "Veg Biryani",
      image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg",
      price: "₹199",
      desc: "Fresh vegetables and fragrant rice cooked to perfection."
    }
  ];

  return (
    <section className="popular-dishes">
      <h2>🍛 Special Dishes</h2>
      <p>Discover our customers' favorite biryanis.</p>

      <div className="dish-container">
        {dishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <span>{dish.price}</span>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDishes;