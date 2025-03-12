import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';


// const game = {

//   results: 8,
//   games: [
//     {
//       name: 'GTA 5',
//       url: './photos/gta.jpg',
//       description: 'Grand Theft Auto V Premium Online Edition',
//       rate: '4.2',
//       price: '1723',
//       details: {
//         platform: 'Windows',
//         edition: 'Premium Online Edition',
//         type: 'Full Game',
//         genre: 'Action Adventure',
//         modes: 'Single-player',
//         publisher: 'Rockstar Games',
//         ratings: 'PEGI 18'
//       },

//       highlight:{
//         url1:'/photos/gta1.png',
//         url2:'/photos/gta2.png',
//         url3:'/photos/gta3.png'
//       },

//       requirment:{
//         os:'Windows 10 64 Bit',
//         proccessor:'Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 @ 4GHZ (8 CPUs)',
//         memory:'8GB',
//         videoCard:'NVIDIA GTX 660 2GB / AMD HD7870 2GB',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'120 GB'
//       }
//     },
//     {
//       name: 'LEGO',
//       url: './photos/lego.avif',
//       description: 'LEGO® Star Wars™: The Skywalker Saga',
//       rate: '4.7',
//       price: '2499',
//       details: {
//         platform: 'PS4',
//         edition: 'Premium Online Edition',
//         type: 'Full Game',
//         genre: 'Action Adventure',
//         modes: 'Single-player',
//         publisher: 'Warner Bros. Games',
//         ratings: 'PEGI 10'
//       },

//       highlight:{
//         url1:'/photos/lego1.jpg',
//         url2:'/photos/lego2.jpg',
//         url3:'/photos/lego3.jpg'
//       },

//       requirment:{
//         os:'Windows 10 64 Bit',
//         proccessor:'Intel Core i5-6600 or AMD Ryzen 3 3100',
//         memory:'8GB',
//         videoCard:'GeForce GTX 780 or Radeon R9 290',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'40 GB'
//       }
//     },
//     {
//       name: 'FC25',
//       url: './photos/fc.avif',
//       description: 'EA SPORTS FC™ 25 Standard Edition',
//       rate: '4.1',
//       price: '3999',
//       details: {
//         platform: 'windows',
//         edition: 'Standard Edition',
//         type: 'Full Game',
//         genre: 'Sports',
//         modes: 'Multi-player',
//         publisher: 'Electronic Arts',
//         ratings: 'PEGI 10'
//       },

//       highlight:{
//         url1:'/photos/fc1.jpg',
//         url2:'/photos/fc2.jpg',
//         url3:'/photos/fc3.jpg'
//       },

//       requirment:{
//         os:'Windows 10 64 Bit',
//         proccessor:'Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ',
//         memory:'12GB',
//         videoCard:'NVIDIA GeForce GTX 1660 or AMD RX 5600 XT',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'100 GB'
//       }
//     },
//     {
//       name: 'FORTNITE',
//       url: './photos/fortnite.webp',
//       description: 'FORTNITE',
//       rate: '4.3',
//       price: '100',
//       details: {
//         platform: 'windows',
//         edition: 'Premium Online Edition',
//         type: 'Full Game',
//         genre: 'Action',
//         modes: 'multi-player',
//         publisher: 'Epic Games',
//         ratings: 'PEGI 12'
//       },

//       highlight:{
//         url1:'/photos/fortnite1.avif',
//         url2:'/photos/fortnite2.avif',
//         url3:'/photos/fortnite3.avif'
//       },

//       requirment:{
//         os:'Windows 10 64 Bit',
//         proccessor:'Core i3 2.4 GHz',
//         memory:'4GB',
//         videoCard:'Intel HD 4000 on PC or Intel Iris Pro 5200.',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'20 GB'
//       }
//     },
//     {
//       name: 'Marvel’s Spider-Man 2',
//       url: './photos/sp.avif',
//       description: 'Marvel’s Spider-Man 2',
//       rate: '4.3',
//       price: '2500',
//       details: {
//         platform: 'windows',
//         edition: 'Deluxe Edition',
//         type: 'Full Game',
//         genre: 'Action',
//         modes: 'single-player',
//         publisher: 'Insomniac Games, Nixxes Software',
//         ratings: 'PEGI 12'
//       },

//       highlight:{
//         url1:'/photos/sp1.jpg',
//         url2:'/photos/sp2.jpg',
//         url3:'/photos/sp3.jpg'
//       },

//       requirment:{
//         os:'Windows 11 64 Bit',
//         proccessor:'Intel Core i5-8600 AMD Ryzen 5 3600',
//         memory:'16GB',
//         videoCard:'Nvidia GeForce RTX 2070 Super AMD Radeon RX 5700 XT',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'90 GB'
//       }
//     },
//     {
//       name: 'Assassin’s Creed Shadows',
//       url: './photos/assi.avif',
//       description: 'Assassin’s Creed Shadows',
//       rate: '4.4',
//       price: '2999',
//       details: {
//         platform: 'windows',
//         edition: 'Deluxe Edition',
//         type: 'Full Game',
//         genre: 'Action',
//         modes: 'single-player',
//         publisher: 'Ubisoft',
//         ratings: 'PEGI 12'
//       },

//       highlight:{
//         url1:'/photos/assi1.png',
//         url2:'/photos/assi2.png',
//         url3:'/photos/assi.avif'
//       },

//       requirment:{
//         os:'Windows 10 64 Bit',
//         proccessor:'Intel Core i7-4790 / AMD Ryzen 5 1600.',
//         memory:'8GB',
//         videoCard:'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 570 4GB.',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'100 GB'
//       }
//     },
//     {
//       name: 'RDR-2',
//       url: './photos/rdr.webp',
//       description: 'Red Dead Redemption 2: Ultimate Edition',
//       rate: '4.9',
//       price: '5199',
//       details: {
//         platform: 'windows',
//         edition: 'Ultimate Edition',
//         type: 'Full Game',
//         genre: 'Action',
//         modes: 'single-player',
//         publisher: 'Rockstar Games',
//         ratings: 'PEGI 18'
//       },

//       highlight:{
//         url1:'/photos/rdr1.jpg',
//         url2:'/photos/rdr2.webp',
//         url3:'/photos/rdr3.avif'
//       },

//       requirment:{
//         os:'Windows 10 64 Bit',
//         proccessor:'Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x',
//         memory:'12GB',
//         videoCard:'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'150 GB'
//       }
//     },
//     {
//       name: 'Alan Wake 2',
//       url: './photos/aw.jpg',
//       description: 'Alan Wake 2: Winner of Time Magazines Game of the Year',
//       rate: '4.8',
//       price: '1374',
//       details: {
//         platform: 'windows',
//         edition: 'Base Edition',
//         type: 'Full Game',
//         genre: 'Action Advantur',
//         modes: 'single-player',
//         publisher: 'Remedy Entertainment',
//         ratings: 'PEGI 18'
//       },

//       highlight:{
//         url1:'/photos/aw1.jpg',
//         url2:'/photos/aw2.jpg',
//         url3:'/photos/aw3.jpg'
//       },

//       requirment:{
//         os:'Windows 10/11 64-bit',
//         proccessor:'Intel i5-7600K or AMD equivalent',
//         memory:'16GB',
//         videoCard:'GeForce GTX 1070 / Radeon RX 5600 XT',
//         soundCard:'100% DirectX 10 compatible',
//         hddSpace:'SSD with 90 GB free space'
//       }
//     }
//   ]
// };


const Product = () => {

  const location = useLocation();
    const { cardIndex } = location.state || {}; // Retrieve cardIndex from state

    const [game, setGame] = useState(null); // State for game data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error

    

    // Fetch game data from backend
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/product/fetchall') // Replace with your actual API endpoint
      .then((response) => {
        setGame(response.data[cardIndex]); // Assuming response structure matches
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch game data.');
        setLoading(false);
      });
  }, [cardIndex]);

  // Show loading or error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const {name, url, description, rate, price, details,requirment,highlight } = game;

  return (
    <div>
      <h2 style={{backgroundColor:'grey',color:'white'}}>{name}</h2>
      <div className="container">
      <img src={url} alt={name} style={{ width: '70%', borderRadius: '10px',marginTop:'2rem' }} />
      <div className="conatainer" style={{backgroundColor:'grey',color:'white',width:'100%',marginTop:'1.5rem'}}>
        <h4>{description}</h4>
        <span className="badge badge-pill badge-success" style={{backgroundColor:'green'}}>{rate}<i className="fa-solid fa-star"></i></span>
       
        <h2>₹{price}</h2>

        <table className="product-details">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Platform:</th>
                <td>{details.platform}</td>
              </tr>
              <tr>
                <th>Edition:</th>
                <td>{details.edition}</td>
              </tr>
              <tr>
                <th>Type:</th>
                <td>{details.type}</td>
              </tr>
              <tr>
                <th>Genre:</th>
                <td>{details.genre}</td>
              </tr>
              <tr>
                <th>Game Modes:</th>
                <td>{details.modes}</td>
              </tr>
              <tr>
                <th>Publisher:</th>
                <td>{details.publisher}</td>
              </tr>
              <tr>
                <th>Ratings:</th>
                <td>{details.ratings}</td>
              </tr>
            </tbody>
          </table>

      </div>

                  {/* game Higlights */}
          <h2 style={{marginTop:'2rem',color:'white',backgroundColor:'#1d006fcc'}}>Higlights:-</h2>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{marginTop:'1rem'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={highlight.url1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={highlight.url2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={highlight.url3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


      {/* game requirment  */}
<h2 style={{marginTop:'2rem',color:'white',backgroundColor:'#1d006fcc'}}>Requirements:-</h2>
    <div className="container" style={{backgroundColor:'grey',color:'white',width:'100%',marginTop:'1.5rem'}}>
      <table className="product-Requirment">
        <tbody style={{fontSize:'0.8rem'}}>
          <tr >
          <th>OS:</th>
          <td>{requirment.os}</td>
          </tr>

          <tr>
          <th>Processor:</th>
          <td>{requirment.proccessor}</td>
          </tr>

          <tr>
          <th>Memory:</th>
          <td>{requirment.memory}</td>
          </tr>

          <tr>
          <th>Video Card:</th>
          <td>{requirment.videoCard}</td>
          </tr>

          <tr>
          <th>Sound Card:</th>
          <td>{requirment.soundCard}</td>
          </tr>

          <tr>
          <th>HDD Space:</th>
          <td>{requirment.hddSpace}</td>
          </tr>
        </tbody>
      </table>
    </div>

        {/* Buy Now Button  */}
    <button className='btn btn-success my-5'>Buy Now</button>


          {/* Contect Us Div  */}
    <h2 style={{color:'white',backgroundColor:'#1d006fcc'}}>Contect Us:-</h2>
    <div className="container mt-3" style={{backgroundColor:'grey',color:'white',width:'100%',marginTop:'1.5rem'}}>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here" required></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>

      </div>

      <footer style={{backgroundColor:'grey',marginTop:'2rem'}}>&copy; All CopyRight Reserved By Swayam Kadam Pvt Ltd.</footer>
    </div>
  )
}

export default Product
