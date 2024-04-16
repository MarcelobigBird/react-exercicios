import React from 'react';
import { childrenWithProps } from '../utils/utils';

export default function Pai(props) {
  return (
    <div>
      <h1>Pai</h1>
      <p>
        {props.nome} {props.sobrenome}
      </p>
      <h2>Filhos</h2>
      <ul>{childrenWithProps(props)}</ul>
    </div>
  );
}
