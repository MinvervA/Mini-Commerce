import { Button } from "./ui/button";

export const Body = () => {
  return (
    <div className="h-[90vh]">
      <Button>Shadcn Button</Button>
      <Button variant="destructive" size="lg">
        Shadcn Button
      </Button>
      <div className="size-[100px] flex justify-center items-center bg-blue-400">
        <div className="">Box</div>
      </div>
    </div>
  );
};
