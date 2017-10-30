exports.customFormat = (data) => {
  const spritesheetImageUrl = data.sprites[0].image;

  const sharedSelector = data.sprites.map(sprite => `.icon-${sprite.name}`).join(', ');

  const shared = dli(`
    ${sharedSelector} {
      background: url(${spritesheetImageUrl})
    }
  `);

  const perImage = data.sprites
    .map(sprite => dli(`
      .icon-${sprite.name} {
        width: ${sprite.width}px;
        height: ${sprite.height}px;
        background-position: ${sprite.offset_x}px ${sprite.offset_y}px;
      }
    `))
    .join('');

  return `${shared}\n${perImage}`;
};

exports.customFormatRetina = (data) => {
  const spritesheetImageUrl = data.sprites[0].image;

  const sharedSelector = data.sprites.map(sprite => `.icon-${sprite.name}`).join(', ');

  const shared = dli(`
    ${sharedSelector} {
      background-image: url(${spritesheetImageUrl});
    }
  `);

  const perImage = data.sprites
    .map(sprite => dli(`
      .icon-${sprite.name} {
        background-position: ${sprite.offset_x}px ${sprite.offset_y}px;
      }
    `))
    .join('');

  const thecss = dli(`
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      ${sharedSelector} {
        background-image: url(${data.retina_spritesheet.image});
        background-size: ${data.spritesheet.width}px ${data.spritesheet.height}px;
      }
    }
  `);

  return `${shared}\n${thecss}\n${perImage}`;
};

function dli(s) {
  const lines = s.split('\n').filter(s => s.trim().length);
  const lastIndentLength = /^\s*/.exec(lines[lines.length - 1])[0].length;
  return s
    .split('\n')
    .map(line => line.slice(lastIndentLength))
    .join('\n');
}
