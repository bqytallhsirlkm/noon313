
import { BookOpen, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 islamic-pattern"></div>
      <div className="absolute inset-0 geometric-bg opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-amber-200/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-emerald-300/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0">
            <div className="animate-fadeInUp">
              <h1 className="font-amiri text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                مؤسسة 
                <span className="text-gradient block">نون القرآنية</span>
              </h1>
              <p className="font-cairo text-xl lg:text-2xl text-gray-600 mb-4">
                رحلة نحو فهم وحفظ كتاب الله الكريم
              </p>
              <p className="font-cairo text-lg text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0">
                نسعى لتقديم تعليم قرآني متميز يجمع بين الأصالة والمعاصرة، لنبني جيلاً محباً لكتاب الله، متقناً لتلاوته وتجويده
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-cairo font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  ابدأ رحلتك الآن
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-cairo font-semibold transition-all duration-300 transform hover:scale-105">
                  تعرف على برامجنا
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-6 h-6 text-emerald-600 ml-2" />
                  <span className="font-cairo text-3xl font-bold text-emerald-600">500+</span>
                </div>
                <p className="font-cairo text-gray-600">طالب وطالبة</p>
              </div>
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <BookOpen className="w-6 h-6 text-emerald-600 ml-2" />
                  <span className="font-cairo text-3xl font-bold text-emerald-600">50+</span>
                </div>
                <p className="font-cairo text-gray-600">حافظ للقرآن</p>
              </div>
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="w-6 h-6 text-emerald-600 ml-2" />
                  <span className="font-cairo text-3xl font-bold text-emerald-600">15+</span>
                </div>
                <p className="font-cairo text-gray-600">سنة خبرة</p>
              </div>
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Star className="w-6 h-6 text-emerald-600 ml-2" />
                  <span className="font-cairo text-3xl font-bold text-emerald-600">20+</span>
                </div>
                <p className="font-cairo text-gray-600">معلم متخصص</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center animate-float shadow-2xl">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <BookOpen className="w-20 h-20 text-emerald-600 mx-auto mb-4" />
                    <p className="font-amiri text-2xl lg:text-3xl font-bold text-emerald-700">
                      وَنُنَزِّلُ مِنَ الْقُرْآنِ
                    </p>
                    <p className="font-amiri text-xl lg:text-2xl font-bold text-emerald-700">
                      مَا هُوَ شِفَاءٌ وَرَحْمَةٌ
                    </p>
                    <p className="font-cairo text-sm text-gray-600 mt-2">الإسراء: 82</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-emerald-300/30 rounded-full animate-pulse"></div>
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-amber-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
