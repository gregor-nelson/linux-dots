import { ChatGptProvider } from 'react-native-chatgpt';
import App from './App';

const Root = () => {
  return (
    <ChatGptProvider>
      <App />
    </ChatGptProvider>
  );
};