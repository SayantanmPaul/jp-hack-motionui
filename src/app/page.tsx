import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8  sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight">
          JusPay Hackathon UI Development Base Template
        </h1>
        <Button>
          <span className="font-semibold">ShadCN Test Button</span>
        </Button>
      </main>
    </div>
  );
};

export default HomePage;
