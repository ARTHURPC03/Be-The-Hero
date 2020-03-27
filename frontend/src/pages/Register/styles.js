import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 100%;
  padding: 96px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: ${(props) => props.theme.colors.content};
  transition: background 1s ease 0s, transform 1s ease 0s;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    font-size: 18px;
    color: #999;
    line-height: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    margin-right: 8px;
  }
`
export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
    background: ${(props) => props.theme.colors.input};
    color: ${(props) => props.theme.colors.text};
    transition: color, background 1s ease 0s, transform 1s ease 0s;
  }

  input:focus {
    border-color: #e02041;
    border-width: 3px;
  }

  input::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`
export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  transition: border 0.2s ease 0s, transform 0.2s ease 0s;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.text};
  }
`
