import { Label } from "./label";
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";

function Navbar() {
  return (
    <div className="w-full m-0 bg-opacity-80 bg-[var(--color-bg-navbar)] backdrop-blur-md fixed top-0 z-10 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Label className="text-xl font-bold">tiny-track</Label>
            <Button variant="link">Dashboard</Button>
            <Button variant="link">Settings</Button>
          </div>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
