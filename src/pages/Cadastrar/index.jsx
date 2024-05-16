import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Cadastrar() {

  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [nome, setNome] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [bloco, setBloco] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [cor, setCor] = useState("");
  const [vaga, setVaga] = useState("");

  function ConferirCadastro() {
    if (!placa || !nome || !apartamento || !bloco || !veiculo || !cor || !vaga) {
      return alert("Preencha todos os campos!");
      
    }

    console.log("Placa do Veículo: " + placa 
      + "\nNome do Proprietário: " + nome 
      + "\nApartamento: " + apartamento
      + "\nBloco: " + bloco
      + "\nVeiculo: " + veiculo
      + "\nCor: " + cor
      + "\nVaga: " + vaga)

    alert("Reserva cadastrada com sucesso!")
  }

  return (
    <Container>
      <Form>
        <h1>Cadastro de Reserva</h1>

        <Input
          placeholder="Placa do Veículo"
          type="text"
          onChange={e => setPlaca(e.target.value)}
        />

        <Input
          placeholder="Nome do Proprietário"
          type="text"
          onChange={e => setNome(e.target.value)}
        />

        <Input
          placeholder="Apartamento"
          type="text"
          onChange={e => setApartamento(e.target.value)}
        />

        <Input
          placeholder="Bloco"
          type="text"
          onChange={e => setBloco(e.target.value)}
        />

        <Input
          placeholder="Veículo"
          type="text"
          onChange={e => setVeiculo(e.target.value)}
        />
        
        <Input
          placeholder="Cor"
          type="text"
          onChange={e => setCor(e.target.value)}
        />

        <Input
          placeholder="Número da Vaga"
          type="text"
          onChange={e => setVaga(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={ConferirCadastro}
        />

        <Button 
          title="Voltar" 
          onClick={() => navigate('/')} />

    
      </Form>
    </Container>
  )
}