import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { TrendingUp, Calendar, Wallet, Shield, Star, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Penghasilan Fleksibel',
    description: 'Tentukan jadwal kerja sendiri dan dapatkan penghasilan tambahan yang menjanjikan.'
  },
  {
    icon: Calendar,
    title: 'Atur Waktu Sendiri',
    description: 'Bekerja sesuai waktu luang Anda, kapan dan dimana saja yang Anda inginkan.'
  },
  {
    icon: Wallet,
    title: 'Komisi Kompetitif',
    description: 'Dapatkan komisi menarik untuk setiap layanan yang Anda berikan.'
  },
  {
    icon: Shield,
    title: 'Jaminan Keamanan',
    description: 'Sistem pembayaran aman dan perlindungan asuransi untuk mitra kami.'
  }
];

export function PartnerSection() {
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
    <section id="mitra" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-[#7B3AED]" />
            <span className="text-sm text-purple-700">Bergabung Sebagai Mitra</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight">
            <span style={{ fontWeight: 700 }}>Jadilah Mitra </span>
            <span className="bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              GROO
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan profesional grooming yang sudah 
            meningkatkan penghasilan mereka bersama GROO.
          </p>
        </motion.div>

        {/* Benefits & Image Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjI1MjY1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mitra GROO Profesional"
                className="w-full h-auto"
              />
            </div>
            
            {/* Stats Overlay */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent mb-1" style={{ fontWeight: 700 }}>
                    4.9/5
                  </div>
                  <p className="text-sm text-gray-600">Rating Mitra</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl sm:text-3xl text-center mb-8" style={{ fontWeight: 700 }}>
            Syarat Menjadi Mitra GROO
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              'Memiliki keahlian di bidang grooming',
              'Pengalaman minimal 1 tahun',
              'Memiliki peralatan kerja sendiri',
              'Berkomitmen memberikan layanan terbaik'
            ].map((requirement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{requirement}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 rounded-full px-8"
            >
              Daftar Sekarang Sebagai Mitra
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
