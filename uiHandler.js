// Função para atualizar a mensagem de pré-visualização
export function updatePreviewMessage(message) {
    const preview = document.getElementById('preview');
    preview.textContent = message;
}

// Função para alternar o estado do botão
export function toggleButtonState(buttonId, state) {
    const button = document.getElementById(buttonId);
    button.disabled = state;
}
