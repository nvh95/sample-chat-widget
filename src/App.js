import styled from 'styled-components';

function App() {
  const handleClickSettings = () => {
    if (window.parent) {
      window.parent.postMessage({
        signal: 'close',
        from: 'faqbot_chat_widget',
      }, '*');
    }
  }

  const renderConversation = () => {
    return Array.from(Array(100).keys()).map(index => {
      if (index % 2 === 0) {
        return (
        <UserMessage key={index}>
          {`User message ${index}`}
        </UserMessage>
      )
        }
      return (
        <BotMessage key={index}>
          {`Bot message ${index}`}
        </BotMessage>
      )
    })
  }

  return (
    <Wrapper>
      <Header>
        <Logo>
          Awesome Chat Widget
        </Logo>
        <SettingsButton 
          onClick={handleClickSettings}
        />
      </Header>

      <Content>
        {renderConversation()}
      </Content>
      <Composer>
        <Textarea 
          placeholder="Type your message here..."
        />
        <SendButton>
          Send
        </SendButton>
      </Composer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #060dcfc7;
  padding: 16px 16px;
  justify-content: space-between;
`

const Logo = styled.div`
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  font-size: 1.5rem;
`

const SettingsButton = styled.div`
    width: 25px;
    height: 25px;
    background-image: radial-gradient(circle, white 2px, transparent 3px);
    background-size: 100% 33.33%;
    cursor: pointer;
`

const Content = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const Message = styled.div`
  padding: 8px 16px;
  border-radius: 20px;
`

const UserMessage = styled(Message)`
  background-color: #060dcfc7;
  align-self: flex-end;
  color: white;
  border-top-right-radius: 0;
`

const BotMessage = styled(Message)`
  background-color: #e3e7ee;
  align-self: flex-start;
  border-top-left-radius: 0;
`;

const Composer = styled.div`
  min-height: 50px;
  border-top: 1px solid #e3e7ee;
  display: flex;
  align-items: baseline;
  padding: 16px;
`

const Textarea = styled.textarea`
  width: 100%;
  padding-left: 16px;
`

const SendButton = styled.button`
  color: white;
  background-color: #060dcfc7;
  border: none;
  border-radius: 15px;
  padding: 8px 16px;
  font-size: 1rem;
`
export default App;
