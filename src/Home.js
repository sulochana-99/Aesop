import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
const imageUrls = [
  'https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg',
  'https://www.aesop.com/u1nb1km7t5q7/42rFCFYAbY2eFFaqO5M7pf/b6964b6c5bb2c22a36f26b146132c9d3/Aesop_Harbour_City_II_Hero_Bleed_Desktop_2880x1620px.jpg',
  'https://www.aesop.com/u1nb1km7t5q7/3qMKbyDUTGRWyBlMLWxsRu/24c4cbb32427080bbb48dca6d5161962/Aesop_Fashion_Walk_II_Hero_Bleed_Desktop_2880x1620px.jpg',
];
/*const imageUrls = [
  'https://www.aesop.com/u1nb1km7t5q7/3MBwyQNwPZDKq8hxzzLh1Q/7905dac84e46772f112be054e7e97404/Aesop_B_Triple_C_2024_Web_Homepage_Primary_1_Full_Bleed_Desktop_2880x1044px.jpg',
  'https://www.aesop.com/u1nb1km7t5q7/4XCMY8ZujIXt46JzHuA8k7/a0eefda38b29a4cc18060cdf5b6836fa/Aesop_Lucent_2023_Web_Homepage_Primary_50-50_Desktop_1536x950px.jpg',
  'https://www.aesop.com/u1nb1km7t5q7/1Ehomdegy2vB6ERUwELzqz/a0617ec70337d07ef3c5250afb389900/Aesop_Festive_Sleeve_Asia_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg',
];*/

function Home() {


  return (
    <div>
        <div>
         <center>
        
            <li style={{listStyle:"none", backgroundColor:"grey",color:'white'}}>Trained Aesop consultants are available to provide bespoke skin care advice.Book a complimentary video consultation</li>
            <li style={{listStyle:"none", backgroundColor:"black", color:"white"}}>Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on orders over $400.</li>
        
         </center>
        </div>
        <nav>
  <ul>
    <li><a href="#">Skin Care</a></li>
    <li><a href="#">Body & Hand</a></li>
    <li><a href="#">Hair</a></li>
    <li><a href="#">Fragrance</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Kits & Travel</a></li>
    <li><a href="#">Gifts</a></li>
    <li><a href="#">Read</a></li>
    <li><a href="#">Stores</a></li>
    <li><a href="#">Facial Appointments</a></li>
    <li><a href="#">Search</a></li>
    <li><a href="#">Login</a></li>
    <li><a href="#">Cart</a></li>
  </ul>
</nav>

<Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.aesop.com/u1nb1km7t5q7/3MBwyQNwPZDKq8hxzzLh1Q/7905dac84e46772f112be054e7e97404/Aesop_B_Triple_C_2024_Web_Homepage_Primary_1_Full_Bleed_Desktop_2880x1044px.jpg"
          alt="First slide" style={{height:"500px"}}
        />
        <Carousel.Caption>
          <center>
          <h3>B Triple C Facial Balancing Gel</h3>
          <p>Potent and peerless</p>
          <p>
            Rich in Vitamins B and C, this lightly hydrating gel with a honey-like texture, replenishes, softens, and balances the skin.
          </p>
          </center>
        </Carousel.Caption>
        
        
      </Carousel.Item>

      <Carousel.Item style={{ backgroundColor: '#f0f0f0' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
          <div className="text-center">
            <h3>B Triple C Facial Balancing Gel</h3>
            <p>
              Potent and peerless. Rich in Vitamins B and C, this lightly hydrating
              gel with a honey-like texture replenishes, softens, and balances the
              skin.
            </p>
          </div>
          <div className="w-50" >
          <img
          className="d-block w-100"  style={{height:"500px"}}
          src="https://www.aesop.com/u1nb1km7t5q7/1Ehomdegy2vB6ERUwELzqz/a0617ec70337d07ef3c5250afb389900/Aesop_Festive_Sleeve_Asia_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
          alt="Second slide"
        />
          </div>
        </div>
       
      </Carousel.Item>
     
      <Carousel.Item style={{ backgroundColor: '#f0f0f0' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
          <div className="text-center">
            <h3>B Triple C Facial Balancing Gel</h3>
            <p>
              Potent and peerless. Rich in Vitamins B and C, this lightly hydrating
              gel with a honey-like texture replenishes, softens, and balances the
              skin.
            </p>
          </div>
          <div className="w-50" >
          <img
          className="d-block w-100"  style={{height:"500px"}}
          src="https://www.aesop.com/u1nb1km7t5q7/4XCMY8ZujIXt46JzHuA8k7/a0eefda38b29a4cc18060cdf5b6836fa/Aesop_Lucent_2023_Web_Homepage_Primary_50-50_Desktop_1536x950px.jpg"
          alt="Third slide"
        />
          </div>
        </div>
        
      </Carousel.Item>
      
    </Carousel>
     
      <div class="sliders" > 
  <div style={{width:"400px",marginRight:"100px",  paddingLeft:"30px"}}>
    <p>Skin Care+</p>
    <p style={{fontSize:"25px"}}>Intensive formulations for complex skin</p>

<p>Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.</p>
     
  </div>
  <div>
    <img src="https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png" alt="Image 1" />
  </div>
  <div>
    <img src="https://www.aesop.com/u1nb1km7t5q7/11SkMKAwt3wKeDg1Rg63wn/0f9e8e78c8a21a7655a3d8f5c42fbdf4/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png" alt="Image 2" />
  </div>
  <div>
    <img src="https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png" alt="Image 3" />
  </div>
  <div>
    <img src="https://www.aesop.com/u1nb1km7t5q7/11SkMKAwt3wKeDg1Rg63wn/0f9e8e78c8a21a7655a3d8f5c42fbdf4/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png" alt="Image 4" />
  </div>
</div>
      <div className='dryskin-section' style={{paddingBottom:"200px"}}>
        <div className='dryskin-image'>
          <img  style= {{width:"100%"}}src="https://www.aesop.com/u1nb1km7t5q7/6P8C5RW1wmFCchDrWBshjp/b1cc91da2597bb9a613dac7a1b5a1636/Aesop_A_Guide_to_Caring_for_Dry_Skin_Web_Secondary_Mid_05_Desktop_2560x1440px.jpg"/>
        </div>
        <div className='dryskin-description'>
          <p>The Athenaeum</p>
            
<p style={{fontSize:"25px"}}>A guide to caring for dry skin</p>
<p>Exploring the causes behind parched skin and formulations to restore hydration.</p>
<a href='#'>Read More</a>
        </div>
      </div>
      <div className='online-section'>
        <div className='online-description'>
          <p> Online only</p>
          <p style={{fontSize:"25px"}}>Familiar fragrances, doubled in volume</p>
       
       <p> For those who feel that 50 millilitres just fly by too quickly, three of our unorthodox Eaux de Parfum—Tacit, Hwyl and Marrakech Intense—are now available, exclusively online, in larger 100mL bottles.</p>
        <a href='#'>Discover Now</a>
        </div>
        <div className='online-image'>
          <img  style={{width:"100%"}} src="https://www.aesop.com/u1nb1km7t5q7/eyd7TwhtFoPcMMtmiYUYV/fcba6f1a9329b7cd9721e9b2c04feb71/Aesop_A_Guide_to_Fragrance_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg"/>

        </div>
      </div>
      <div className='section-pairings' style={{paddingBottom:"200px"}}>
        <div className='pairing-image'>
          <img  src="https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg"/>
        </div>
        <div className='pairing-description'>
          <p style={{fontSize:"25px"}}>
          Efficacious pairings</p>
            <p>Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.</p>
          <a href="#">Browse Skin Care Bundles</a>
        </div>
      </div>
      
      <div class="sliders" > 
  <div style={{width:"400px",marginRight:"100px",  paddingLeft:"30px"}}>
    <p>Parsley Seed Skin Care</p>
     <p style={{fontSize:"25px"}}> Fortation of the highest order</p>
     <p> Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
    </p>
  </div>
  <div>
    <img src="https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png" alt="Image 1" />
  </div>
  <div>
    <img src="https://www.aesop.com/u1nb1km7t5q7/11SkMKAwt3wKeDg1Rg63wn/0f9e8e78c8a21a7655a3d8f5c42fbdf4/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png" alt="Image 2" />
  </div>
  <div>
    <img src="https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png" alt="Image 3" />
  </div>
  <div>
    <img src="https://www.aesop.com/u1nb1km7t5q7/11SkMKAwt3wKeDg1Rg63wn/0f9e8e78c8a21a7655a3d8f5c42fbdf4/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png" alt="Image 4" />
  </div>
</div>

      <div className='purchase-section'>
        <div className='purchase-image'>
          <img src="https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png"/>
        </div>
        <div className='purchase-descruiption'>
          <p style={{fontSize:"30px"}}>Eminently suited to all</p>
          <p>An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections. </p>
        <a href="#">Purchase Now</a>
        </div>

      </div>
      <div className='store-section'>
        <div className='store-description' style={{marginLeft:"40px"}}>
          <p style={{fontSize:"35px"}}>
          Store locator</p>
         <p> Our consultants are available to host you<br></br> in-store and provide tailored guidance on gift purchases. 
          </p>
        </div>
        <div className='stores-images'>
        <div class="slides">
          <div> 
            <img style={{height:"100%", width:"100%"}} src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg"/> </div>
          <div> 
            <img  style = {{height:"100%" , width:"100%"}}src="https://www.aesop.com/u1nb1km7t5q7/42rFCFYAbY2eFFaqO5M7pf/b6964b6c5bb2c22a36f26b146132c9d3/Aesop_Harbour_City_II_Hero_Bleed_Desktop_2880x1620px.jpg"/> </div>
          <div> 
            <img  style = {{height:"100%" , width:"100%"}} src="https://www.aesop.com/u1nb1km7t5q7/3qMKbyDUTGRWyBlMLWxsRu/24c4cbb32427080bbb48dca6d5161962/Aesop_Fashion_Walk_II_Hero_Bleed_Desktop_2880x1620px.jpg"/> </div>
          </div>


     
        </div>
      </div>
      <div className='facial-section'>
        <div className='facial-image'>
          <img src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"/>
        </div>
        <div className='about-facial'>
        <p>Facial Appointments</p>
          <p style={{fontSize:"35px"}}>
          Composure for the skin and senses</p>
          
            <p>For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>
            <center><a href="https://www.aesop.com/hk/en/r/facial-appointments/">Learn More</a></center>
        </div>
      </div>
      <div style={{ paddingBottom:"200px"}}>
        <center>
        <p style={{fontFamily:" Zapf Humanist,serif" , fontWeight:"400", fontSize:'1.875rem'}}>‘How bright the windows are, when the dear sun <br></br>shineth.’ </p>
        <p>Lesbia Harford</p>
        </center>
      </div>
      <div className="certificate-section">
        <div className="certificate">
        <p><b>Certified B Corp</b></p>
          <p>We meet the highest verified standards of social and environmental performance, transparency and accountability.</p>
        </div>
        <div className="certificate">
        <p><b>Leaping Bunny approved</b></p>
        <p>Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.</p>
        </div>
        <div className="certificate">
        <p><b>PETA recognition</b></p>
          <p>We appear on PETA's internationally recognised vegan and cruelty-free lists.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
