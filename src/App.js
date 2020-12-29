import './App.css';
import { BemVindo, Container, Header, Titulo } from './styles';

function App() {
  return (
    <div>
      <Container>
        <Header>
          <Titulo>Projeto Styled-Components</Titulo>
        </Header>

        <BemVindo 
          cor="#00FF00"
          tamanho={35}
        >
          Bem vindo ao Sistema!
        </BemVindo>
      </Container>
    </div>
  );
}

export default App;
