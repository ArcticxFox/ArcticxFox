const fs = require('fs');
const {
  PacmanRenderer,
  PlayerStyle
} = require('pacman-contribution-graph');

const renderer = new PacmanRenderer({
  username: 'ArcticxFox',
  platform: 'github',
  gameTheme: 'github-dark',
  playerStyle: PlayerStyle.OPPORTUNISTIC,

  svgCallback: (svg) => {
    fs.mkdirSync('output', { recursive: true });

    fs.writeFileSync(
      'output/pacman-contribution-graph.svg',
      svg
    );

    console.log('SVG generated!');
  }
});

renderer.start();
