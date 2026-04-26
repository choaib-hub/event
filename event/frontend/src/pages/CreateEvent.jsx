import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateEvent = ({ addEvent }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    image: '',
    description: ''
  });

  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const handleFile = (file) => {
    if (!file) return;

    // Validation: Type
    if (!file.type.startsWith('image/')) {
      setUploadError('يرجى اختيار ملف صورة صالح (JPG, PNG, etc.)');
      return;
    }

    // Validation: Size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('حجم الصورة كبير جداً. الحد الأقصى هو 5 ميجابايت.');
      return;
    }

    setUploadError('');
    setUploadProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventToSubmit = {
      ...formData,
      image: formData.image || 'https://via.placeholder.com/400x200?text=Event'
    };
    addEvent(eventToSubmit);
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] py-20 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12 text-center space-y-4">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white font-semibold transition-all group mb-4">
          <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-all">←</span>
          Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Créer un Événement</h1>
        <p className="text-slate-500 text-lg">Rassemblez les gens pour quelque chose d'incroyable.</p>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-3xl transition-all duration-500 hover:border-indigo-500/30 hover:bg-slate-900/60 shadow-2xl shadow-black/20 p-1 bg-gradient-to-br from-indigo-500/20 to-transparent">
        <div className="bg-slate-950 rounded-[calc(1.5rem-1px)] p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-400 mb-2 ml-1 tracking-wide">Titre de l'événement</label>
                <input 
                  type="text" 
                  placeholder="Comment s'appelle l'événement ?"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-800 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2 ml-1 tracking-wide">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-800 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2 ml-1 tracking-wide">Lieu</label>
                <input 
                  type="text" 
                  placeholder="Où cela se passe-t-il ?"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-800 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              {/* Image Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-400 mb-2 ml-1 tracking-wide">صورة الغلاف</label>
                
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current.click()}
                  className={`relative group cursor-pointer w-full min-h-[200px] rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-6 ${
                    isDragging 
                    ? 'border-indigo-500 bg-indigo-500/10 scale-[1.01]' 
                    : 'border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files[0])}
                  />

                  {previewUrl ? (
                    <div className="relative w-full h-full flex flex-col items-center gap-4">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="max-h-[300px] rounded-xl object-cover shadow-2xl"
                      />
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewUrl(null);
                          setFormData({...formData, image: ''});
                          setUploadProgress(0);
                        }}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform duration-300">
                        🖼️
                      </div>
                      <div>
                        <p className="text-white font-semibold">اسحب وأفلت الصورة هنا أو اضغط للاختيار</p>
                        <p className="text-slate-500 text-xs mt-1">يدعم PNG, JPG حتى 5 ميجابايت</p>
                      </div>
                    </div>
                  )}

                  {/* Progress Bar */}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 overflow-hidden rounded-b-2xl">
                      <div 
                        className="h-full bg-indigo-500 transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  )}
                </div>

                {uploadError && (
                  <p className="text-red-400 text-xs mt-2 ml-1">{uploadError}</p>
                )}
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-400 mb-2 ml-1 tracking-wide">Description</label>
                <textarea 
                  rows="6"
                  placeholder="Dites à vos invités à quoi s'attendre..."
                  className="w-full px-5 py-4 rounded-2xl border border-slate-800 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-[0.98] flex items-center justify-center gap-2 flex-1">
                Lancer l'Événement
              </button>
              <button 
                type="button" 
                onClick={() => navigate('/')}
                className="bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-2xl border border-slate-700/50 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 flex-1"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;