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
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-blue-500/50 to-transparent [mask-image:radial-gradient(ellipse_at_left,black_10%,transparent_70%)]" />
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-red-500/50 to-transparent [mask-image:radial-gradient(ellipse_at_right,black_10%,transparent_70%)]" />

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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">1. Nama</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">2. Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-white">3. Nomor WhatsApp</label>
                <Input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-white">4. Umur</label>
                <Input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="instagramUsername" className="block text-sm font-medium text-white">5. Real Account Instagram</label>
                <Input
                  type="text"
                  id="instagramUsername"
                  name="instagramUsername"
                  value={formData.instagramUsername}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="currentCity" className="block text-sm font-medium text-white">6. Kota Sekarang</label>
                <Input
                  type="text"
                  id="currentCity"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-white">7. Pendidikan Terakhir</label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md bg-white/10 text-white placeholder-white/50 border-gray-600"
                >
                  <option value="">Pilih Pendidikan</option>
                  {educationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-white">8. Institusi Pendidikan Terakhir</label>
                <Input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="workExperience" className="block text-sm font-medium text-white">9. Pengalaman Kerja dan Jabatan</label>
                <Textarea
                  id="workExperience"
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="mt-1 bg-white/10 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  10. Apakah kamu/pasangan terdaftar sebagai agen di Allianz/di tempat lain?
                </label>
                <div className="space-y-4">
                  <select
                    name="agentStatus"
                    value={formData.agentStatus}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md bg-white/10 text-white placeholder-white/50 border-gray-600"
                  >
                    <option value="">Pilih Status</option>
                    <option value="Ya">Ya</option>
                    <option value="Tidak">Tidak</option>
                    <option value="Perusahaan Lain">Perusahaan Selain Allianz</option>
                  </select>

                  {formData.agentStatus === 'Perusahaan Lain' && (
                    <Input
                      type="text"
                      name="otherCompanyName"
                      placeholder="Sebutkan nama perusahaan"
                      value={formData.otherCompanyName}
                      onChange={handleChange}
                      className="mt-2 bg-white/10 text-white placeholder-white/50"
                    />
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="selfiePhoto" className="block text-sm font-medium text-white mb-2">
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
                  className="mt-1 bg-white/10 text-white placeholder-white/50 h-11 py-2 file:mr-4 file:py-2 file:px-4 
                    file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 
                    file:text-white hover:file:bg-blue-600 file:h-full file:transition-colors"
                />
                {isSubmitting && (
                  <p className="text-xs text-yellow-500 mt-1">
                    Sedang mengupload foto...
                  </p>
                )}
                {formData.selfiePhoto && (
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-green-500">
                      ✓ Foto berhasil diupload
                    </p>
                    <a 
                      href={formData.selfiePhoto} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Lihat foto yang diupload
                    </a>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white hover:from-blue-600 hover:to-red-600 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Form'}
              </Button>
            </form>

            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500 text-center">Form berhasil dikirim!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 text-center">Gagal mengirim form. Silakan coba lagi.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
