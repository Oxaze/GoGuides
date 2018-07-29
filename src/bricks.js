import Bricks from "bricks.js";

export function pack() {
    window.onload = () => {
        const bricksInstance = Bricks({
            container: ".home-wrapper",
            packed: "data-packed",
            sizes: [
                { columns: 1, gutter: 18 },
                { mq: "992px", columns: 2, gutter: 54 }
            ],
        });

        bricksInstance
            .on('pack', () => console.log('ALL grid items packed.'))
            .on('update', () => console.log('NEW grid items packed.'))
            .on('resize', size => console.log('The grid has be re-packed to accommodate a new BREAKPOINT.'));

        bricksInstance.resize(true).pack();

        // @ts-ignore
        if (module.hot) {
            var clientEmitter = require('webpack/hot/emitter')
            clientEmitter.on('webpackHotUpdate', () => {
                bricksInstance.resize(true).pack();
            })
        }
    }
}