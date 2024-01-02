const inputDiv=document.getElementsByClassName('input')
const input=document.getElementById('input')
const btn=document.getElementById('btn')
const messagesDiv=document.getElementsByClassName('messages')
const ul=document.querySelector('ul.messages');
const info=document.getElementById('info')
var socket=io();

//emit event from client
btn.addEventListener('click',()=>{
    socket.emit('sendMessage',input.value);
    input.value="";
})

//event listen from server
socket.on('sendMessage',(data)=>{
    let li=document.createElement('li')
    li.textContent=data;
    ul.appendChild(li);
})

//emit event while typing
input.addEventListener('focusin',()=>{
    socket.emit('typing',true);
})
input.addEventListener('focusout',()=>{
    socket.emit('typing',false);
})

socket.on('typing',(data)=>{
    if(data){
        info.textContent="user is typing...."
    }
    else{
        info.textContent=""
    }
})