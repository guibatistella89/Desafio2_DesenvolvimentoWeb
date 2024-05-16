import { FaCar, FaList } from 'react-icons/fa';
import { Container } from "./styles";
import { Feature } from '../../components/Feature';


export function TelaInicial() {
  return (
    <Container>
      
      <h1>Controle de Estacionamento</h1>
      <h2>Condomínio Dom Guilherme</h2>


      <main>
        <Feature title="Cadastrar Reserva" icon={FaCar} to="/cadastro" />
        <Feature title="Listar Reservas" icon={FaList} to="/lista" />
        
      </main>
    </Container>
  )
}