import "./style.css";

const bootstrap = async () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
  <canvas id="game-canvas"/>
`;
};

await bootstrap();
