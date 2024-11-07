import axios from "axios";
import { useEffect, useState } from "react";
import "./ShowProduct.css";

const ShowProduct = () => {
    const[showProduct,setShowProduct] = useState([])
    const[Search,setSearch] = useState('')
    const[filterItem,setFilterItem] = useState([])
    const[category,setCategory] = useState([])
    const[selectCategory,setSelectCategory] = useState('All')


    const getData = async () =>{
        try{
            const data = await axios.get('https://api.escuelajs.co/api/v1/products')
            const res = data?.data.slice(0,36);
            setShowProduct(res)
            setFilterItem(res)


            const categories = ['All', ...new Set(res.map((item)=>item.category.name))];
            setCategory(categories);

        }
        catch(error){
            console.error(error, "error")
        }
        
    }

    const handleInput = (e) =>{
        handleInputSearch();
    }

    const handleInputSearch = ()=>{
        let filterProduct = showProduct.filter((item)=>item.category.name.toLowerCase().includes(Search.toLowerCase()));

        if(selectCategory !== 'All'){
            filterProduct  = filterItem.filter((item)=> item.category.name === selectCategory);
        }

            setFilterItem(filterProduct)
        
    }

    const handleCategory = (e) =>{
        setSelectCategory(e.target.value)
        handleInputSearch()

    }




    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        handleInputSearch()
    },[])


  return (
    <>
    <div className="Search-Wrapper">
            <div className="searchInput-Wrapper">
                <input type="text" onKeyDown={handleInput} value={Search} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter Product"/>
                {/* <select onChange={handleCategory}  value={selectCategory}>
                    {
                    category.map((item,index)=>{
                        <option key={index} value={item}>
                            {item}
                        </option> 
                    })
                    } 
                </select> */}
                <button onClick={handleInputSearch}>Search</button>
            </div>
        </div>
        
    <div className="pro-Wrapper">
           
            {
               filterItem.map((item,index)=>{
                const{title,price,description,images}= item
                return(
                        <div key={index}>
                            <div className="proCard-Wrapper">
                            <img src={images[1]}/>
                            <p>{title}</p>
                            <p>$ {price}</p>
                        </div>
                    </div>
                )
               }) 
            }
        </div>   
    
        </> 
        
    );
}

export default ShowProduct;
