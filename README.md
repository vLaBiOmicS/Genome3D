# Genome3D

**Genome3D** is a web-based application designed to convert viral, mitochondrial, and bacterial genome sequences into 3D STL files for 3D printing. This tool allows users to visualize genomic information in a unique and tangible way, making it ideal for educational, scientific, and artistic purposes.

## Applicability of Genome3D: Inclusion, Biotechnology, and Biomedical Engineering

**Genome3D** is an innovative tool that transforms genomic data into tangible 3D models, enabling users to explore and understand nucleotide sequences through interactive visualizations and physical models. Beyond its accessibility features, the tool opens new pathways for education, research, and applications in biotechnology and biomedical engineering.

## Inclusion of Individuals with Visual Impairments

**Genome3D** bridges the gap between genomic science and accessibility by creating 3D-printable models of DNA sequences. This tactile representation enables individuals with visual impairments to interact with genomic data in a meaningful way, fostering inclusivity in education and research.

### Key Benefits:
- **Tactile Learning:** Height-differentiated cubes corresponding to nucleotide bases (A, T, C, G, and N) provide sensory feedback, allowing users to identify sequence patterns through touch.
- **Inclusive Education:** Genome3D empowers students with visual impairments to participate actively in STEM fields, particularly in molecular biology and genomics.
- **Enhanced Scientific Exploration:** Tactile models allow individuals with visual impairments to analyze genomic structures and discuss findings in collaborative research environments.

## Impact on Biotechnology
**Genome3D** offers significant advantages for biotechnology by enabling researchers to visualize and interpret genetic data in novel ways. This is particularly relevant for fields that require precise pattern recognition or structural insights.

### Key Applications in Biotechnology:

**1. Genome Annotation:**
- Genome3D can aid in annotating viral, bacterial, or mitochondrial genomes by identifying structural patterns or conserved sequences through tactile and visual analysis.
Synthetic Biology:

By visualizing nucleotide sequences in a physical format, researchers can better design and test synthetic DNA constructs, improving the accuracy and efficiency of genetic engineering projects.
Drug Development:

Genome3D models can help researchers map genomic variations linked to drug resistance, such as in antimicrobial resistance studies, providing a deeper understanding of genetic factors affecting treatment outcomes.

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

## Example Workflow

### Input FASTA File:

```plaintext
>Example Genome
ATCGNNNATCG
```

### 3D Model Parameters:

- **Cube Size:** 1.0
- **Gap Between Cubes:** 0.2
- **Base Heights:** A: 3, T: 4, C: 5, G: 6, N: 2

### Result:

- A 3D genome representation where each nucleotide is visualized as a cube with customizable height and spacing.
- The ambiguous base N is represented as a gray cube.

## Screenshots

The Genome3D application interface.
3D genome representation rendered in the browser.

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
Developed by the Laboratory of Bioinformatics and Omics Science (LaBiOmicS).
