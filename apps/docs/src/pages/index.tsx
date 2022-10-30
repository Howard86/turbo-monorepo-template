import { Button } from "@org/core";
import { useIsomorphicLayoutEffect } from "@org/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("@org docs page");
  }, []);
  return (
    <div>
      <h1>@org Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
