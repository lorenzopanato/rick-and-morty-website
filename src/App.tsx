import { SnackbarProvider } from "notistack";
import Router from "./Router";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function App() {
  const particleOptions = {
    preset: "stars",
    background: {
      color: {
        value: "",
      },
    },
  };

  const customInit = async (engine: Engine) => {
    const test = await loadStarsPreset(engine);
    return test;
  };

  return (
    <>
      <SnackbarProvider maxSnack={3}>
      <Particles options={particleOptions} init={customInit} />
        <Router />
      </SnackbarProvider>
    </>
  );
}

export default App;
