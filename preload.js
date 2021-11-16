window.addEventListener("DOMContentLoaded", () => {
    for (const dependency of ["chrome", "node", "electron"]) {
        console.log(`${dependency} version:`, process.versions[dependency]);
    }
});
