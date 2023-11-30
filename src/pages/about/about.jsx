import { Link } from "react-router-dom";


import React from "react";
import "./about.css";
import category1 from "../../assets/categories/kitchen.jpg"
import category2 from "../../assets/categories/garden.jpg"
import category3 from "../../assets/categories/pets.jpg"
import category4 from "../../assets/categories/clothing.webp"
import category5 from "../../assets/categories/kids.jpg"
import category6 from "../../assets/categories/office.jpg"
import category7 from "../../assets/categories/car.jpg"
import category8 from "../../assets/categories/seasonal.webp"
import category9 from "../../assets/categories/other.png"









export const About = () => {
  return (
  <>



  <h1>Categories</h1>

<div className="contain">


<Link to={"../kitchen"}>
 <div className="categorybox"> 
 <div><img className="img2" src={category1} /></div>
 <div className="catnme"> Kitchen </div>
 <button > Show more</button>
</div>
</Link>

<div className="categorybox"> 
 <div><img className="img2" src={category2} /></div>
 <div className="catnme"> Garden </div>
 <button> Show more</button>
</div>

<div className="categorybox"> 
 <div><img className="img2" src={category3} /></div>
 <div className="catnme"> Pets </div>
 <button> Show more</button>
</div>

<div className="categorybox"> 
 <div><img className="img2" src={category4} /></div>
 <div className="catnme"> Clothing </div>
 <button> Show more</button>
</div>

<div className="categorybox"> 
 <div><img className="img2" src={category5} /></div>
 <div className="catnme"> Kids </div>
 <button> Show more</button>
</div>

<div className="categorybox"> 
 <div><img className="img2" src={category6} /></div>
 <div className="catnme"> Office </div>
 <button> Show more</button>
</div>

<div className="categorybox"> 
 <div><img className="img2" src={category7} /></div>
 <div className="catnme"> Car </div>
 <button> Show more</button>
</div>

<div className="categorybox"> 
 <div><img className="img2" src={category8} /></div>
 <div className="catnme"> Seasonal </div>
 <button> Show more </button>
</div>

<div className="categorybox"> 
 <div><img className="img2" src={category9} /></div>
 <div className="catnme"> Other </div>
 <button> Show more </button>
</div>

</div>

  
  
  
  
  </>
  
  
  );
};
