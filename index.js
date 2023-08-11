window.addEventListener('resize', autoZoom);

const autoZoom = () => {
    const constant_width = 1536;

    if (innerWidth > constant_width) {
        const zoom = (innerWidth - constant_width) / constant_width;
        document.body.style.zoom = 1 + zoom;
    }
    else document.body.style.zoom = 1;
}