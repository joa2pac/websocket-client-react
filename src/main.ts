import { connectToServer } from './socket-client'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h2>Websocket - Client</h2>
   <input id="jwt-token" placeholder="Json Web Token" />
   <button id="btn-connect">Connect</button>

   <br/>
   <span id="server-status">offline</span>

   <ul id="clients-ul">
    <li>
    </li>
   </ul>

    <form id="message-form">
      <input placerholder="message" id="message-input" />
    </form>

  </div>
`
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {

  if( jwtToken.value.trim().length <= 0 ) return alert('Enter a valid JWT');

  connectToServer( jwtToken.value );
});