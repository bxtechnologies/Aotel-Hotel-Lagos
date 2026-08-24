import { Room, Amenity } from './types';

export const rooms: Room[] = [
  {
    id: "classic-room",
    name: "Classic Sanctuary",
    description: "An elegant, thoughtfully designed space offering supreme comfort and modern sophistication.",
    longDescription: "Our Classic Sanctuary offers an intimate blend of understated luxury and modern convenience. Featuring bespoke furnishings, a plush queen-sized bed swathed in premium Egyptian cotton, and a meticulously appointed marble en-suite. Designed for the discerning traveler seeking a tranquil escape in the vibrant heart of Ikeja.",
    price: 45000,
    capacity: 2,
    size: "28 sqm",
    bedType: "1 Queen Bed",
    amenities: ["Climate Control", "High-Speed Wi-Fi", "4K Smart TV", "Marble Bathroom", "24/7 Room Service", "Work Desk"],
    featuredImage: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "deluxe-room",
    name: "Deluxe Haven",
    description: "Expansive luxury featuring premium amenities, a seating area, and elevated comfort.",
    longDescription: "Experience elevated living in our Deluxe Haven. This expansive suite features a sumptuous king-sized bed, a dedicated seating area for relaxation, and premium bath amenities. Floor-to-ceiling windows bathe the room in natural light, providing a truly restful environment after a busy day in Lagos.",
    price: 65000,
    capacity: 2,
    size: "38 sqm",
    bedType: "1 King Bed",
    amenities: ["Climate Control", "High-Speed Wi-Fi", "4K Smart TV", "Mini Bar", "Lounge Area", "Premium Toiletries", "Digital Safe", "24/7 Room Service"],
    featuredImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "executive-suite",
    name: "Executive Penthouse Suite",
    description: "The pinnacle of opulence with a separate living area, freestanding tub, and exclusive services.",
    longDescription: "Our Executive Penthouse Suite is the ultimate sanctuary of indulgence. It features a sprawling separate living room, an opulent king-sized bedroom, and a magnificent bathroom boasting a freestanding soaking tub and rain shower. Curated for executives and those who demand the absolute finest accommodation in Ikeja.",
    price: 95000,
    capacity: 3,
    size: "60 sqm",
    bedType: "1 King Bed",
    amenities: ["Climate Control", "Premium Wi-Fi", "Two 4K Smart TVs", "Living Room", "Fully Stocked Mini Bar", "Freestanding Tub", "Plush Bathrobes", "Espresso Machine", "Digital Safe", "Priority Room Service"],
    featuredImage: "https://images.unsplash.com/photo-1631049035182-249067d7618e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1631049035182-249067d7618e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];

export const amenitiesList: Amenity[] = [
  { id: "wifi", name: "Premium High-Speed Wi-Fi", icon: "Wifi" },
  { id: "ac", name: "Climate Control", icon: "Wind" },
  { id: "restaurant", name: "Fine Dining Restaurant", icon: "Utensils" },
  { id: "room-service", name: "24/7 Priority Room Service", icon: "BellRing" },
  { id: "parking", name: "Secure Valet Parking", icon: "Car" },
  { id: "reception", name: "24/7 Concierge & Reception", icon: "ConciergeBell" },
  { id: "security", name: "Advanced 24/7 Security", icon: "ShieldCheck" },
  { id: "tv", name: "4K Smart Entertainment", icon: "Tv" },
  { id: "breakfast", name: "Gourmet Complimentary Breakfast", icon: "Coffee" },
  { id: "laundry", name: "Express Laundry & Dry Cleaning", icon: "Shirt" }
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop", category: "Exterior", alt: "Magnificent Hotel Exterior" },
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop", category: "Rooms", alt: "Luxurious Deluxe Bedroom" },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop", category: "Dining", alt: "Elegant Restaurant Area" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", category: "Rooms", alt: "Classic Room Intricate Detail" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", category: "Interiors", alt: "Sophisticated Lounge Area" },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop", category: "Dining", alt: "Gourmet Breakfast Spread" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop", category: "Exterior", alt: "Architecture and Poolside" },
  { src: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1200&auto=format&fit=crop", category: "Interiors", alt: "Luxurious Bathroom" },
];
