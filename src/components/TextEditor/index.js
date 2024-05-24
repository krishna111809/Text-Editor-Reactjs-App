import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  TextEditorContainer,
  HeadingContainer,
  Heading,
  Image,
  TextEditorInputContainer,
  IconsContainer,
  IconsButton,
  TextInput,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textInput: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {
      textInput,
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
    } = this.state
    return (
      <MainContainer>
        <TextEditorContainer>
          <HeadingContainer>
            <Heading> Text Editor</Heading>
            <Image
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </HeadingContainer>
          <TextEditorInputContainer>
            <IconsContainer>
              <ListItem>
                <IconsButton
                  isActive={isBoldActive}
                  onClick={this.onClickBoldButton}
                  data-testid="bold"
                >
                  <VscBold />
                </IconsButton>
              </ListItem>
              <ListItem>
                <IconsButton
                  onClick={this.onClickItalicButton}
                  data-testid="italic"
                  isActive={isItalicActive}
                >
                  <GoItalic as={GoItalic} />
                </IconsButton>
              </ListItem>
              <ListItem>
                <IconsButton
                  onClick={this.onClickUnderlineButton}
                  data-testid="underline"
                  isActive={isUnderlineActive}
                >
                  <AiOutlineUnderline />
                </IconsButton>
              </ListItem>
            </IconsContainer>
            <TextInput
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
              onChange={this.onChangeTextInput}
              value={textInput}
              rows={5}
              cols={5}
            />
          </TextEditorInputContainer>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
