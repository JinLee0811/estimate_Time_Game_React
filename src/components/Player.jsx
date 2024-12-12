import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  const [name, setName] = useState();

  function onClickHandler() {
    setName(playerName.current.value);
  }

  return (
    <section id='player'>
      <h2>Welcome {name ? name + '👋' : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
