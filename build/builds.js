const rollup = require('rollup');
const configs = require('./configs.js');

function build (configs) {
    let built = 0;
    const total = configs.length;
    const next = () => {
        buildEntry(configs[built]).then(() => {
            built++;
            if (built < total) {
                next();
            }
        }).catch(logError);
    }

    next();
}

function buildEntry (config) {
    const output = config.output;
    return rollup.rollup(config)
        .then(bundle => bundle.write(output));
}

function logError (e) {
    console.log(e);
}

build(configs);