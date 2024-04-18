export type Rectangle = {
    height: number;
    width: number;
};
export type Cuboid = {
    height: number;
    width: number;
    depth: number;
};

export function rectangleArea(rectangles: Rectangle[]) {
    if (rectangles.length === 0) {
        throw "The list of rectangles cannot be empty!";
    }
    let biggestArea = 0;
    for (let rectangle of rectangles) {
        const area = rectangle.height * rectangle.width;
        if (area > biggestArea) {
            biggestArea = area;
        }
    }
    return biggestArea;
}

export function rectangleDiagonal(rectangles: Rectangle[]) {
    if (rectangles.length === 0) {
        throw "The list of rectangles cannot be empty!";
    }
    let longestDiagonal = 0;
    for (let rectangle of rectangles) {
        const diagonal = Math.hypot(rectangle.height, rectangle.width);
        if (diagonal > longestDiagonal) {
            longestDiagonal = diagonal;
        }
    }
    return longestDiagonal;
}

export function cuboidDiagonal(cuboids: Cuboid[]) {
    if (cuboids.length === 0) {
        throw "The list of cuboids cannot be empty!";
    }
    let longestCuboidDiagonal = 0;
    for (let cuboid of cuboids) {
        const diagonal = Math.hypot(cuboid.height, cuboid.width, cuboid.depth);
        if (diagonal > longestCuboidDiagonal) {
            longestCuboidDiagonal = diagonal;
        }
    }
    return longestCuboidDiagonal;
}
