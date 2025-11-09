import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Smartphone, Users, Download } from 'lucide-react';

export function CTA() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Customer CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] rounded-3xl p-8 lg:p-10 text-white h-full">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 right-5 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-5 left-5 w-40 h-40 border-2 border-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl mb-4" style={{ fontWeight: 700 }}>
                  Mulai Gunakan GROO
                </h3>

                <p className="text-purple-100 mb-6 leading-relaxed">
                  Download aplikasi GROO sekarang dan nikmati layanan grooming profesional 
                  langsung di lokasi Anda. Mudah, cepat, dan berkualitas!
                </p>

                {/* Download Button */}
                <Button
                  size="lg"
                  className="bg-white text-[#7B3AED] hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full px-8 mb-6 w-full sm:w-auto"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Aplikasi
                </Button>

                {/* Play Store Badge */}
                <a href="#" className="inline-block hover:scale-105 transition-transform">
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

                {/* Trust Indicators */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-purple-100">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Gratis Download</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Promo Khusus</span>
                  </div>
                </div>
              </div>

              {/* Decorative Blob */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl"
              />
            </div>
          </motion.div>

          {/* Partner CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-10 text-white h-full">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-5 right-5 w-40 h-40 border-2 border-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl mb-4" style={{ fontWeight: 700 }}>
                  Bergabung Sebagai Mitra
                </h3>

                <p className="text-purple-100 mb-6 leading-relaxed">
                  Jadilah bagian dari GROO dan tingkatkan penghasilan Anda. 
                  Atur jadwal sendiri, dapatkan lebih banyak pelanggan, dan nikmati berbagai benefit menarik!
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  {[
                    'Penghasilan tambahan yang menjanjikan',
                    'Jadwal kerja fleksibel',
                    'Sistem pembayaran aman dan cepat',
                    'Dukungan penuh dari tim GROO'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-purple-100">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full px-8 w-full sm:w-auto"
                >
                  Daftar Jadi Mitra
                </Button>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl mb-1" style={{ fontWeight: 700 }}>500+</div>
                    <p className="text-xs text-purple-100">Mitra Aktif</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-1" style={{ fontWeight: 700 }}>4.9/5</div>
                    <p className="text-xs text-purple-100">Rating Mitra</p>
                  </div>
                </div>
              </div>

              {/* Decorative Blob */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-400 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
