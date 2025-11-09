import { Button } from './ui/button';
import { Smartphone, Users, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#7B3AED] via-[#8B4AED] to-[#9F7AEA]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Layanan Salon & Barbershop Datang ke Lokasi Anda</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
              <span className="block" style={{ fontWeight: 700 }}>Salon & Barbershop</span>
              <span className="block" style={{ fontWeight: 700 }}>Profesional</span>
              <span className="block" style={{ fontWeight: 700 }}>Datang ke Lokasi Anda</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-lg mx-auto lg:mx-0">
              Nikmati layanan grooming berkualitas tanpa perlu keluar rumah. 
              Pesan kapan saja, dimana saja dengan GROO.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              <Button 
                size="lg"
                className="bg-white text-[#7B3AED] hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full px-8 w-full sm:w-auto"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Download Aplikasi
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm rounded-full px-8 w-full sm:w-auto"
              >
                <Users className="w-5 h-5 mr-2" />
                Daftar Jadi Mitra
              </Button>
            </motion.div>

            {/* Download Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-4"
            >
              <a href="#" className="hover:scale-105 transition-transform">
                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm" style={{ fontWeight: 600 }}>Google Play</div>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto w-[300px]">
                <div className="bg-white rounded-[3rem] shadow-2xl shadow-black/30 p-3">
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-[2.5rem] overflow-hidden">
                    <div className="p-6 space-y-4">
                      {/* App Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Lokasi Anda</p>
                          <p style={{ fontWeight: 600 }}>Surabaya, Jawa Timur</p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                      </div>

                      {/* Services */}
                      <div className="grid grid-cols-3 gap-3">
                        {['Potong Rambut', 'Cukur', 'Facial'].map((service, i) => (
                          <div key={i} className="bg-white rounded-2xl p-3 text-center shadow-sm">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg mx-auto mb-2"></div>
                            <p className="text-xs">{service}</p>
                          </div>
                        ))}
                      </div>

                      {/* Mitra Card */}
                      <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                          <div className="flex-1">
                            <p style={{ fontWeight: 600 }}>Barber Pro</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <span className="text-yellow-500 mr-1">⭐</span>
                              <span>4.9 (120+)</span>
                              <span className="mx-2">•</span>
                              <span>2.5 km</span>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] rounded-xl" size="sm">
                          Pesan Sekarang
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-center">
                <div className="text-2xl bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent mb-1" style={{ fontWeight: 700 }}>
                  500+
                </div>
                <p className="text-xs text-gray-600">Mitra Profesional</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-center">
                <div className="text-2xl bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent mb-1" style={{ fontWeight: 700 }}>
                  10K+
                </div>
                <p className="text-xs text-gray-600">Pelanggan Puas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
