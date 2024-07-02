// import React from 'react'

import Post from "./Post";

export default function Hero(props) {
  return (
    <>
<section className=" mt-5">
    <main className=" col-sm d-flex flex-column mb-3 flex-md-row justify-content-center align-item-center ">
    <section className="col-md-7 order-1 order-md-1">
   <div className="container">
   <img  src={props.img}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius:"10px"
            }}/>
   </div>
            <div className="container shadow-lg px-2 mb-5 bg-body-tertiary rounded  px-3 py-4">
           
            <h2 className="m-2 fw-bold">Title : <span>{props.title}</span></h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequunt ur, dolorum earum eius enim eveniet, fugiat impedit ipsa ipsum i sti nupti a omnis pariatur quae quidem quos epellat saepe sequi</p>
            <p className="">
                <h5>About The Nature : </h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequunt ur, dolorum earum eius enim eveniet, fugiat impedit ipsa ipsum i sti nupti a omnis pariatur quae quidem quos epellat saepe sequi
                </p>
             
                        <div className="d-flex justify-content-between">
                <button className="btn btn-success">Read More</button>
<div className="fw-bold">
    continue 
    <button className="btn btn-dark text-light ms-2">0</button>

</div>
            </div>
            </div>
            
            </section>
            <section className="col-md-5 order-1 order-md-1 rounded ">
                <div className="container">
                <img src="./pencil.webp" className="" alt="hero" 
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius:"10px"
                                  }}
                />
                <div className="container shadow-lg px-2 mb-5 bg-body-tertiary rounded  border border-black">
                <h3 className="my-3 fw-bold">My Name </h3> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequunt
                    ur, dolorum earum eius enim eveniet, fugiat impedit ipsa ipsum i
                    sti
                    nupti
                    a omnis pariatur quae quidem quos repellat saepe sequi
                    </p>
                </div>
                {/* saved card item  */}
                <div className="container shadow-lg px-2 mb-5 bg-body-tertiary">
  <h3>Populer Post</h3>

              <div 
                style={{
                    height: "300px",/* Height for showing only 4 items assuming each item height is 50px */
                    overflowY: "scroll",
                }}>

<Post/>
              </div>
      
   </div>
                 <div className="container shadow-lg px-2 mb-5 bg-body-tertiary rounded  border border-black">
                <h3 className="my-2 fw-bold">Tags</h3> 
                <div className="buttons d-flex flex-wrap gap-2 p-3">
                <button type="button" className="btn btn-primary">Lundon</button>
<button type="button" className="btn btn-secondary">USA</button>
<button type="button" className="btn btn-success">News</button>
<button type="button" className="btn btn-danger">Stocks</button>
<button type="button" className="btn btn-warning">Tech</button>
<button type="button" className="btn btn-info">History</button>
<button type="button" className="btn btn-light">Money</button>
<button type="button" className="btn btn-dark">Government</button>

                </div>
                </div>          
              </div>
   </section>
   </main>   
    </section>
    </>
 )
 }

