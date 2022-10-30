import { Button } from "@org/core";
import { useIsomorphicLayoutEffect } from "@org/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("@org docs page");
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-zinc-700">@org Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
