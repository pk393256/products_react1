import React from 'react';

function ProductForm() {
    const [data, setData] = React.useState({
        id:'',
        title:'',
        gender:'',
        price:'',
        category:'',
        image:''
    });
    const handlechange=(e)=>{
        const {name,value}=e.target;
        // console.log(name,'-',value)
        setData({...data,[name]:value})
    }
    const Submit=()=>{
        fetch('http://localhost:3001/products',{
            method: 'POST',
            body: JSON.stringify({
                id, title, gender, price, category, image
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    // console.log(data)
    
    const { id, title, gender, price, category, image } = data;

    return (
        <div>
            <form onSubmit={Submit}>
                <input type='text' placeholder='id' name='id' value={id} onChange={handlechange} />
                <input type='text' placeholder='title' name='title' value={title} onChange={handlechange} />
                <input type='text' placeholder='gender' name='gender' value={gender} onChange={handlechange} />
                <input type='text' placeholder='price' name='price' value={price} onChange={handlechange}/>
                <input type='text' placeholder='category' name='category' value={category} onChange={handlechange} />
                <input type='text' placeholder='image' name='image' value={image} onChange={handlechange} />
                <input type="submit" />
            </form>
        </div>
    )
}
export default ProductForm;