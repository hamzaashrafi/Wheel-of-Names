import styled from 'styled-components';

const Button = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 1.2em;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

export default Button;
