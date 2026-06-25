import "./Menu.css";

function Menu() {
  const menuItems = [
    {
      name: "Chicken Biryani",
      price: "₹249",
      image: "../src/assets/chickenBiryani.jpg",
      desc: "Delicious chicken biryani with aromatic basmati rice."
    },
    {
      name: "Mutton Biryani",
      price: "₹349",
      image: "../src/assets/muttonBiryani.jpg",
      desc: "Tender mutton cooked with authentic spices."
    },
    {
      name: "Veg Biryani",
      price: "₹199",
      image: "../src/assets/biryani3.jpg",
      desc: "Fresh vegetables and flavorful rice."
    },
    {
      name: "Paneer Biryani",
      price: "₹229",
      image: "../src/assets/paneerBiryani.jpg",
      desc: "Soft paneer cubes blended with rich spices."
    },
    {
      name: "Kashmiri Biryani",
      price: "₹279",
      image: "../src/assets/kashmiriBiryani.webp",
      desc: "Flavorful biryani made with rice, spices, and dry fruits."
    },
    {
      name: "Hyderabadi Biryani",
      price: "₹250",
      image: "../src/assets/hydBiryani.avif",
      desc: "Spicy and aromatic biryani made with basmati rice and marinated meat."
    },
    {
      name: "Egg Biryani",
      price: "₹290",
      image: "../src/assets/eggBiryani.jpg",
      desc: "Flavorful rice dish cooked with boiled eggs and aromatic spices."
    },
    {
      name: "Matar Biryani",
      price: "₹199",
      image: "../src/assets/matarBiryani.jpg",
      desc: "Simple and tasty biryani made with green peas and fragrant rice."
    },
    {
      name: "Fish Biryani",
      price: "₹350",
      image: "../src/assets/fishBiryani.jpg",
      desc: "Delicious biryani prepared with fish, rice, and flavorful spices."
    }
  ];
  const sweetDishes = [
  {
    name: "Gulab Jamun",
    price: "₹99",
    image: "https://pipingpotcurry.com/wp-content/uploads/2023/12/Gulab-Jamun-Recipe-Piping-Pot-Curry-500x500.jpg",
    desc: "Soft and juicy traditional Indian sweet."
  },
  {
    name: "Rasgulla",
    price: "₹89",
    image: "https://www.kuchpakrahahai.in/wp-content/uploads/2020/05/Rasgulla-2BRecipe-2Bin-2BPressure-2BCooker-e1626148996679-360x360.jpg",
    desc: "Delicious spongy Bengali sweet."
  },
  {
    name: "Rasmalai",
    price: "₹119",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s",
    desc: "Soft cottage cheese dumplings in creamy milk."
  }
];
const softDrinks = [
  {
    name: "Coca-Cola",
    price: "₹40",
    image: "https://www.chennaigrocers.com/cdn/shop/products/COCACOLAORIGINAL300ML.jpg?v=1606801061&width=2250",
    desc: "Refreshing chilled Coca-Cola."
  },
  {
    name: "Sprite",
    price: "₹40",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Sprite_lemon_lime_1.jpg",
    desc: "Lemon-lime flavored soft drink."
  },
  {
    name: "Fanta",
    price: "₹40",
    image: "https://tiimg.tistatic.com/fp/1/007/650/mouth-watering-caffeine-free-and-natural-flavors-fanta-orange-cold-drink--059.jpg",
    desc: "Refreshing orange-flavored drink."
  }
];
const shakes = [
  {
    name: "Chocolate Shake",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278",
    desc: "Rich and creamy chocolate milkshake."
  },
  {
    name: "Mango Shake",
    price: "₹139",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
    desc: "Fresh mango blended with chilled milk."
  },
  {
    name: "Oreo Shake",
    price: "₹159",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    desc: "Creamy Oreo shake topped with cookie crumbs."
  }
];



  return (
    <>
    <section className="menu">
      <h1>🍛 Our Menu</h1>
      <p>Discover our delicious dishes made with love.</p>

      <div className="menu-container">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span>{item.price}</span>
              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <h2 className="menu-title">🍰 Sweet Dishes</h2>
<div className="menu-container">
  {sweetDishes.map((item, index) => (
    <div className="menu-card" key={index}>
      <img src={item.image} alt={item.name} />
      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span>{item.price}</span>
      </div>
    </div>
  ))}
</div>

<h2 className="menu-title">🥤 Soft Drinks</h2>
<div className="menu-container">
  {softDrinks.map((item, index) => (
    <div className="menu-card" key={index}>
      <img src={item.image} alt={item.name} />
      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span>{item.price}</span>
      </div>
    </div>
  ))}
</div>

<h2 className="menu-title">🥛 Shakes</h2>
<div className="menu-container">
  {shakes.map((item, index) => (
    <div className="menu-card" key={index}>
      <img src={item.image} alt={item.name} />
      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span>{item.price}</span>
      </div>
    </div>
  ))}
</div>
</>
  );
}

export default Menu;