import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center pl-16">
      <div className="max-w-2xl">
        <h1 className="text-8xl font-bold text-white mb-4">Pallette</h1>
        <h2 className="text-xl text-gray-300 mb-8">
          A note taking app powered by AI
        </h2>
        <div className="flex max-w-md gap-4">
          <Button variant="outline">Login</Button>
          <Button variant="outline">Register</Button>
        </div>
      </div>
    </div>
  );
}
