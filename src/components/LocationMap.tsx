import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Star } from 'lucide-react';
import { Button } from './ui/button';

// Mock data untuk mitra terdekat
const nearbyPartners = [
  {
    id: 1,
    name: 'Barber Pro Studio',
    rating: 4.9,
    reviews: 120,
    distance: '2.5 km',
    specialty: 'Potong Rambut & Cukur',
    position: { top: '30%', left: '40%' }
  },
  {
    id: 2,
    name: 'Elite Grooming',
    rating: 4.8,
    reviews: 95,
    distance: '3.2 km',
    specialty: 'Styling & Coloring',
    position: { top: '50%', left: '60%' }
  },
  {
    id: 3,
    name: 'Royal Cuts',
    rating: 5.0,
    reviews: 180,
    distance: '1.8 km',
    specialty: 'Perawatan Premium',
    position: { top: '60%', left: '35%' }
  }
];

export function LocationMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#7B3AED]" />
            <span className="text-sm text-purple-700">Lokasi Mitra</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight">
            <span style={{ fontWeight: 700 }}>Temukan Mitra </span>
            <span className="bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Terdekat
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ratusan mitra profesional tersebar di berbagai lokasi siap melayani Anda.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Map Display */}
          <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 h-[500px]">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            {/* Your Location Marker */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  <p className="text-xs">Lokasi Anda</p>
                </div>
                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-50"></div>
              </div>
            </motion.div>

            {/* Partner Markers */}
            {nearbyPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="absolute z-10"
                style={partner.position}
                onMouseEnter={() => setSelectedPartner(partner.id)}
                onMouseLeave={() => setSelectedPartner(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Info Card on Hover */}
                  {selectedPartner === partner.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 w-64 z-30"
                    >
                      <h4 className="mb-2">{partner.name}</h4>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center text-sm text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1">{partner.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({partner.reviews}+ review)</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{partner.specialty}</p>
                      <div className="flex items-center text-sm text-purple-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{partner.distance} dari Anda</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}

            {/* Map Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
              <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">+</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">−</span>
              </button>
            </div>

            {/* Location Button */}
            <div className="absolute bottom-6 left-6">
              <Button className="bg-white text-gray-900 hover:bg-gray-50 shadow-lg">
                <Navigation className="w-4 h-4 mr-2" />
                Lokasi Saya
              </Button>
            </div>
          </div>

          {/* Partner List */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {nearbyPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="mb-1">{partner.name}</h4>
                    <div className="flex items-center text-sm mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span>{partner.rating}</span>
                      <span className="text-gray-500 ml-1">({partner.reviews}+)</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{partner.specialty}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600">{partner.distance}</span>
                  <Button size="sm" variant="outline" className="rounded-full">
                    Lihat Detail
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
