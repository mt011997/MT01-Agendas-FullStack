import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  color: var(--Gray-0);
  font-size: 16px;
  font-weight: 600;
  button {
    background-color: var(--Gray-3);
    border: var(--Gray-3);
    color: var(--Color-primary);
    font-size: 20px;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    cursor: pointer;
  }
`;