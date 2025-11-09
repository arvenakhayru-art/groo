import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pelanggan GROO',
    type: 'customer',
    content: 'Praktis banget! Gak perlu keluar rumah, barber langsung datang dengan peralatan lengkap. Hasil potongan rambutnya juga rapi, puas banget!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjU2NzA4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Pelanggan GROO',
    type: 'customer',
    content: 'Aplikasinya mudah digunakan, harganya transparan, dan hairstylist-nya profesional. Sekarang GROO jadi pilihan utama untuk perawatan rambut saya.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjYxMzExN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Ahmad Rizki',
    role: 'Mitra GROO',
    type: 'partner',
    content: 'Jadi mitra GROO benar-benar meningkatkan penghasilan saya. Saya bisa atur jadwal sendiri dan dapat banyak customer. Sistemnya juga transparan dan pembayaran cepat.',
    rating: 5
  },
  {
    name: 'Diana Putri',
    role: 'Pelanggan GROO',
    type: 'customer',
    content: 'Layanan terbaik! Saya order untuk acara keluarga, dan hairstylist datang tepat waktu. Semua keluarga saya puas dengan hasilnya. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MjUzNTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Rudi Hermawan',
    role: 'Mitra GROO',
    type: 'partner',
    content: 'Platform yang sangat membantu barber seperti saya untuk menjangkau lebih banyak klien. Support dari tim GROO juga responsif. Terima kasih GROO!',
    rating: 5
  },
  {
    name: 'Maya Kusuma',
    role: 'Pelanggan GROO',
    type: 'customer',
    content: 'Sebagai working mom, GROO sangat membantu. Bisa pesan layanan salon saat weekend tanpa ribet. Anak-anak juga bisa ikut potong rambut di rumah.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjYxMzExN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group h-full"
    >
      <div className="h-full bg-gradient-to-br from-white to-purple-50/30 rounded-2xl p-6 border border-purple-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        {/* Type Badge */}
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs ${
            testimonial.type === 'partner' 
              ? 'bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] text-white' 
              : 'bg-purple-100 text-purple-700'
          }`}>
            {testimonial.type === 'partner' ? '⭐ Mitra' : '👤 Pelanggan'}
          </span>
        </div>

        {/* Stars */}
        <div className="flex space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center space-x-3">
          {testimonial.avatar ? (
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          )}
          <div>
            <p style={{ fontWeight: 600 }} className="text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight">
            <span style={{ fontWeight: 700 }}>Apa Kata </span>
            <span className="bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Mereka
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengar langsung dari pelanggan dan mitra kami tentang pengalaman mereka dengan GROO.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: '10,000+', label: 'Pengguna Aktif' },
            { value: '500+', label: 'Mitra Profesional' },
            { value: '4.9/5', label: 'Rating Rata-rata' },
            { value: '50,000+', label: 'Layanan Selesai' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent mb-2" style={{ fontWeight: 700 }}>
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
