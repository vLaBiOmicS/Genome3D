export const config = {
    cubeSize: 1,
    gap: 0.2,
    baseHeights: {
        'A': 3,
        'T': 4,
        'C': 5,
        'G': 6,
        'N': 2
    },

    getConfig() {
        return {
            cubeSize: this.cubeSize,
            gap: this.gap,
            baseHeights: this.baseHeights
        };
    }
};
