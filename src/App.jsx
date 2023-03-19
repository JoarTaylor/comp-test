import { Button } from "./reuse-components/Button";
import DraggableScale from "./reuse-components/draggable-scale-component/draggable.scale.component";
import PaginationCarousel from "./reuse-components/PaginationCarousel";
import Search from "./reuse-components/search/Search";
import styled from "styled-components";

function App() {
  const pokemons = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  ];

  const searchArray = [
    { name: 'apple', price: 2 },
    { name: 'banana', price: 1 },
    { name: 'orange', price: 3 },
  ];

  const handleSearch = (searchResult, searchTerm) => {
    console.log('you searched for: ', searchTerm, ' and results were: ', searchResult)
  }

  return (
    <Container className="App">
      Kolla under reuseable-components
      <PaginationCarousel
        hideDefaultButton={false}
        numDisplayedItems={4}
        data={pokemons}
        buttonName="Spin Carousel"
      ></PaginationCarousel>
      <Button backgroundhexColor="#840808">Colored</Button>
      <Search searchArray={searchArray} searchCallback={handleSearch}/>
      <DraggableScale/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`