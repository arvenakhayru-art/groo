import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logoDark from 'figma:asset/c0e4b2d345cbe724409c5964a3857e49288d8844.png';

export function Footer() {
  const footerLinks = {
    'Tentang GROO': ['Tentang Kami', 'Cara Kerja', 'Blog', 'Karir', 'Press Kit'],
    'Layanan': ['Potong Rambut', 'Cukur & Jenggot', 'Perawatan Wajah', 'Hair Coloring', 'Semua Layanan'],
    'Mitra': ['Daftar Mitra', 'Keuntungan Mitra', 'Syarat & Ketentuan', 'Panduan Mitra', 'Partner Support'],
    'Bantuan': ['Pusat Bantuan', 'FAQ', 'Hubungi Kami', 'Kebijakan Privasi', 'Syarat Layanan']
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <img src={logoDark} alt="GROO" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Platform on-demand untuk layanan salon dan barbershop profesional yang datang langsung ke lokasi Anda.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#7B3AED] flex-shrink-0 mt-0.5" />
                <a href="mailto:support@groo.id" className="hover:text-white transition-colors">
                  support@groo.id
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#7B3AED] flex-shrink-0 mt-0.5" />
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#7B3AED] flex-shrink-0 mt-0.5" />
                <span>Surabaya, Jawa Timur</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#7B3AED] hover:to-[#9F7AEA] flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="py-8 border-t border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="mb-2">Download Aplikasi GROO</h4>
              <p className="text-sm text-gray-400">Tersedia di Google Play Store</p>
            </div>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 GROO. Semua hak dilindungi.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat Layanan</a>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
