// // @ https://github.com/cwmoo740/jest-svg-transformer/issues/3#issuecomment-911774849
// import path from 'path';

// module.exports = {
//   process(src, filePath) {
//     if (path.extname(filePath) !== '.svg') {
//       return src;
//     }

//     const name = `svg-${path.basename(filePath, '.svg')}`
//       .split(/\W+/)
//       .map((x) => `${x.charAt(0).toUpperCase()}${x.slice(1)}`)
//       .join('');

//     return `
// const React = require('react');
// function ${name}(props) {
//   return React.createElement(
//     'svg',
//     Object.assign({}, props, {'data-file-name': ${name}.name})
//   );
// }
// module.exports = ${name};
//             `;
//   },
// };
