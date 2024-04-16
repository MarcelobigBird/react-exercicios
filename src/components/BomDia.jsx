import React from 'react';

export default (props) => [
  <h1 key="h1">
    Bom dia,
    {props.nome}
  </h1>,
];

/*
  export default function BomDia(props) {
    return (
      <Fragment>
      <h1>Bom dia, {props.nome}!</h1>
      <h2>Até breve!</h2>
      </ Fragment>
    )
  }
 */
