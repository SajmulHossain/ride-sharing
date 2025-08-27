# 🚖 GoTogether - Ride Sharing App

GoTogether is a modern ride sharing platform built with **React + TypeScript + Leaflet Maps + LocationIQ API**, designed for smooth pickup and destination search, real-time routing, and interactive map visualization.

---

## ✨ Features

- 🔍 **Search Location Autocomplete** (LocationIQ forward geocoding API)
- 📍 **Pick Current Location** with browser Geolocation API
- 🗺️ **Interactive Map** (Leaflet + OpenStreetMap)
- 📌 **Set Pickup & Destination** by typing or pinning on the map
- 🚦 **Route Visualization** between pickup and destination
- 📑 **Reverse Geocoding** (get place name from lat/lon)
- ⚡ **TypeScript + React Hook Form** integration

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **UI Components:** ShadCN/UI, TailwindCSS
- **Map & Geolocation:** Leaflet, React-Leaflet, LocationIQ API
- **Form Handling:** React Hook Form
- **Icons & Styling:** Lucide Icons, TailwindCSS
- **Toast & Alerts:** Sonner, ShadCN UI Alerts

---

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/go-together.git
   cd go-together
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add:
   ```bash
   VITE_LOCATIONIQ_KEY=your_api_key_here
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

---

## 🌍 Environment Variables

| Key                  | Description                               |
|-----------------------|-------------------------------------------|
| `VITE_LOCATIONIQ_KEY` | Your LocationIQ API key (get it from https://locationiq.com) |

---

## 🚀 Usage

### Search Locations
- Type a location in the input box → get autocomplete suggestions from **LocationIQ**.

### Select Pickup & Destination
- Either type the location or click on the **map pin**.

### Show Route
- After selecting both **pickup & destination**, the shortest route will be drawn on the map using **Leaflet Polyline**.

### Reverse Geocoding
- If you have **latitude & longitude**, the app can fetch the place name via **LocationIQ Reverse API**.

---

## 📖 API References

### Forward Geocoding (Search by text)
```http
https://us1.locationiq.com/v1/search?key=YOUR_API_KEY&q=SEARCH_TEXT&format=json
```

### Reverse Geocoding (Get name by lat/lon)
```http
https://us1.locationiq.com/v1/reverse.php?key=YOUR_API_KEY&lat=LAT&lon=LON&format=json
```

### Example Response
```json
{
  "display_name": "Shahbagh, Dhaka, Bangladesh",
  "lat": "23.738",
  "lon": "90.395",
  "address": {
    "city": "Dhaka",
    "country": "Bangladesh"
  }
}
```

---

## 🤝 Contribution Guide

1. Fork the project
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request 🎉

---

## 📜 License

This project is licensed under the **MIT License**.  
See [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**Sajmul Hossain**  
🚀 Web Developer | MERN Stack Enthusiast  
📧 Contact: [your-email@example.com](mailto:your-email@example.com)

---

⭐ If you like this project, don't forget to **star the repo**!
