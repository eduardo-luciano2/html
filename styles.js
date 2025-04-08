function atualizar relógio() {
    const relógio = document.getElementById('relógio')
    // aqui eu vou mexerno elemento com ID 'relógio' no html
    const agora - new Date();
    agora.setHours(agora.getHours()-3)
    // esse código vai ser para ser mostrado a hora
    const horas = String(agora.getHours()).padStart(2,'0');
    const minutos = String(agora.getMinutes()).padStart(2,'0')
    
}