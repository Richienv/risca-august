'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

emailjs.init("E20vj6TqXO0YXWICn"); // Initialize with your public key

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    instagramUsername: '',
    currentCity: '',
    lastEducation: '',
    universityName: '',
    workExperience: '',
    isAllianzAgent: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        "service_hn4zj9i", // Your service ID
        "template_1mi3iep", // Your correct template ID
        formData
      );
      console.log(result.text);
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', age: '', instagramUsername: '', currentCity: '',
        lastEducation: '', universityName: '', workExperience: '', isAllianzAgent: '', message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Sunshine linear gradient blur on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-blue-500/50 to-transparent [mask-image:linear-gradient(to_right,black,transparent)] [mask-image:radial-gradient(ellipse_at_left,black_10%,transparent_70%)]" />

      {/* Sunshine linear gradient blur on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-red-500/50 to-transparent [mask-image:linear-gradient(to_left,black,transparent)] [mask-image:radial-gradient(ellipse_at_right,black_10%,transparent_70%)]" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-2 text-white">5 Menit Bisa Ubah 7 Tahun Hidupmu!</h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-red-400 mb-8"></div>
            <p className="text-lg text-center text-white/80 mb-8">
              Jangan sia-siakan kesempatan ini! Isi form di bawah dan mulai perjalanan menuju kebebasan finansial dan sukses luar biasa. Ini bukan janji kosong, tapi kesempatan nyata untuk mengubah hidupmu selamanya.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Nama</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">Nomor Telepon</label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-white">Umur</label>
                <Input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="instagramUsername" className="block text-sm font-medium text-white">Username Instagram</label>
                <Input
                  type="text"
                  id="instagramUsername"
                  name="instagramUsername"
                  value={formData.instagramUsername}
                  onChange={handleChange}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="currentCity" className="block text-sm font-medium text-white">Kota Sekarang</label>
                <Input
                  type="text"
                  id="currentCity"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleChange}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="lastEducation" className="block text-sm font-medium text-white">Pendidikan Terakhir</label>
                <Input
                  type="text"
                  id="lastEducation"
                  name="lastEducation"
                  value={formData.lastEducation}
                  onChange={handleChange}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="universityName" className="block text-sm font-medium text-white">Nama Universitas</label>
                <Input
                  type="text"
                  id="universityName"
                  name="universityName"
                  value={formData.universityName}
                  onChange={handleChange}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="workExperience" className="block text-sm font-medium text-white">Pengalaman Kerja (Perusahaan & Jabatan)</label>
                <Textarea
                  id="workExperience"
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <div>
                <label htmlFor="isAllianzAgent" className="block text-sm font-medium text-white">Terdaftar sebagai Agen ALLIANZ?</label>
                <select
                  id="isAllianzAgent"
                  name="isAllianzAgent"
                  value={formData.isAllianzAgent}
                  onChange={handleChange}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full rounded-md"
                >
                  <option value="">Pilih</option>
                  <option value="Ya">Ya</option>
                  <option value="Tidak">Tidak</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">Pesan Tambahan</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 bg-white/10 text-white placeholder-white/50 w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white hover:from-blue-600 hover:to-red-600 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Kirim Pesan'}
              </Button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500 text-center">Form submitted successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 text-center">Error submitting form. Please try again.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
