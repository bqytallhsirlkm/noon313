
import { BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "عن المؤسسة", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "البرامج", href: "#programs" },
    { name: "تواصل معنا", href: "#contact" }
  ];

  const programs = [
    { name: "برنامج الأطفال", href: "#programs" },
    { name: "برنامج الشباب", href: "#programs" },
    { name: "برنامج الكبار", href: "#programs" },
    { name: "دورات التجويد", href: "#services" },
    { name: "دورات متخصصة", href: "#services" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "text-blue-600" },
    { icon: Twitter, href: "#", color: "text-sky-500" },
    { icon: Instagram, href: "#", color: "text-pink-600" },
    { icon: Youtube, href: "#", color: "text-red-600" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-amiri text-xl font-bold">مؤسسة نون القرآنية</h3>
                  <p className="text-sm text-gray-400 font-cairo">Noon Quranic Foundation</p>
                </div>
              </div>
              
              <p className="font-cairo text-gray-300 mb-6 leading-relaxed">
                منارة علم ومعرفة تهدف إلى نشر تعاليم القرآن الكريم وبناء جيل محب لكتاب الله
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} hover:bg-gray-700 transition-all duration-300 transform hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-cairo text-lg font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-cairo text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full ml-3 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-cairo text-lg font-bold mb-6">برامجنا</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href={program.href}
                      className="font-cairo text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full ml-3 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-cairo text-lg font-bold mb-6">معلومات التواصل</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-emerald-400 ml-3 mt-1 flex-shrink-0" />
                  <div className="font-cairo text-gray-300">
                    <p>المملكة العربية السعودية</p>
                    <p>الرياض - حي النرجس</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-400 ml-3" />
                  <span className="font-cairo text-gray-300">+966 XX XXX XXXX</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-400 ml-3" />
                  <span className="font-cairo text-gray-300">info@noon-quran.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="font-cairo text-xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h4>
            <p className="font-cairo text-gray-400 mb-6">احصل على آخر الأخبار والفعاليات</p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white font-cairo"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-cairo font-semibold transition-all duration-300 transform hover:scale-105">
                اشترك
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-cairo text-gray-400 text-center md:text-right mb-4 md:mb-0">
              <p>© 2024 مؤسسة نون القرآنية. جميع الحقوق محفوظة.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="font-cairo text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="font-cairo text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
