import styled from 'styled-components';

export const TitleForm = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 20px;
  height: 36px;
  border-radius: 6px;
  border: none;
  outline: rgba(0, 0, 0, 0.2); ;
`;

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  width: 120px;

  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;
