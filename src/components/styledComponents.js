import styled from 'styled-components'

export const Text = styled.textarea`
  width: 100%;
  height: 80%;
  background-color: transparent;
  color: #fff;
  outline: none;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`

export const Button = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border: 0;
`
export const ButtonItems = styled.li`
  list-style: none;
`
export const ButtonsContainer = styled.ul`
  border: 1px solid #f8fafc;
  padding: 10px;
  display: flex;
`

export const Editor = styled.div`
  background-color: #25262c;
  width: 100%;
  border-radius: 30px;
  padding: 20px;
`

export const Image = styled.img`
  width: 100%;
`
export const Heading = styled.h1`
  color: #fff;
  text-align: center;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`

export const EditorContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  width: 80vw;
  border-radius: 10px;
  display: flex;
  padding: 20px;
`
export const Container = styled.div``
