// import React from 'react'

export default function Post() {
   const  posts=[
        {
            id:1,
            imgUrl:"./hero1.webp",
            title:"Nature",
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam."
            },
            {
                id:2,
                imgUrl:"./img2.webp",
                title:"Learning Piramid",
                body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                },
                {
                    id:3,
                    imgUrl:"./pencil.webp",
                    title:"Continue Learning",
                    body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                    },
                    {
                        id:4,
                        imgUrl:"./img1.webp",
                        title:"Social Media",
                        body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                        },
                        {
                            id:5,
                            imgUrl:"./img3.webp",
                            title:"Technology",
                            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                            },
                            {
                                id:6,
                                imgUrl:"./img4.webp",
                                title:"Collabration",
                                body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                                },
                                {
                                    id:7,
                                    imgUrl:"./scating.webp",
                                    title:"Game & Intrest",
                                    body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                                    },
                                    {
                                        id:8,
                                        imgUrl:"./home.webp",
                                        title:"Home & Loan",
                                        body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                                        },
                                        {
                                            id:9,
                                            imgUrl:"./img2.webp",
                                            title:"Learning Piramid",
                                            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                                            },
                                            {
                                                id:10,
                                                imgUrl:"./img1.webp",
                                                title:"Natural Beauti",
                                                body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
                                                }

    ];
  return (
    <>
    {
        posts.map((post) => {
            return (
               
                    <div className="shadow-lg px-2 mb-3" key={post.id} style={{display:"flex",
                    flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between",
                        gap:"20px",
                       
                                           }}>
                        <img className="card-img-top" src={post.imgUrl} alt="Card image cap"
                        style={
                            {
                                height: "70px",
                                width: "70px",
                                borderRadius:"10px"

            
                        }}
                        />
                        <div className="card-body " 
                       >
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            
                            </div>
                            </div>
    
          
            )
                
        })
    
    }
    </>
  )
}
