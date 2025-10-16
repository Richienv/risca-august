'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import axios from 'axios';

emailjs.init("E20vj6TqXO0YXWICn");

const IMGBB_API_KEY = 'e4d11d5c424059e8d3e239ad6c40f49b'; // Get this from imgbb.com

// Replace with your Cloudinary details
const CLOUDINARY_UPLOAD_PRESET = 'martha-leads';
const CLOUDINARY_CLOUD_NAME = 'dvlsjfbiw';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    instagramUsername: '',
    currentCity: '',
    education: '',
    institution: '',
    workExperience: '',
    agentStatus: '',
    otherCompanyName: '',
    selfiePhoto: '' as string,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const educationOptions = [
    "Master's Degree",
    "Bachelor's Degree",
    "Diploma",
    "High School",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const uploadImageToCloudinary = async (base64Image: string): Promise<string> => {
    try {
      const formData = new FormData();
      const base64Data = base64Image.split(',')[1] || base64Image;
      
      formData.append('file', `data:image/jpeg;base64,${base64Data}`);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      formData.append('cloud_name', CLOUDINARY_CLOUD_NAME);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data?.secure_url) {
        return response.data.secure_url;
      } else {
        throw new Error('Invalid response from Cloudinary');
      }
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.error?.message) {
          throw new Error(`Upload failed: ${error.response.data.error.message}`);
        }
      }
      throw new Error('Failed to upload image. Please try again.');
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        e.target.value = '';
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran file tidak boleh lebih dari 2MB');
        e.target.value = '';
        return;
      }

      try {
        setIsSubmitting(true);
        
        const base64String = await convertToBase64(file);
        console.log('Converting to base64 successful');
        
        const imageUrl = await uploadImageToCloudinary(base64String);
        console.log('Upload successful, URL:', imageUrl);

        setFormData(prevState => ({
          ...prevState,
          selfiePhoto: imageUrl
        }));

        alert('Foto berhasil diupload!');
      } catch (error) {
        console.error('Upload error:', error);
        alert(error instanceof Error ? error.message : 'Gagal mengupload gambar');
        e.target.value = '';
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailData = {
        ...formData,
        selfiePhoto: formData.selfiePhoto,
      };

      const result = await emailjs.send(
        "service_hn4zj9i",
        "template_1mi3iep",
        emailData
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      setFormData({
        name: '', email: '', whatsapp: '', age: '', instagramUsername: '', 
        currentCity: '', education: '', institution: '', workExperience: '', 
        agentStatus: '', otherCompanyName: '', selfiePhoto: ''
      });
      
      const fileInput = document.getElementById('selfiePhoto') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error sending email:', error);
      let errorMessage = 'Gagal mengirim form. Silakan coba lagi.';
      setSubmitStatus('error');
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-red-950 via-black to-red-900">
      {/* Red grid pattern background - matching other sections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="contactGridRed" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contactGridRed)" />
      </svg>

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="max-w-3xl mx-auto">
            {/* Header Section - matching other sections */}
            <div className="text-center mb-12">
              <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
                Siap Mulai Journey?
              </h2>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-slate-50 mb-4">
                Isi Form Ini
                <span className="block font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mt-2 leading-relaxed tracking-wide">
                  Dan Mulai Raih 10 Juta
                </span>
              </h1>
              <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                5 menit isi form, lifetime financial freedom. Ribuan Gen-Z udah duluan, kapan giliran lo?
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-black/20 backdrop-blur-md border border-red-500/20 rounded-2xl p-8">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">1. Nama</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">2. Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="contoh@email.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">3. Nomor WhatsApp</label>
                <Input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="08123456789"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">4. Umur</label>
                <Input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="25"
                />
              </div>

              <div>
                <label htmlFor="instagramUsername" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">5. Real Account Instagram</label>
                <Input
                  type="text"
                  id="instagramUsername"
                  name="instagramUsername"
                  value={formData.instagramUsername}
                  onChange={handleChange}
                  required
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="@username_instagram"
                />
              </div>

              <div>
                <label htmlFor="currentCity" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">6. Kota Sekarang</label>
                <Input
                  type="text"
                  id="currentCity"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleChange}
                  required
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="Jakarta"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">7. Pendidikan Terakhir</label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-black/30 border border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light px-3 py-2"
                >
                  <option value="" className="bg-black text-slate-300">Pilih Pendidikan</option>
                  {educationOptions.map((option) => (
                    <option key={option} value={option} className="bg-black text-slate-300">{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">8. Institusi Pendidikan Terakhir</label>
                <Input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="Universitas Indonesia"
                />
              </div>

              <div>
                <label htmlFor="workExperience" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">9. Pengalaman Kerja dan Jabatan</label>
                <Textarea
                  id="workExperience"
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                  placeholder="Contoh: Staff Marketing di PT ABC (2 tahun), Fresh Graduate, dll."
                />
              </div>

              <div>
                <label className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">
                  10. Apakah kamu/pasangan terdaftar sebagai agen di MANULIFE/di tempat lain?
                </label>
                <div className="space-y-4">
                  <select
                    name="agentStatus"
                    value={formData.agentStatus}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md bg-black/30 border border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light px-3 py-2"
                  >
                    <option value="" className="bg-black text-slate-300">Pilih Status</option>
                    <option value="Ya" className="bg-black text-slate-300">Ya</option>
                    <option value="Tidak" className="bg-black text-slate-300">Tidak</option>
                    <option value="Perusahaan Lain" className="bg-black text-slate-300">Perusahaan Selain MANULIFE</option>
                  </select>

                  {formData.agentStatus === 'Perusahaan Lain' && (
                    <Input
                      type="text"
                      name="otherCompanyName"
                      placeholder="Sebutkan nama perusahaan"
                      value={formData.otherCompanyName}
                      onChange={handleChange}
                      className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light"
                    />
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="selfiePhoto" className="block text-sm font-light text-slate-300 mb-2 font-mono tracking-wide">
                  11. Attach Foto Selfie (Max 2MB)
                </label>
                <Input
                  type="file"
                  id="selfiePhoto"
                  name="selfiePhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Upload foto selfie kamu disini (Max 2MB)"
                  className="bg-black/30 border-red-500/20 text-slate-100 placeholder-slate-400 focus:border-red-500/50 focus:ring-red-500/20 font-light h-11 py-2 file:mr-4 file:py-2 file:px-4 
                    file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-500 
                    file:text-white hover:file:bg-red-600 file:h-full file:transition-colors"
                />
                {isSubmitting && (
                  <p className="text-xs text-yellow-400 mt-1 font-light">
                    Sedang mengupload foto...
                  </p>
                )}
                {formData.selfiePhoto && (
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-green-400 font-light">
                      ✓ Foto berhasil diupload
                    </p>
                    <a 
                      href={formData.selfiePhoto} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-red-400 hover:text-red-300 transition-colors font-light"
                    >
                      Lihat foto yang diupload
                    </a>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 font-semibold text-base py-3 h-auto hover:scale-105 shadow-lg hover:shadow-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Form & Mulai Journey'}
              </Button>
            </form>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center"
              >
                <p className="text-green-400 font-light">✅ Form berhasil dikirim! Tim kami akan segera menghubungi lo.</p>
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
              >
                <p className="text-red-400 font-light">❌ Gagal mengirim form. Silakan coba lagi.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
