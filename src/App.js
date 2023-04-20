import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  EditorContainer,
  Container,
  Heading,
  Image,
  Button,
  Text,
  Editor,
  ButtonsContainer,
  ButtonItems,
} from './components/styledComponents'

class App extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  render() {
    const {isBold, isUnderline, isItalic} = this.state
    return (
      <MainContainer>
        <EditorContainer>
          <Container>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Container>
          <Editor>
            <ButtonsContainer>
              <ButtonItems>
                <Button
                  data-testid="bold"
                  onClick={() => this.setState({isBold: !isBold})}
                  color={isBold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold />
                </Button>
              </ButtonItems>
              <ButtonItems>
                <Button
                  data-testid="italic"
                  onClick={() => this.setState({isItalic: !isItalic})}
                  color={isItalic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic />
                </Button>
              </ButtonItems>
              <ButtonItems>
                <Button
                  data-testid="underline"
                  onClick={() => this.setState({isUnderline: !isUnderline})}
                  color={isUnderline ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline />
                </Button>
              </ButtonItems>
            </ButtonsContainer>
            <Text
              fontStyle={isItalic ? 'italic' : 'normal'}
              fontWeight={isBold ? 'bold' : 'normal'}
              textDecoration={isUnderline ? 'underline' : 'normal'}
              row="30"
              cols="10"
            />
          </Editor>
        </EditorContainer>
      </MainContainer>
    )
  }
}

export default App
