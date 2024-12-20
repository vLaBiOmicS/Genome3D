# Genome3D

**Genome3D** is a web-based application designed to convert viral, mitochondrial, and bacterial genome sequences into 3D STL files for 3D printing. This tool allows users to visualize genomic information in a unique and tangible way, making it ideal for educational, scientific, and artistic purposes.

# Applicability of Genome3D: A Critical Analysis

The **Genome3D** tool is designed to convert genomic sequences into 3D models, enabling visualization and export to STL files suitable for 3D printing. This functionality offers an innovative approach to representing genomic data physically, with potential uses in educational and research contexts.

## Educational and Research Applications

- **Molecular Biology Education**:  
   By transforming DNA sequences into tangible 3D models, Genome3D facilitates the understanding of abstract concepts, making them more accessible to students and educators.

- **Structural Analysis**:  
   Researchers can use 3D models to visualize and analyze genomic structures, helping identify patterns or anomalies in specific sequences.

## Inclusion of People with Visual Impairments

The ability to generate physical models of DNA sequences has potential benefits for individuals with visual impairments. By enabling tactile exploration of genomic structures, Genome3D can make genomic data more accessible. However, to fully support this demographic, complementary educational materials and adapted teaching strategies would need to be developed.

## Current Limitations

While the tool provides promising functionality, its applicability in fields like biotechnology and biomedical engineering may be limited:

- The representation of genomic sequences as cubes of varying heights offers a simplified view that might not capture the structural complexity required for advanced applications in these domains.
- The utility of 3D models for structural or functional genomics research is constrained by the abstraction level inherent in the current visualization approach.

## Final Considerations

Genome3D represents a significant step forward in genomic data visualization, with potential to enrich educational practices and promote inclusion. However, to fully meet the demands of biotechnology, biomedical engineering, and accessibility for individuals with visual impairments, the tool would require expanded functionality and additional resources tailored to these specific applications.


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


### The Genome3D application interface:

![Genome3D Example](genome3d.png)

### 3D genome representation rendered in the browser:

![Genome3D Example](modelo.png)

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
Developed by the Laboratory of Bioinformatics and Omics Science (LaBiOmicS).
