import Avatar from '../Avatar';
import './style.css';

const ChatMessage = ({ message }) => {
  return (
    <div className={`chatmessage-${message.from}`}>
        <div className='chatmessage_center'>
            <div className={`avatar-${message.from}`}>
                <Avatar from={message.from} />
            </div>
            <div className='chatmessage__text'>
                {message.text}
            </div>
        </div>
    </div>
  );
}

export default ChatMessage;