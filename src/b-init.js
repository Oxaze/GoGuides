import Bricks from "bricks.js";

export function test() {
    window.onload = () => {
        const sizes = [
            { columns: 1, gutter: 18 },
            { mq: "992px", columns: 2, gutter: 54 }
        ];
        const bricksInstance = Bricks({
            container: ".home-wrapper",
            packed: "data-packed",
            sizes: sizes,
            position: true
        });
        bricksInstance.pack();
        if (module.hot) {
            module.hot.dispose(() => {
                bricksInstance.pack();
            });
        }
    }
}