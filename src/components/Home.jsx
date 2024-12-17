import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Link,useNavigate } from 'react-router-dom'
export default function Home() {
  return (
    <div className='main'>
    <div className='nav-bar'>
      <div className='logo-img'>
        <img src="logo.jpeg" alt="logo fn" />
      </div>
      <div className='nav-items'>
        <h3 className='logo-head'>QuickBasket</h3>
       
        <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Recipe">Recipe</Link> 
      </div>
     </div>
     <div class="tagline">
  <h1 className='main-head-info'>Your One-Stop Shop for Premium Groceries</h1>
  {/* <p>Discover fresh, organic, and high-quality products tailored to your needs.</p> */}
</div>  
      <div className='bg-info-mp'>
      
        <img src="bg-with-g.jpg" alt="" />
        <div className="bg-text">
            <h1 >Experience the Pure Taste of Nature with Our Premium Organic Food Selection</h1>
            <p className='p-tag'> Our carefully curated selection ensures that you enjoy the best in health and taste, straight from the farm to your home.</p>
              <Stack direction="row" spacing={2} sx={{marginTop:"25px"}}>
          
              <Button variant="contained" endIcon={<SendIcon />} sx={{ backgroundColor:"black" }}>
                Check product
              </Button>
          </Stack>
          </div>

      </div>
      {/* <div className='card'>
        <div className='cards'>
          <a href="#button">See more Products ..</a>
          <img src="sq-1.png" alt="" />
        </div>
        <div className='cards'>
          <a href="#button">See more Products ..</a>
        </div>
        <div className='cards'>
          <a href="#button">See more Products ..</a>
        </div>
        <div className='cards'>
          <a href="#button">See more Products ..</a>
        </div>
        
      </div> */}
      <div className='card-main'>
      <div className='card'>
      <div className='cards'>
        <img src="sq-1.png" alt="" />
        
      </div>
      
      </div>
      <div className='card'>
      <div className='cards'>
        <img src="sq-2.png" alt="" />
      </div>
      </div>
      <div className='card'>
      <div className='cards'>
        <img src="sq-3.png" alt="" />
      </div>
      </div>
      <div className="card">
  <a href="#something" className="overlay">sjsj</a>
  <div className="cards">
    <img src="sq-4.png" alt="" />
  </div>
</div>

     </div>
     </div>
  
  )
}
