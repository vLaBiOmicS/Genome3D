export function parseFasta(fastaText) {
    const lines = fastaText.split('\n');
    let seq = '';
    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('>')) continue; // Skip headers
        if (/^[ATCGN]*$/i.test(line)) { // Accept valid bases and N
            seq += line.toUpperCase();
        } else {
            return null; // Invalid line found
        }
    }
    return seq.length > 0 ? seq : null;
}

export function validateFile(file) {
    const validExtensions = ['.fasta', '.txt'];
    const fileExtension = file.name.slice(-5);
    return validExtensions.includes(fileExtension);
}
