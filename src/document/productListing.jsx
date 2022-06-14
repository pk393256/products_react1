import React from 'react';


function ProductListing() {
    const [data,setData]=React.useState([])
    const [page,setPage]=React.useState(1)
    const [sortButtonClicked,setSortButtonClicked]=React.useState(false)
    const [filterButton,setFilterButton]=React.useState('')
    // let page=1;
    function getData(){
        let sort='';
        let filter='';
        
        if(sortButtonClicked){ sort='&_sort=price&_order=asc'}
        if(filterButton!=''){filter='&gender='+filterButton}
        
        fetch(`http://localhost:3001/products?_page=${page}&_limit=5${sort}${filter}`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
            // console.log(a)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const Sort=()=>{

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
    [page,sortButtonClicked,filterButton]
    )
    console.log(data)
    
    const Delete=(id)=>{
        fetch(`http://localhost:3001/products/${id}`,{
            method:'DELETE'
        })
        getData()
    }

    return (
        <>
        <br />
        <br />
        <form onChange={(es)=>{setFilterButton(''+es.target.value);console.log(es.target.value)}}>
            <select name='gender'>
                <option value=''>all gender</option>
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
            
        </form>
        
        <button onClick={()=>{setSortButtonClicked(!sortButtonClicked)}}>{sortButtonClicked ?'unsort':'Sort BY Price'}</button>
        <br />
        <br />
            {data.map((e)=>(
                <div key={e.id}>
                
                <img src={e.image} alt='image'/>
                <h3>Title:{e.title}</h3>
                <h3>Gender:{e.gender}</h3>
                <h3>Category:{e.category}</h3>
                <h3>Price:{e.price}</h3>
                <button onClick={()=>Delete(e.id)}>Delete</button><br/>

                </div>

    ))}

            <button onClick={prev} disabled={page==1}>Prev</button>
            <label>{page}</label>
            <button onClick={next}>Next</button>
        </>
    )

}
export default ProductListing;