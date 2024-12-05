import { parseFasta, validateFile } from './fileHandler.js';
import { create3DVisualization, exportToSTL } from './3dRenderer.js';
import { updatePreviewMessage, toggleButtonState } from './uiHandler.js';
import { config } from './config.js';

// Handle file upload and validation
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const generateButton = document.getElementById('generateButton');
const exportButton = document.getElementById('exportButton');
const visualization = document.getElementById('visualization');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file && validateFile(file)) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const sequence = parseFasta(e.target.result);
            if (sequence) {
                updatePreviewMessage(`File loaded: ${file.name} - ${sequence.length} bases found.`);
                generateButton.disabled = false;
            } else {
                updatePreviewMessage('Invalid file. Ensure your file only contains A, T, C, G, or N.');
                generateButton.disabled = true;
            }
        };
        reader.readAsText(file);
    } else {
        updatePreviewMessage('Invalid file type. Please upload a .fasta or .txt file.');
        generateButton.disabled = true;
    }
});

generateButton.addEventListener('click', () => {
    const sequence = preview.textContent.split(' ')[2]; // Example to extract sequence length
    const configValues = config.getConfig();
    create3DVisualization(sequence, configValues);
    exportButton.disabled = false;
});

exportButton.addEventListener('click', exportToSTL);
