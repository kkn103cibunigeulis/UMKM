import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Desa Cibunigeulis</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Desa yang indah dengan potensi UMKM dan pertanian yang berkembang pesat untuk kesejahteraan masyarakat.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-green-100">Jl. Raya Cibunigeulis No. 1, Kec. Cibunigeulis</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-green-100">0812-3456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-green-100">info@cibunigeulis.desa.id</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <div className="space-y-2 text-sm text-green-100">
              <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
              <p>Sabtu: 08.00 - 12.00 WIB</p>
              <p>Minggu & Libur: Tutup</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-100">
          <p>&copy; 2025 Desa Cibunigeulis. Semua hak dilindungi.</p>
          <p className="mt-2">Dibuat dengan ❤️ oleh KKN103Cibunigeulis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;