import * as THREE from 'https://cdn.skypack.dev/three@0.155.0';

export function create3DVisualization(sequence, config) {
    let scene, camera, renderer, genomeGroup;
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

    genomeGroup = new THREE.Group();

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
            const material = new THREE.MeshBasicMaterial({ color: color });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(posX + (x * (cubeSize + gap)), posY - (y * (cubeSize + gap)), 0);
            genomeGroup.add(cube);
            currentIndex++;
        }
    }

    scene.add(genomeGroup);

    camera.position.set(0, 0, 200);
    camera.lookAt(0, 0, 0);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

export function exportToSTL() {
    const stlExporter = new THREE.STLExporter();
    const stlString = stlExporter.parse(genomeGroup);
    const blob = new Blob([stlString], { type: 'application/sla' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'genome3d_model.stl';
    link.click();
}
