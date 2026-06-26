import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    async function fetchData(){
        const res = await axios.get('https://dummyjson.com/recipes')
        console.log(res.data.recipes)
        setRecipes(res.data.recipes)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
            <h1 className='ms-5 mt-5 mb-4'>Recipes</h1>
            <div className="container">
                <div className="row">
                    {recipes.map((rec, i) => (
                        <div className="col-12" key={i}>
                            <div className="card mb-3">
                                <img src={rec.image} class="card-img-top" alt="..." 
                                style={{width:"200px",height:"200px"}}
                                />
                                    <div className="card-body">
                                        <h5 class="card-title">{rec.name}</h5>

                                        {rec.mealType.map((mt,i)=>(<span key={i} className='badge rounded-pill text-bg-warning'>{mt}</span>))}
                                        <p>Rating : {rec.rating}</p>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <h2>ingredients</h2>
                                                {rec.ingredients.map((ing,index)=>(
                                                    <li key={index}>{ing}</li>
                                                ))}
                                            </div>
                                            <div className="col-6">
                                                <h2>instructions</h2>
                                                <ol>
                                                {
                                                    rec.instructions.map((inc,index)=>(
                                                        <li key={index}>{inc}</li>
                                                    ))
                                                }
                                                </ol>
                                            </div>

                                        </div>
                                    </div>

                                    </div>  
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Recipes