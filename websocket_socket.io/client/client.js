const form = document.querySelector('form');
const input = document.querySelector('input');
const chatbox = document.querySelector('ul');

const clientWebsocket = io('ws://localhost:3000'); // client websocket attempts to create connection with websocket server which is on port 3000
clientWebsocket.on('connect', ()=>console.log('connection established with websocket server...'))
form.addEventListener('submit',e=>e.preventDefault());
const handleSubmit = (e) => {
    e.preventDefault(); // needed here if not page will reload when button is clickeds
    const message = input.value;
    console.log('client :', message);
    clientWebsocket.emit('message', input.value);
    input.value='';
}
clientWebsocket.on('message', (data)=> {
    console.log('server :', data); // reply from server
    const li = document.createElement('li');
    li.innerText = data;
    chatbox.appendChild(li);
})
form.addEventListener('submit', handleSubmit);