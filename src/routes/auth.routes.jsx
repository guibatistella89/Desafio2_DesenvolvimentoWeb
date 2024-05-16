import { Routes, Route } from 'react-router-dom';
import { Cadastrar } from '../pages/Cadastrar';
import { TelaInicial } from '../pages/TelaInicial';
import { Listar } from '../pages/Listar';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={< TelaInicial />} />
      <Route path="/cadastro" element={< Cadastrar />} />
      <Route path="/lista" element={< Listar />} />
    </Routes>
  );
}