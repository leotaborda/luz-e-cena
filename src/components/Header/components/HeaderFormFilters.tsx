import React from "react";
import SelectorGroup from "../../Selector/SelectorGroup";
import { FaLocationDot } from "react-icons/fa6";
import SelectorOption from "../../Selector/SelectorOption";

const cidades = [
  {
    id: 1,
    nome: "São Paulo - SP",
  },
  {
    id: 2,
    nome: "Rio de Janeiro - RJ",
  },
  {
    id: 3,
    nome: "Belo Horizonte - MG",
  },
  {
    id: 4,
    nome: "Curitiba - PR",
  },
  {
    id: 5,
    nome: "Porto Alegre - RS",
  },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaLocationDot />}>
        <SelectorOption value="" label="Escolha Sua Cidade..." />
        {cidades.map((cidade) => {
          return (
            <SelectorOption
              key={cidade.id}
              value={cidade.nome}
              label={cidade.nome}
            />
          );
        })}
      </SelectorGroup>
    </form>
  );
};

export default HeaderFormFilters;
