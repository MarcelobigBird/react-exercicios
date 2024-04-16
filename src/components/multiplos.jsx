import React from 'react';

function BoaTarde(props) {
  return (
    <h1 key="h3">
      Boa tarde,
      {props.nome}
    </h1>
  );
}

function BoaNoite(props) {
  return (
    <h1 key="h4">
      Boa noite,
      {props.nome}
    </h1>
  );
}

export { BoaTarde, BoaNoite };
