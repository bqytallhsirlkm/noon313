
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "العنوان",
      details: ["المملكة العربية السعودية", "الرياض - حي النرجس"],
      color: "emerald"
    },
    {
      icon: Phone,
      title: "الهاتف",
      details: ["+966 XX XXX XXXX", "+966 XX XXX XXXX"],
      color: "blue"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@noon-quran.org", "admin@noon-quran.org"],
      color: "amber"
    },
    {
      icon: Clock,
      title: "أوقات العمل",
      details: ["السبت - الخميس: 8:00 ص - 10:00 م", "الجمعة: 4:00 م - 10:00 م"],
      color: "purple"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-amiri text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-6"></div>
          <p className="font-cairo text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في بدء رحلتكم القرآنية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fadeInUp">
            <h3 className="font-cairo text-2xl font-bold text-gray-800 mb-8">
              معلومات التواصل
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover"
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${info.color}-500 to-${info.color}-600 rounded-lg flex items-center justify-center ml-4 flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-cairo text-lg font-bold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-cairo text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-emerald-600 rounded-2xl p-6 text-white">
              <h4 className="font-cairo text-xl font-bold mb-4">
                تواصل سريع
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center bg-white text-emerald-600 px-6 py-3 rounded-lg font-cairo font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا
                </button>
                <button className="flex items-center justify-center bg-emerald-700 text-white px-6 py-3 rounded-lg font-cairo font-semibold hover:bg-emerald-800 transition-all duration-300 transform hover:scale-105">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-cairo text-2xl font-bold text-gray-800 mb-6">
                أرسل لنا رسالة
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-cairo text-gray-700 font-semibold mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 font-cairo"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cairo text-gray-700 font-semibold mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 font-cairo"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-cairo text-gray-700 font-semibold mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 font-cairo"
                      placeholder="+966 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-cairo text-gray-700 font-semibold mb-2">
                    البرنامج المهتم به
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 font-cairo"
                  >
                    <option value="">اختر البرنامج</option>
                    <option value="children">برنامج الأطفال</option>
                    <option value="youth">برنامج الشباب</option>
                    <option value="adults">برنامج الكبار</option>
                    <option value="custom">برنامج مخصص</option>
                  </select>
                </div>

                <div>
                  <label className="block font-cairo text-gray-700 font-semibold mb-2">
                    رسالتك
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 font-cairo resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-cairo font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 ml-2" />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
