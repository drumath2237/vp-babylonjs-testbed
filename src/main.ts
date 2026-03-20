import { Engine, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import "./style.css";

function main() {
  const canvas = document.getElementById("renderCanvas");
  if (canvas instanceof HTMLCanvasElement === false) {
    return;
  }

  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);

  const box = MeshBuilder.CreateBox("box", { size: 0.1 });
  box.position = new Vector3(0, 0.05, 0);

  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());
}

main();
