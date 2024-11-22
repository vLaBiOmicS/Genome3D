# Genome3D

Genome3D is a web-based application designed to convert viral, mitochondrial, and bacterial genome sequences into 3D STL files for 3D printing. This tool allows users to visualize genomic information in a unique and tangible way, making it ideal for educational, scientific, and artistic purposes.

## Features

- **File Upload**: Supports genome sequences in FASTA or plain text formats.
- **Configurable Parameters**:
  - **Cube Size**: Adjust the size of the base cubes representing nucleotides.
  - **Gap Between Cubes**: Modify the spacing between cubes for a better layout.
  - **Base Heights**: Define specific heights for each nucleotide (`A`, `T`, `C`, `G`, and `N`).
- **3D Visualization**: Generates an interactive 3D model rendered in the browser.
- **STL Export**: Exports the genome model as an STL file, ready for 3D printing.

## How It Works

1. **Upload a Genome File**:
   - Use the interface to upload a `.fasta` or `.txt` file containing the genome sequence.
2. **Configure Visualization**:
   - Adjust parameters such as cube size, gap, and base heights directly in the interface.
3. **Generate 3D Model**:
   - Click "Generate 3D Model" to render the genome as a 3D representation in the browser.
4. **Export the Model**:
   - Use the "Export to STL" button to download the 3D model for printing.

## File Format Requirements

Genome3D supports the following file formats:

- **FASTA**:
  - Lines starting with `>` are treated as headers and ignored.
  - Valid nucleotide characters: `A`, `T`, `C`, `G`, and `N` (ambiguous bases).
- **Plain Text**:
  - Sequence files containing only valid nucleotide characters.

### Example FASTA File
```plaintext
>Example Genome
ATCGNNNATCG
```

## Configurable Parameters

- **Cube Size:** Controls the size of the base cubes representing each nucleotide.
- **Gap Between Cubes:** Defines the spacing between each nucleotide cube.
- **Base Heights:**
  - **Cube Size**: A: Height for Adenine bases.
  - **Cube Size**: T: Height for Thymine bases.
  - **Cube Size**: C: Height for Cytosine bases.
  - **Cube Size**: G: Height for Guanine bases.
  - **Cube Size**: N: Height for ambiguous or unknown bases.

## Technologies Used
- **HTML5:** Provides the structure for the interface.
- **CSS3:** Ensures responsive and user-friendly design.
- **JavaScript:** Handles the core functionality of file processing and rendering.
- **Three.js:** Powers the 3D rendering and visualization of genome models.

## Getting Started
Clone the repository:

```bash
$ git clone https://github.com/yourusername/genome3d.git
```

Navigate to the project directory:
```bash
$ cd genome3d
```

Open the index.html file in your browser:

```bash
$ chrome index.html
```
