import React, { useState } from "react";
import { Navbar, ProductCard, SearchBar } from "./Components";
import config from "./Config/config";

const App = () => {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFood = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${config?.app_Id}&app_key=${config?.api_Key}`
      );
      const data = await res.json();
      setAllFood(data.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <ProductCard allFood={allFood} loading={loading} />
    </div>
  );
};

export default App;
