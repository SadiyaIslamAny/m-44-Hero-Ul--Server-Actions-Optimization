import { Button } from "@heroui/react";

const HeroPage = () => {
  return (
    <div className="p-6 space-x-4 mx-auto">
      <h2 className="text-4xl text-purple-600  font-bold mb-4">hero page</h2>

      <Button>
        hero action
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </div>
  );
};

export default HeroPage;