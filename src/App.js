import styled from 'styled-components';

import { Participants } from './Participants';
import Wheel from './Wheel';

import './App.css';
import { useState } from 'react';
import { Header } from './Header';

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

function App() {
  // Hardcoded names instead of using input for dynamic addition
  const hardcodedNames = ["Hamza Ashrafi", "Nabeel Jawed", "Haris", "Babar", "Jahangeer", "Hasnain", "Noman Sofi", "Yasir", "Osama", "Saad Haider", "Shammas", "Hassan", "Nisar"];

  const [names, setNames] = useState(hardcodedNames);

  const handleRemoveName = (index) => {
    setNames(names.filter((_, i) => i !== index));
  };

  const shuffleNames = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffledNames);
  };

  const sortNames = () => {
    const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
    setNames(sortedNames);
  };

  return (
    <>
      <Header />
      <Main>
        <Wheel participants={names} />
        <Participants
          handleRemoveName={handleRemoveName}
          shuffleNames={shuffleNames}
          sortNames={sortNames}
          names={names}
        />
      </Main>
    </>
  );
}

export default App;
