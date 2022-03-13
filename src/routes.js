import Home from "./routes/Home.svelte";
import Divide from "./routes/Divide.svelte";
import SetTime from "./routes/SetTime.svelte";
import Timer from "./routes/Timer.svelte";

const routes = {
  "/": Home,
  "/divide": Divide,
  "/set-time": SetTime,
  "/timer": Timer,
};

export default routes;
