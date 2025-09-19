import styled from 'styled-components';
import { Section, Button } from './styles';
import { capitalize } from './utils';

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 10px;
  margin: 5px;
  background-color: #f9f9f9;
  border-radius: 5px;
  list-style: none;
  color: #282c34;
  font-weight: bold;
  font-size: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & > button {
    margin-left: 10px;
  }
`;

export const Participants = ({ handleRemoveName, shuffleNames, sortNames, names }) => {
    const hasParticipants = names.length > 0;

    return (
        <Section>
            <ButtonGroup>
                <h2>Participants</h2>
                <div>
                    <Button onClick={shuffleNames} disabled={!hasParticipants}>
                        Shuffle
                    </Button>
                    <Button onClick={sortNames} disabled={!hasParticipants}>
                        Sort
                    </Button>
                </div>
            </ButtonGroup>
            <ul>
                {names.map((name, index) => (
                    <ListItemContainer key={index}>
                        <ListItem>{capitalize(name)}</ListItem>
                        <Button onClick={() => handleRemoveName(index)}>Del</Button>
                    </ListItemContainer>
                ))}
            </ul>
        </Section>
    );
};
