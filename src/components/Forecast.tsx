import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherData } from '@/data/weather';

interface ForecastProps {
  data: WeatherData['forecast'];
}

export function Forecast({ data }: ForecastProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((day, index) => {
          const Icon = day.icon;
          return (
            <Card key={index} className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="font-bold text-lg text-gray-800">{day.day}</p>
              <p className="text-sm text-gray-500 mb-2">{day.date}</p>
              <Icon className="w-12 h-12 text-yellow-500 my-2" />
              <p className="text-lg font-semibold text-gray-900">{day.high}°</p>
              <p className="text-md text-gray-500">{day.low}°</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}