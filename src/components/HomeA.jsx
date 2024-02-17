import React from 'react';
import './styles/home.css'

const HomeA = ({obj}) => {
    return (
        <div>
            
            <div class="row row-cols-1 row-cols-md-3 g-4">
               
                {obj.map((item, index) => {
                    return (
                        <>
                            <div class="bg" key={index}>
                                <div class="col">
                                    <div class="card h-100">
                                        {/* <img src="..." class="card-img-top" alt="..."> */}
                                        <div class="card-body">
                                            <h5 class="card-title">{ item.tittle}</h5>
                                            <h3 class="card-tittle">{item.price}</h3><hr></hr>
                                            <p class="card-text">{item.user}</p>
                                            <p class="card-text">{item.storage}</p>
                                            <p class="card-text">{item.project}</p>
                                            <p class="card-text">{item.access}</p>
                                            <p class="card-text">{item.privateProjects}</p>
                                            <p class="card-text">{item.support}</p>
                                            <p class="card-text">{item.domain}</p>
                                            <p class="card-text">{item.status}</p>
                                        </div>
                                        <div class="btn">
                                            <button>Button</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
 
                        </>
                        
                    )
                })}
</div>

                
        </div>
    );
};

export default HomeA;