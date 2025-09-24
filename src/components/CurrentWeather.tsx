import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherData } from '@/data/weather';
import { Wind, Droplets, Thermometer } from 'lucide-react';

interface CurrentWeatherProps {
  data: WeatherData;
}

export function CurrentWeather({ data }: CurrentWeatherProps) {
  const { city, country, current } = data;
  const Icon = current.icon;

  return (
    <Card className="w-full bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">{city}, {country}</CardTitle>
        <p className="text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <Icon className="w-24 h-24 text-yellow-500" />
          <div>
            <p className="text-7xl font-bold text-gray-900">{current.temp}°C</p>
            <p className="text-xl text-gray-600 capitalize">{current.condition}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 text-center">
          <div className="flex flex-col items-center">
            <Thermometer className="w-6 h-6 text-blue-500 mb-1" />
            <p className="font-semibold text-lg">{current.feelsLike}°C</p>
            <p className="text-sm text-gray-500">Feels Like</p>
          </div>
          <div className="flex flex-col items-center">
            <Wind className="w-6 h-6 text-gray-500 mb-1" />
            <p className="font-semibold text-lg">{current.windSpeed} km/h</p>
            <p className="text-sm text-gray-500">Wind</p>
          </div>
          <div className="flex flex-col items-center">
            <Droplets className="w-6 h-6 text-cyan-500 mb-1" />
            <p className="font-semibold text-lg">{current.humidity}%</p>
            <p className="text-sm text-gray-500">Humidity</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}