import React, {useState} from 'react'

const ProductQuantity = () => {

    const [quantity, setQuantity] = useState('')
    const product = "Laptop"
    const price = 50000
    const totalAmt = price * quantity

    return (
        <>
            <div className='text-center'><h1>Product Quantity</h1></div>
            <div className="container text-center">
                <p>Product : {product}</p>
                <p>Price : {price}</p>

                <button onClick={()=> setQuantity(quantity-1)} className='me-3 btn btn-warning' >-</button>
                {quantity}
                <button onClick={()=> setQuantity(quantity+1)} className='me-3 btn btn-warning'>+</button>
                <p>Total Amount : {totalAmt}</p>
            </div>
        </>
    )
}

export default ProductQuantity
