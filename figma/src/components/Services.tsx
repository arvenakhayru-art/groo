import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, Paintbrush, User } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Potong Rambut',
    description: 'Gaya rambut modern dan klasik sesuai keinginan Anda dari barber profesional.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: User,
    title: 'Cukur & Jenggot',
    description: 'Layanan cukur halus dan styling jenggot untuk penampilan yang rapi dan menarik.',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    icon: Sparkles,
    title: 'Perawatan Wajah',
    description: 'Facial treatment dan perawatan kulit wajah untuk tampil lebih fresh dan percaya diri.',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    icon: Paintbrush,
    title: 'Hair Coloring',
    description: 'Pewarnaan rambut profesional dengan berbagai pilihan warna yang trendy.',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="mb-3">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Services() {
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
    <section id="layanan" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#7B3AED]" />
            <span className="text-sm text-purple-700">Layanan Kami</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight">
            <span style={{ fontWeight: 700 }}>Layanan Grooming</span>
            <br />
            <span className="bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Profesional untuk Anda
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai pilihan layanan salon dan barbershop berkualitas tinggi, 
            dilayani oleh profesional berpengalaman langsung di lokasi Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl sm:text-3xl text-center mb-12" style={{ fontWeight: 700 }}>
            Cara Menggunakan GROO
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Pilih Layanan',
                description: 'Buka aplikasi GROO dan pilih jenis layanan grooming yang Anda inginkan.'
              },
              {
                step: '2',
                title: 'Tentukan Lokasi & Waktu',
                description: 'Atur lokasi dan jadwal yang sesuai dengan kenyamanan Anda.'
              },
              {
                step: '3',
                title: 'Nikmati Layanan',
                description: 'Mitra profesional kami akan datang dan memberikan layanan terbaik.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl" style={{ fontWeight: 700 }}>
                  {item.step}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
