import React from 'react';


function ProductListing() {
    const [data,setData]=React.useState()
    const [page,setPage]=React.useState(1)
    // let page=1;
    function getData(){
        fetch(`http://localhost:3001/products?_page=${page}&_limit=5`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
            // console.log(a)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const prev=()=>{
        setPage(page-1)
        
    }
    const next=()=>{
        
        setPage(page+1)
    }
    React.useEffect(()=>{
        getData();
    },
    [page]
    )
    
    

    return (
        <>
            <button onClick={prev} disabled={page==0}>Prev</button>
            <label>{page}</label>
            <button onClick={next}>Next</button>
        </>
    )

}
export default ProductListing;