import { useState } from "react";
import { data} from './data';


function Products() {

    const [list, setList] = useState(data);

    const filterCandels = (fragrance) => {
        const newList = data.filter(element => element.fragrance === fragrance);
        setList(newList)
    }

    const filterVolume = (volume) => {
        const newList = data.filter(element => element.volume === volume);
        setList(newList)
    }

    const [showText, setShowText] = useState(false);

    const showTextClick = (thing) => {
        thing.showMore = !thing.showMore;
        setShowText(!showText)

    }
    

    return(
        <div className="containerAboutProducts">
        <div className="containerTitle">
        <h1>ПРОДУКЦИЯ</h1>
        </div>

        <div className="containerProducts">

        <div className="filter">
        <div className="filterOne">
            <h3>ВИДЫ АРОМАТОВ</h3>
            <button onClick={()=>filterCandels("древесный")} className="btn fragrance">Древесные</button>
            <button onClick={()=>filterCandels("сладкий")} className="btn fragrance">Сладкие</button>
            <button onClick={()=>filterCandels("свежий")} className="btn fragrance">Свежие</button>
            <button onClick={()=>filterCandels("хит")} className="btn fragrance">Хиты продаж</button>
        </div>

        <div className="filterTwo">
            <h3>ОБЪЕМ</h3>
            <button onClick={()=>filterVolume("110 мл")} className="btn volume">110 мл</button>
            <button onClick={()=>filterVolume("220 мл")} className="btn volume">220 мл</button>
            <button onClick={()=>filterVolume("330 мл")} className="btn volume">330 мл</button>
        </div>
        </div>

        <div className="catalogue">
            {list.map((thing => {
                const {id, name, price, volume, image, description, showMore} = thing;
                
                const btnText = showMore ? "Скрыть" : "Подробнее";

                return(
                    <div key={id} className="cardProduct">
                        <img src={image} width="200px" alt="foto"/>
                        <p>{name} , {volume}</p>
                        <p className="description"> {showMore ? description : description.substring(0,0)} <button className="btnShowMore" onClick={() => showTextClick(thing)}> {btnText} </button></p>
                        <p>{price}</p>

                    </div>
                )
            }))}
        </div>
        </div>






        </div>
    )
}

export default Products;