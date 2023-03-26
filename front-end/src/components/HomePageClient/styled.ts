import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin: 1rem 0;
  padding: 2rem 0;
  border-top: 1px solid var(--Gray-3);
  border-bottom: 1px solid var(--Gray-3);
  h2 {
    color: var(--Gray-0);
    font-size: 20px;
    font-weight: 700;
  }
  span {
    color: var(--Gray-1);
    font-size: 14px;
    font-weight: 400;
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
    margin-bottom: 1rem;
  }

  button:hover{
    background-color: var(--Color-primary-Focus);
    color: var(--Gray-4);
    font-weight: 600;
  }
`;