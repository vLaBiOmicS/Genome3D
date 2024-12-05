import { parseFasta, validateFile } from './fileHandler.js';
import { create3DVisualization } from './3dRenderer.js';
import { updatePreviewMessage, toggleButtonState } from './uiHandler.js';
import { config } from './config.js';

// Variáveis globais
let sequence = '';
let scene, camera, renderer;

document.getElementById('fileInput').addEventListener('change', function () {
    const file = this.files[0];
    if (!file || !validateFile(file)) {
        updatePreviewMessage('Arquivo inválido. Certifique-se de que o arquivo seja .fasta ou .txt');
        toggleButtonState('generateButton', true);
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        sequence = parseFasta(e.target.result);
        if (sequence) {
            updatePreviewMessage(`Arquivo carregado: ${file.name} - ${sequence.length} bases encontradas.`);
            toggleButtonState('generateButton', false);
        } else {
            updatePreviewMessage('Arquivo inválido. As sequências devem conter apenas A, T, C, G ou N.');
            toggleButtonState('generateButton', true);
        }
    };
    reader.readAsText(file);
});

document.getElementById('generateButton').addEventListener('click', function () {
    create3DVisualization(sequence, config, scene, camera, renderer, document.getElementById('visualization'));
    toggleButtonState('exportButton', false);
});

document.getElementById('exportButton').addEventListener('click', function () {
    // Função para exportar o modelo 3D para STL (não implementada neste exemplo)
    alert('Exportando para STL...');
});
