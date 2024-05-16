import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Item, Info } from './styles';
import { Button } from '../../components/Button';

export function Listar() {
  const navigate = useNavigate();

  const [reservasPreenchidas, setReservasPreenchidas] = useState([
    { placa: 'AAA-1111', proprietario: 'Alberto', apartamento: '101 A' },
    { placa: 'BBB-2222', proprietario: 'Bruna', apartamento: '102 A' },
    { placa: 'CCC-3333', proprietario: 'Carla', apartamento: '103 A' },
    { placa: 'DDD-4444', proprietario: 'Denis', apartamento: '104 A' },
    { placa: 'EEE-5555', proprietario: 'Emerson', apartamento: '201 B' },
    { placa: 'FFF-6666', proprietario: 'Fátima', apartamento: '202 B' },
    { placa: 'GGG-7777', proprietario: 'Guilherme', apartamento: '203 B' },
    { placa: 'HHH-8888', proprietario: 'Heitor', apartamento: '204 B' },
    { placa: 'III-9999', proprietario: 'Ivanio', apartamento: '301 C' },
    { placa: 'JJJ-1010', proprietario: 'Jairo', apartamento: '302 C' }
  ]);

  const reservasVazias = Array(40).fill(null);

  const removerReserva = (placa) => {
    const novasReservas = reservasPreenchidas.map((reserva) => {
      if (reserva.placa === placa) {
        return { vaga: `Vaga ${reservasPreenchidas.indexOf(reserva) + 1}`, semReserva: true };
      }
      return reserva;
    });
    setReservasPreenchidas(novasReservas);
  };

  return (
    <Container>
      <Header>
        <h1>Vagas reservadas</h1>

        <Info>
          Vagas reservadas: {reservasPreenchidas.length} <br />
          Vagas disponíveis: {reservasVazias.length}
        </Info>

        <nav>
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {reservasPreenchidas.map((reserva, index) => (
  <Item key={index}>
    <span>{`Vaga ${index + 1}`}</span>
    <br />
    <span>{`Placa: ${reserva.placa}`}</span>
    <br />
    <span>{`Proprietário: ${reserva.proprietario}`}</span>
    <br />
    <span>{`Apto e bloco: ${reserva.apartamento}`}</span>
    <Button title="Remover" onClick={() => removerReserva(reserva.placa)}>Remover</Button>
  </Item>
))}

      {reservasVazias.map((_, index) => (
        <Item key={index + reservasPreenchidas.length}>
          <span>{`Vaga ${index + reservasPreenchidas.length + 1}`}</span>
          <br />
          <span>{`Sem reserva`}</span>
        </Item>
      ))}
    </Container>
  );
}
