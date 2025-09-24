import { Sun, Cloud, CloudRain, CloudSnow, Wind, Droplets } from 'lucide-react';

export interface WeatherData {
  city: string;
  country: string;
  current: {
    temp: number;
    condition: string;
    icon: React.ElementType;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
  };
  forecast: {
    day: string;
    date: string;
    high: number;
    low: number;
    condition: string;
    icon: React.ElementType;
  }[];
}

export const weatherData: Record<string, WeatherData> = {
  "new york": {
    city: "New York",
    country: "USA",
    current: {
      temp: 22,
      condition: "Sunny",
      icon: Sun,
      humidity: 55,
      windSpeed: 10,
      feelsLike: 23,
    },
    forecast: [
      { day: "Tue", date: "Jun 11", high: 24, low: 16, condition: "Sunny", icon: Sun },
      { day: "Wed", date: "Jun 12", high: 21, low: 15, condition: "Partly Cloudy", icon: Cloud },
      { day: "Thu", date: "Jun 13", high: 19, low: 14, condition: "Showers", icon: CloudRain },
      { day: "Fri", date: "Jun 14", high: 23, low: 17, condition: "Sunny", icon: Sun },
      { day: "Sat", date: "Jun 15", high: 25, low: 18, condition: "Partly Cloudy", icon: Cloud },
    ],
  },
  "london": {
    city: "London",
    country: "UK",
    current: {
      temp: 15,
      condition: "Partly Cloudy",
      icon: Cloud,
      humidity: 70,
      windSpeed: 15,
      feelsLike: 14,
    },
    forecast: [
      { day: "Tue", date: "Jun 11", high: 18, low: 12, condition: "Showers", icon: CloudRain },
      { day: "Wed", date: "Jun 12", high: 17, low: 11, condition: "Partly Cloudy", icon: Cloud },
      { day: "Thu", date: "Jun 13", high: 19, low: 13, condition: "Sunny", icon: Sun },
      { day: "Fri", date: "Jun 14", high: 16, low: 10, condition: "Showers", icon: CloudRain },
      { day: "Sat", date: "Jun 15", high: 18, low: 12, condition: "Partly Cloudy", icon: Cloud },
    ],
  },
  "tokyo": {
    city: "Tokyo",
    country: "Japan",
    current: {
      temp: 28,
      condition: "Rainy",
      icon: CloudRain,
      humidity: 85,
      windSpeed: 8,
      feelsLike: 30,
    },
    forecast: [
      { day: "Tue", date: "Jun 11", high: 29, low: 22, condition: "Showers", icon: CloudRain },
      { day: "Wed", date: "Jun 12", high: 30, low: 23, condition: "Partly Cloudy", icon: Cloud },
      { day: "Thu", date: "Jun 13", high: 28, low: 21, condition: "Sunny", icon: Sun },
      { day: "Fri", date: "Jun 14", high: 27, low: 20, condition: "Showers", icon: CloudRain },
      { day: "Sat", date: "Jun 15", high: 29, low: 22, condition: "Partly Cloudy", icon: Cloud },
    ],
  },
    "sydney": {
    city: "Sydney",
    country: "Australia",
    current: {
      temp: 18,
      condition: "Clear",
      icon: Sun,
      humidity: 65,
      windSpeed: 20,
      feelsLike: 17,
    },
    forecast: [
      { day: "Tue", date: "Jun 11", high: 20, low: 12, condition: "Sunny", icon: Sun },
      { day: "Wed", date: "Jun 12", high: 19, low: 11, condition: "Partly Cloudy", icon: Cloud },
      { day: "Thu", date: "Jun 13", high: 17, low: 10, condition: "Showers", icon: CloudRain },
      { day: "Fri", date: "Jun 14", high: 18, low: 11, condition: "Sunny", icon: Sun },
      { day: "Sat", date: "Jun 15", high: 21, low: 13, condition: "Partly Cloudy", icon: Cloud },
    ],
  },
};