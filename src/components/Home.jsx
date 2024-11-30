import { useLoaderData } from "react-router-dom";
import { useState } from "react"
import Coffee from "./Coffee";


const Home = () => {
    const coffees = useLoaderData()
  const [loadedCoffee,setLoadedCoffee] = useState(coffees)
    return (
        <div>
            <h1>all coffee: {loadedCoffee.length}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                {
                    loadedCoffee.map(coffee => <Coffee
                      loadedCoffee={loadedCoffee}
                      setLoadedCoffee={setLoadedCoffee}
                        coffee={coffee}
                        key={coffee._id}
                    ></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;