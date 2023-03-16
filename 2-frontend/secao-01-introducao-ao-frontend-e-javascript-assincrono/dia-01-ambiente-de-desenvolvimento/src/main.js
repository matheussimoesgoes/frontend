import validator from 'validator';
import './style.css';

const textoEscrito = document.getElementById('texto');
const botao = document.getElementById('validar');
const seletor = document.getElementById('dados');
const saida = document.getElementById('saida');

botao.addEventListener('click', (event) => {
  event.preventDefault();

  const resultado = {
    cpf: validator.isTaxID(textoEscrito.value, 'pt-BR'),
    email: validator.isEmail(textoEscrito.value),
    telefone: validator.isNumeric(textoEscrito.value),
    nome: validator.isAlpha(textoEscrito.value, 'pt-BR'),
    rg: validator.isLength(textoEscrito.value, { min: 11, max: 11 }),
  };
  saida.innerHTML = `A validação retornou ${resultado[seletor.value]}`;
});
