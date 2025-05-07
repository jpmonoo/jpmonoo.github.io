// Arquivo script.js para futuras funcionalidades
// A funcionalidade principal de link para WhatsApp já está implementada no HTML.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Guincho Asa Delta Lobo carregado e pronto!');
    // Exemplo: Adicionar um listener para os botões CTA, caso necessário no futuro
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevenir comportamento padrão se for um link interno que não deva navegar
            // event.preventDefault(); 
            console.log('Botão CTA clicado:', this.href);
            // A navegação para o WhatsApp já ocorre devido ao href e target="_blank"
        });
    });
});
