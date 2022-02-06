import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (

            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title}
                        height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>

                    <p className='lead'>{product.description}</p>

                    <h1 className='display-5'>{product.title}</h1>
                   
                    <h3 className='display-6 fw-bold my-4'>
                        Quantity 
                    </h3>
                    <input className=' me-2' type="number" value={parseInt(product.price)}/>
                    <button className='btn btn-outline-dark me-2'><i className='fa fa-plus'></i></button>
                    <button className='btn btn-outline-dark'><i className='fa fa-minus'></i></button>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>


    );

}

export default Product;
