import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Edit2, Trash2, LogOut, X, Store } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminPanel = ({ onBack, onLogout }) => {
  const [umkmList, setUmkmList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUMKM, setEditingUMKM] = useState(null);
  const [showDetail, setShowDetail] = useState(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    owner: '',
    phone: '',
    address: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    loadUMKM();
  }, []);

  const loadUMKM = () => {
    const storedUMKM = localStorage.getItem('umkmData');
    if (storedUMKM) {
      setUmkmList(JSON.parse(storedUMKM));
    }
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem('umkmData', JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingUMKM) {
      const updatedList = umkmList.map(umkm => 
        umkm.id === editingUMKM.id ? { ...formData, id: editingUMKM.id } : umkm
      );
      setUmkmList(updatedList);
      saveToLocalStorage(updatedList);
      toast({
        title: "Berhasil!",
        description: "Data UMKM berhasil diperbarui",
      });
    } else {
      const newUMKM = {
        ...formData,
        id: Date.now().toString()
      };
      const updatedList = [...umkmList, newUMKM];
      setUmkmList(updatedList);
      saveToLocalStorage(updatedList);
      toast({
        title: "Berhasil!",
        description: "UMKM baru berhasil ditambahkan",
      });
    }

    resetForm();
  };

  const handleEdit = (umkm) => {
    setEditingUMKM(umkm);
    setFormData(umkm);
    setShowDetail(null);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updatedList = umkmList.filter(umkm => umkm.id !== id);
    setUmkmList(updatedList);
    saveToLocalStorage(updatedList);
    toast({
      title: "Berhasil!",
      description: "UMKM berhasil dihapus",
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: '',
      owner: '',
      phone: '',
      address: '',
      description: '',
      image: ''
    });
    setEditingUMKM(null);
    setShowForm(false);
  };

  const handleShowDetail = (umkm) => {
    setShowDetail(umkm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 hover:text-green-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Kembali</span>
              </button>
              <div className="h-6 w-px bg-green-500" />
              <h1 className="text-2xl font-bold">Panel Admin UMKM</h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-green-800">Kelola Data UMKM</h2>
            <p className="text-gray-600">Total: {umkmList.length} UMKM terdaftar</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Tambah UMKM
          </button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-green-800">
                {editingUMKM ? 'Edit UMKM' : 'Tambah UMKM Baru'}
              </h3>
              <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama UMKM *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="Makanan & Minuman">Makanan & Minuman</option>
                    <option value="Fashion & Kerajinan">Fashion & Kerajinan</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Pertanian">Pertanian</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Pemilik *
                  </label>
                  <input
                    type="text"
                    value={formData.owner}
                    onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Gambar *
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="Contoh: Traditional Indonesian handicraft workshop"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Deskripsikan gambar yang ingin ditampilkan</p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {editingUMKM ? 'Update UMKM' : 'Simpan UMKM'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                >
                  Batal
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Nama UMKM</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Kategori</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Pemilik</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">No. Telepon</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {umkmList.map((umkm, index) => (
                  <tr key={umkm.id} className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Store className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">{umkm.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {umkm.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{umkm.owner}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{umkm.phone}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleShowDetail(umkm)}
                          className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors"
                          title="Lihat Detail"
                        >
                          <Store className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(umkm)}
                          className="p-2 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(umkm.id)}
                          className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {umkmList.length === 0 && (
              <div className="text-center py-12">
                <Store className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Belum ada data UMKM</p>
                <p className="text-gray-400 text-sm">Klik tombol "Tambah UMKM" untuk menambah data</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showDetail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 relative">
              <button
                onClick={() => setShowDetail(null)}
                className="absolute top-4 right-4 text-white hover:text-green-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-white">Detail UMKM</h2>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-500 block mb-1">Nama UMKM</label>
                    <p className="text-lg font-bold text-gray-900">{showDetail.name}</p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 block mb-1">Kategori</label>
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {showDetail.category}
                    </span>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 block mb-1">Pemilik</label>
                    <p className="text-gray-900">{showDetail.owner}</p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 block mb-1">No. Telepon</label>
                    <p className="text-gray-900">{showDetail.phone}</p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 block mb-1">Alamat</label>
                    <p className="text-gray-900">{showDetail.address}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-500 block mb-1">Gambar</label>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        alt={showDetail.name}
                        className="w-full h-full object-cover"
                       src="https://images.unsplash.com/photo-1552752003-b533638caaf4" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 block mb-1">Deskripsi</label>
                    <p className="text-gray-900 leading-relaxed">{showDetail.description}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => handleEdit(showDetail)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Edit2 className="w-5 h-5" />
                  Edit UMKM
                </button>
                <button
                  onClick={() => setShowDetail(null)}
                  className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;