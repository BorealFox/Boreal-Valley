
import { Link } from 'react-router-dom';


function Ostukorv() {
    return ( 
    <div>
        <div>Ostukorv on tühi</div>
         <Link to="/">
            <button className="nupp">Mine tooteid lisama</button>
         </Link>
         <Link to="/">
            Link avalehele ilma nuputa
         </Link>
    </div> 
    );
}

export default Ostukorv;