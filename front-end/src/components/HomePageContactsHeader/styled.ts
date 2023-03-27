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
`
export const DivPesquisa = styled.div`
  display: flex;
  color: var(--Gray-0);
  align-items: center;
  margin-bottom: 1rem;
  gap: 5px;
  label{
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }
  input{
    background-color: var(--Gray-2);
    font-weight: bold;
    width: 13rem;
    border: none;
    border-radius: 5px;
    padding: 6px;
    color: var(--Color-primary)
  }
  input:focus{
    outline: none;
  }
  input::placeholder{
    color: var(--Gray-5);
  }
`
