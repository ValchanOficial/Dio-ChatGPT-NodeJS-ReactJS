import { useEffect, useRef, useState } from 'react';
import { BeatLoader } from 'react-spinners';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api';
import ChatMessage from './components/ChatMessage';
import SideMenu from './components/SideMenu';

function App() {
  const chatLogElement = useRef(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    { from: 'chatgpt', text: 'Como posso te ajudar hoje?' },
  ]);

  useEffect(() => {
    if (chatLogElement) {
      chatLogElement.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChatLog(oldValue => [...oldValue, { from: 'user', text: input }]);
    setInput('');
    setLoading(oldValue => !oldValue);
    const response = await makeRequest(input);
    setChatLog(oldValue => [...oldValue, { from: 'chatgpt', text: response }]);
    setLoading(oldValue => !oldValue);
  }

  return (
    <div className="App">
      <SideMenu />

      <section className='chatbox'>
        <div className='chat_log' ref={chatLogElement}>
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {loading && <BeatLoader color='#0da37f' size={10} speedMultiplier={0.5} />}
        </div>
  
        <div className='chat_input'>
          <form onSubmit={handleSubmit}>
            <input 
              className='chat_input__text'
              rows='1'
              type='text' 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder='Digite uma mensagem...' 
            />
            <button type='submit'>Enviar</button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default App;
