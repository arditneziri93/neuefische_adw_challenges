function createTree(n: number): string {
    let tree = "";

    let rowLength = calculateLength(n);
    for (let i: number = 1; i <= n; i++) {
        let row = "";
        let symbolLength = calculateLength(i);
        let spaceLength = (rowLength - symbolLength) / 2;
        for (let x: number = 1; x <= spaceLength; x++) {
            row += " ";
        }
        for (let y: number = 1; y <= symbolLength; y++) {
            row += "*";
        }
        tree += row + "\n";
    }

    return tree;
}

function calculateLength(n: number) {
    if (n > 1) {
        return 2 * n - 1;
    } else {
        return 1;
    }

}

console.log(createTree(10));
