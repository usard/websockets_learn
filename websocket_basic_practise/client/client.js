const form = document.querySelector('form');
const input = document.querySelector('input');
const chatbox = document.querySelector('ul');

const clientWebsocket = new WebSocket('ws://localhost:3000'); // client websocket attempts to create connection with websocket server which is on port 3000
clientWebsocket.addEventListener('open', ()=>console.log('connection established with websocket server...'))
form.addEventListener('submit',e=>e.preventDefault());
const handleSubmit = (e) => {
    e.preventDefault(); // needed here if not page will reload when button is clickeds
    const message = input.value;
    console.log('client :', message);
    clientWebsocket.send(input.value);
    input.value='';
}
clientWebsocket.addEventListener('message', (event)=> {
    console.log('server :', event.data); // reply from server
    const li = document.createElement('li');
    li.innerText = event.data;
    chatbox.appendChild(li);
})
form.addEventListener('submit', handleSubmit);