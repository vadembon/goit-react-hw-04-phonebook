import styled from 'styled-components';

export const ListBox = styled.div`
  padding-top: 30px;
`;

export const TitleList = styled.h2`
  text-align: center;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BtnItem = styled.button`
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  width: 100px;

  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;
