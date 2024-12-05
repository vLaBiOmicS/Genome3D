// Função para criar a visualização 3D
export function create3DVisualization(sequence, config, scene, camera, renderer, visualization) {
    if (scene) {
        renderer.dispose();
        visualization.innerHTML = '';
    }

    scene = new THREE.Scene();
    const aspect = visualization.clientWidth / visualization.clientHeight;
    camera = new THREE.OrthographicCamera(-50 * aspect, 50 * aspect, 50, -50, 1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(visualization.clientWidth, visualization.clientHeight);
    visualization.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const { cubeSize, gap, baseHeights } = config;
    const sideLength = Math.ceil(Math.sqrt(sequence.length));
    const totalWidth = (sideLength * cubeSize) + ((sideLength - 1) * gap);
    let posX = -totalWidth / 2, posY = totalWidth / 2;

    const genomeGroup = new THREE.Group();
    let currentIndex = 0;

    for (let y = 0; y < sideLength; y++) {
        for (let x = 0; x < sideLength; x++) {
            if (currentIndex >= sequence.length) break;
            const base = sequence[currentIndex];
            const colorMap = { 
                'A': 0xff0000, 
                'T': 0x00ff00, 
                'C': 0x0000ff, 
                'G': 0xffff00, 
                'N': 0x999999 
            };
            const color = colorMap[base] || 0x999999;
            const height = baseHeights[base] || cubeSize;

            const geometry = new THREE.BoxGeometry(cubeSize, height, cubeSize);
            const material = new THREE.MeshStandardMaterial({ color });
            const cube = new THREE.Mesh(geometry, material);

            cube.position.set(posX, height / 2, posY);
            genomeGroup.add(cube);

            posX += cubeSize + gap;
            currentIndex++;
        }
        posX = -totalWidth / 2;
        posY -= cubeSize + gap;
    }

    scene.add(genomeGroup);
    camera.position.set(0, 50, 0);
    camera.lookAt(0, 0, 0);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}
