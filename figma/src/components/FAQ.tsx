import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Apa itu GROO?',
    answer: 'GROO adalah platform on-demand yang menghubungkan Anda dengan profesional salon dan barbershop yang datang langsung ke lokasi Anda. Anda bisa menikmati layanan grooming berkualitas tanpa perlu keluar rumah.'
  },
  {
    question: 'Bagaimana cara memesan layanan di GROO?',
    answer: 'Sangat mudah! Download aplikasi GROO dari Google Play Store, pilih layanan yang Anda inginkan, tentukan lokasi dan waktu, lalu pilih mitra profesional yang tersedia. Pembayaran dapat dilakukan melalui aplikasi dengan berbagai metode yang tersedia.'
  },
  {
    question: 'Berapa biaya layanan GROO?',
    answer: 'Biaya layanan bervariasi tergantung jenis layanan dan mitra yang Anda pilih. Semua harga sudah tertera jelas di aplikasi sebelum Anda melakukan pemesanan. Tidak ada biaya tersembunyi!'
  },
  {
    question: 'Apakah mitra GROO sudah terverifikasi?',
    answer: 'Ya, semua mitra GROO telah melalui proses seleksi dan verifikasi yang ketat. Mereka adalah profesional berpengalaman di bidang grooming dengan rating dan review yang dapat Anda lihat sebelum memilih.'
  },
  {
    question: 'Apakah saya perlu menyediakan peralatan?',
    answer: 'Tidak perlu! Mitra GROO membawa semua peralatan profesional yang dibutuhkan. Anda hanya perlu menyediakan tempat yang nyaman untuk melakukan layanan.'
  },
  {
    question: 'Bagaimana cara menjadi mitra GROO?',
    answer: 'Untuk menjadi mitra GROO, Anda harus memiliki keahlian di bidang grooming dengan pengalaman minimal 1 tahun dan peralatan kerja sendiri. Klik tombol "Daftar Mitra" di website kami untuk memulai proses pendaftaran.'
  },
  {
    question: 'Apakah GROO tersedia di kota saya?',
    answer: 'GROO saat ini beroperasi di beberapa kota besar di Indonesia dan terus berkembang. Cek aplikasi GROO untuk melihat ketersediaan layanan di lokasi Anda, atau hubungi customer service kami untuk informasi lebih lanjut.'
  },
  {
    question: 'Bagaimana jika saya perlu membatalkan pesanan?',
    answer: 'Anda dapat membatalkan pesanan melalui aplikasi. Kebijakan pembatalan dan pengembalian dana akan disesuaikan dengan waktu pembatalan. Detail lengkap dapat dilihat di syarat dan ketentuan aplikasi.'
  }
];

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-200 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="pr-8" style={{ fontWeight: 600 }}>{faq.question}</span>
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-[#7B3AED] to-[#9F7AEA] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-white" />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 bg-gradient-to-br from-purple-50/50 to-white">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
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
    <section id="faq" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-[#7B3AED]" />
            <span className="text-sm text-purple-700">Pertanyaan Umum</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight">
            <span style={{ fontWeight: 700 }}>Pertanyaan yang </span>
            <span className="bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Sering Diajukan
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang GROO. 
            Masih ada pertanyaan? Hubungi tim support kami.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-[#7B3AED] hover:text-[#9F7AEA] transition-colors"
          >
            <span style={{ fontWeight: 600 }}>Hubungi Customer Support</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
