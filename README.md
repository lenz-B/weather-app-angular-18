# Weather App

## 📝 Description

A comprehensive Angular weather application that provides real-time weather information using OpenWeatherMap API. The app supports geolocation-based weather retrieval and city search functionality.

## ✨ Features

- 🌍 Automatic geolocation-based weather detection
- 🔍 City-based weather search
- 📊 Detailed weather information including:
  - Temperature
  - Humidity
  - Wind speed
  - Weather description
- 📱 Responsive design
- 🚨 Error handling for geolocation and weather data retrieval

## 🛠 Prerequisites

- Node.js (version 16.x or later)
- Angular CLI
- OpenWeatherMap API Key

## 💻 Technologies Used

- Angular
- RxJS
- OpenWeatherMap API
- Angular Material
- ngx-toastr

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lenz-B/weather-app-angular-18
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Key

Open `src/environments/environment.ts` and replace `'YOUR_API_KEY_HERE'` with your actual OpenWeatherMap API key.

## 🔧 Running the Application

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --configuration=production
```

## 📂 Project Structure

```
weather-app/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── weather-dashboard/
│   │   │   ├── weather-details/
│   │   │   └── search-location/
│   │   ├── services/
│   │   │   ├── weather.service.ts
│   │   │   └── geolocation.service.ts
│   │   ├── models/
│   │   │   ├── weather.model.ts
│   │   │   └── location.model.ts
│   │   └── interceptors/
│   └── environments/
│
├── angular.json
├── package.json
└── tsconfig.json
```

## 🧩 Key Components

- `WeatherDashboardComponent`: Main component for displaying weather information
- `WeatherService`: Service for fetching weather data from OpenWeatherMap API
- `SearchLocationComponent`: Component for city search functionality

## 📡 API Reference

- Weather data provided by OpenWeatherMap API
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)

## 📝 Environment Configuration

Configurations are managed in `environment.ts` and `environment.development.ts` files, allowing easy API key and environment-specific settings.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.


Project Link: [https://github.com/lenz-B/weather-app-angular-18](https://github.com/lenz-B/weather-app-angular-18)
