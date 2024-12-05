// Função para fazer o parse do arquivo FASTA
export function parseFasta(fastaText) {
    const lines = fastaText.split('\n');
    let seq = '';
    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('>')) continue; // Ignorar cabeçalhos
        if (/^[ATCGN]*$/i.test(line)) { // Aceitar apenas bases válidas
            seq += line.toUpperCase();
        } else {
            return null; // Linha inválida
        }
    }
    return seq.length > 0 ? seq : null;
}

// Função para validar o arquivo
export function validateFile(file) {
    return file.name.endsWith('.fasta') || file.name.endsWith('.txt');
}
