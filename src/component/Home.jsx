import React from 'react';
import Products from './Products';



const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img className="card-img" src="driver.jpg" alt="background" height="550px"/>
                    <div className="card-body">
                        <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">Card title</h5>
                        <p className="card-text lead fs-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text lead fs-2"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
            </div>
          
        </div>
    );
}

export default Home;
