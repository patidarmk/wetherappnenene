import * as React from 'react';
import { LocationSearch } from '@/components/LocationSearch';
import { CurrentWeather } from '@/components/CurrentWeather';
import { Forecast } from '@/components/Forecast';
import { weatherData, WeatherData } from '@/data/weather';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { showError } from '@/utils/toast';

const Index = () => {
  const [currentCity, setCurrentCity] = React.useState<string>('new york');
  const [currentWeather, setCurrentWeather] = React.useState<WeatherData | null>(weatherData['new york']);

  const handleSearch = (city: string) => {
    const cityData = weatherData[city.toLowerCase()];
    if (cityData) {
      setCurrentCity(city.toLowerCase());
      setCurrentWeather(cityData);
    } else {
      showError(`Weather data for "${city}" not found. Please try another city.`);
      setCurrentWeather(null);
    }
  };

  return (
    <div className="space-y-8">
      <LocationSearch onSearch={handleSearch} />
      
      {currentWeather ? (
        <div className="space-y-8">
          <CurrentWeather data={currentWeather} />
          <Forecast data={currentWeather.forecast} />
        </div>
      ) : (
        <Alert variant="destructive" className="max-w-md mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>City Not Found</AlertTitle>
          <AlertDescription>
            We couldn't find weather data for the city you searched for. Please try searching for "New York", "London", "Tokyo", or "Sydney".
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Index;