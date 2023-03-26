import styled from "styled-components";

export const UlTech = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  background-color: var(--Gray-3);
  padding: 15px 10px;
  border-radius: 5px;
  overflow-y: auto;
  gap: 1rem;
  margin-bottom: 1rem;
  h2 {
    color: var(--Gray-0);
  }
`;

export const LiTech = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Gray-4);
  gap: 1rem;
  border-radius: 6px;
  padding: 20px 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--Gray-2);
  }
  h2 {
    color: var(--Gray-0);
    font-size: 16px;
    font-weight: 700;
  }
  span {
    color: var(--Gray-1);
    font-size: 14px;
  }

  button {
    margin-top: 10px;
    width: 20%;
    height: 25px;
    font-size: 12px;
    font-weight: 500;
    background-color: var(--Color-primary);
    border: var(--Color-primary);
    color: var(--Gray-0);
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover{
    background-color: var(--Color-primary-Focus);
    color: var(--Gray-4);
    font-weight: 600;
  }
`;