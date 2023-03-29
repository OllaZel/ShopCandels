import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {

    
        let navigate = useNavigate();
      
        const goProduct = () => {
          navigate("/products");
        }

    return(
        <div className="bodyStyle">
        <div className='containet-title'>

        <h1 className='title'>HYGGE CANDLES</h1>
        <h3 className='since'>SINCE 2022</h3>
        <button className='btnBuy' onClick={goProduct}>КУПИТЬ</button>
    
        </div>
        </div>
    ) 
}

export default Home;