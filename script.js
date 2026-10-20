// Lógica del Chat
const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');

chatToggle.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
});
chatClose.addEventListener('click', () => { chatBox.style.display = 'none'; });

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('chat-opt-btn')) {
        const op = e.target.getAttribute('data-op');
        let responseText = "";
        if(op === '1') responseText = "¡Genial! Nuestra app con Machine Learning analiza tus capturas y te dice qué prenda es al instante.";
        else if(op === '2') responseText = "Sincroniza tus tableros de Pinterest y nosotros buscamos opciones reales en tiendas de ropa aliadas.";
        else if(op === '3') responseText = "El análisis cromático detecta tu paleta ideal para realzar tu belleza natural al máximo.";
        else if(op === '4') responseText = "🎉 ¡Sorpresa! Aquí tienes tu código de descuento exclusivo del 20% en tu primera asesoría: **CHROMA2026**";

        chatBody.innerHTML += `<div class="bot-msg" style="background:rgba(var(--primary-rgb), 0.15); color:#fff;">${responseText}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});