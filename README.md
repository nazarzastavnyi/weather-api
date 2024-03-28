## Project Documentation: Weather Data API Integration

### Overview

This project aims to create a Node.js application that fetches weather data from the OpenWeatherMap API and stores it in a PostgreSQL database. The application exposes two APIs:

1. **POST API**: Accepts latitude, longitude, and data part as input, fetches weather data from the OpenWeatherMap API, and stores it in the database.
2. **GET API**: Retrieves weather data from the database based on latitude, longitude, and data part.

### APIs

#### POST API

- **Endpoint**: `/weather`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "lat": 40.7128,
    "lon": -74.0060,
    "part": "current"
  }

  ### GET API

- **Endpoint**: `/weather`
- **Method**: GET
- **Query Parameters**:
  - `lat`: Latitude
  - `lon`: Longitude
  - `part`: Data part
- **Description**: Retrieves weather data from the database based on the provided latitude, longitude, and data part.

## Response Format

For the GET API, the response is formatted as follows:

```json
{
  "sunrise": 1684926645,
  "sunset": 1684977332,
  "temp": 292.55,
  "feels_like": 292.87,
  "pressure": 1014,
  "humidity": 89,
  "uvi": 0.16,
  "wind_speed": 3.13
}
```
## Set up and run
You should create the your own file .env. Example you could find in .env.tpl. Than run docker compose up.
```
docker-compose up
```
## API
Swagger you could find by link /api
Example:
```
http://localhost:3000/api
```