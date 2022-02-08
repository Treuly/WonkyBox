import Carrot from "./Carrots.png"
import Avocado from "./Avocado.png"
import Raddish from "./Raddish.png"
import Aubergine from "./Aubergine.png"
import Potato from "./Potato.png"


const ProduceArray = [
    {
        id: 1,
        foodType: "CARROTS",
        region:"Taranaki",
        image: <img src = {Carrot} />
      },
      {
        id: 2,
        foodType: "AVOCADO",
        region:"Auckland",
        image: <img src = {Avocado} />
      },
      {
        id: 3,
        foodType: "RADDISH",
        region:"Wellington",
        image: <img src = {Raddish} />

      },
      {
        id: 4,
        foodType: "AUBERGINE",
        region:"Hawke's Bay",
        image: <img src = {Aubergine} />

      },
      {
        id: 5,
        foodType: "POTATO",
        region:"Wellington",
        image: <img src = {Potato} />

      }

]


export default ProduceArray;