export function updatePreviewMessage(message) {
    document.getElementById('preview').textContent = message;
}

export function toggleButtonState(button, state) {
    button.disabled = !state;
}
