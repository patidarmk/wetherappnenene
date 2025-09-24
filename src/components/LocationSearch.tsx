import * as React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LocationSearchProps {
  onSearch: (city: string) => void;
}

export function LocationSearch({ onSearch }: LocationSearchProps) {
  const [city, setCity] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto items-center space-x-2">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search for a city..."
          className="pl-10"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}