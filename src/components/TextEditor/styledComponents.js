import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  background-color: #25262c;
  height: 100vh;
`

export const TextEditorContainer = styled.div`
  display: flex;
  background-color: #1b1c22;
  height: 500px;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Heading = styled.h1`
  color: #f8fafc;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 0;
`

export const Image = styled.img`
  width: 250px;
  margin: auto;
  margin-left: 20px;
  margin-right: 20px;
`

export const TextEditorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 5px;
  margin: 15px;
`

export const IconsContainer = styled.ul`
  display: flex;
  border-bottom: 1px solid #334155;
  padding: 10px;
  padding-top: 0;
  align-items: center;
`

export const ListItem = styled.li`
  list-style-type: none;
  align-self: center;
  margin-right: 15px;
`

export const IconsButton = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextInput = styled.textarea`
  padding: 20px;
  padding-top: 0;
  outline: none;
  color: #cbd5e1;
  flex-basis: 100%;
  border: 0;
  background-color: transparent;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
`
