import react, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Films from './component/Films';
import Card from './component/Card';
function App() {
const [data,setdata] =useState(
[
        {id:Math.random(), titre:"SPIDER MAN",description:"L'identité de Spider-Man étant désormais révélée, Peter demande de l'aide au docteur Strange. Lorsqu'un sort tourne mal, des ennemis commencent à apparaître, forçant Peter à découvrir ce que signifie vraiment être Spider-Man.",url:"https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",rating:"8,7",key:"1"},
        {id:Math.random(), titre:"IN THE HEIGHTS",description:"Une version cinématographique de la comédie musicale de Broadway dans laquelle Usnavi, sympathique propriétaire d'une cave new-yorkaise, épargne chaque centime en rêvant d'une vie meilleure.",url:"https://m.media-amazon.com/images/M/MV5BMzM1ZDY0YTktZTYzZi00MjZjLTllMDMtMmNlMmM5NmY4ZjllXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg",rating:"7,3",key:"2"},  
        {id:Math.random(), titre:"MOONFALL ",description:"Moonfall, a mysterious force knocks the Moon from its orbit around Earth and sends it hurdling on a collision course with life as we know it. With mere weeks before impact and the world on the brink of annihilation, NASA executive and former astronaut Jo Fowler is convinced she has the key to saving us all - but only one astronaut from her past, Brian Harper and a conspiracy theorist K.C. Houseman believe her. These unlikely heroes will mount an impossible last-ditch mission into space, leaving behind everyone they love, only to find that they might have prepared for the wrong mission.",url:"https://fr.web.img3.acsta.net/pictures/22/01/06/17/08/1230710.jpg",rating:"7,5",key:"3"},
        {id:Math.random(), titre:"PIG",description:"A truffle hunter who lives alone in the Oregon wilderness must return to his past in Portland in search of his beloved foraging pig after she is kidnapped.",url:"https://fr.web.img4.acsta.net/pictures/21/09/02/16/46/1905332.jpg",rating:"7",key:"4"}
    ]


)

  return (
  <Router>
  <div>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/films" element={<Films data={data}/>}/>+
    <Route path="/card" element={<Card/>}/>

  </Routes>
  </div>
  </Router>    
  );
}

export default App;
