import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Store, Phone, MapPin, ExternalLink } from 'lucide-react';

const UMKMSection = () => {
  const [umkmList, setUmkmList] = useState([]);

  useEffect(() => {
    const storedUMKM = localStorage.getItem('umkmData');
    if (storedUMKM) {
      setUmkmList(JSON.parse(storedUMKM));
    } else {
      const defaultUMKM = [
        {
          id: '1',
          name: 'Keripik Singkong Ibu Siti',
          category: 'Makanan & Minuman',
          owner: 'Ibu Siti Nurhaliza',
          phone: '0812-3456-7890',
          address: 'Jl. Raya Cibunigeulis No. 45',
          description: 'Memproduksi keripik singkong dengan berbagai varian rasa yang renyah dan gurih',
          image: 'Traditional Indonesian chips snack production workshop'
        },
        {
          id: '2',
          name: 'Batik Cibunigeulis',
          category: 'Fashion & Kerajinan',
          owner: 'Bapak Ahmad Suryadi',
          phone: '0813-7890-1234',
          address: 'Jl. Kerajinan No. 12',
          description: 'Produsen batik tulis dengan motif khas Cibunigeulis yang indah dan berkualitas',
          image: 'Indonesian batik textile workshop with traditional patterns'
        },
        {
          id: '3',
          name: 'Kopi Gunung Hijau',
          category: 'Makanan & Minuman',
          owner: 'Bapak Dedi Hermawan',
          phone: '0821-5678-9012',
          address: 'Jl. Perkebunan No. 78',
          description: 'Kopi arabika premium hasil perkebunan lokal dengan cita rasa yang khas',
          image: 'Indonesian coffee plantation with arabica beans'
        },
        {
          id: '4',
          name: 'Mebel Jati Lestari',
          category: 'Furniture',
          owner: 'Bapak Usman Wijaya',
          phone: '0822-3456-7891',
          address: 'Jl. Industri No. 23',
          description: 'Produsen furniture kayu jati berkualitas tinggi dengan desain modern dan klasik',
          image: 'Traditional Indonesian teak wood furniture workshop'
        }
      ];
      localStorage.setItem('umkmData', JSON.stringify(defaultUMKM));
      setUmkmList(defaultUMKM);
    }
  }, []);

  return (
    <section id="umkm" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">UMKM Desa Cibunigeulis</h2>
          <p className="text-lg text-gray-600">Dukung produk lokal dan UMKM desa kami</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umkmList.map((umkm, index) => (
            <motion.div
              key={umkm.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt={umkm.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {umkm.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-800 mb-1">{umkm.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Store className="w-4 h-4" />
                      {umkm.owner}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{umkm.description}</p>

                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    {umkm.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    {umkm.address}
                  </p>
                </div>

                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Lihat Detail
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {umkmList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Belum ada data UMKM tersedia</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UMKMSection;