
import { Clock, Users, BookOpen, Star, Calendar, CheckCircle } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "برنامج الأطفال",
      subtitle: "من 5 إلى 12 سنة",
      description: "برنامج مخصص للأطفال يركز على حفظ جزء عم مع تعلم الأخلاق الإسلامية",
      duration: "6 أشهر",
      sessions: "3 جلسات أسبوعياً",
      level: "مبتدئ",
      features: [
        "حفظ جزء عم كاملاً",
        "تعلم القراءة الصحيحة",
        "قصص الأنبياء",
        "الأخلاق الإسلامية",
        "أنشطة تفاعلية"
      ],
      color: "emerald",
      popular: false
    },
    {
      title: "برنامج الشباب",
      subtitle: "من 13 إلى 25 سنة",
      description: "برنامج شامل لحفظ القرآن مع التجويد والتفسير المبسط",
      duration: "سنة واحدة",
      sessions: "4 جلسات أسبوعياً",
      level: "متوسط",
      features: [
        "حفظ 10 أجزاء",
        "أحكام التجويد",
        "التفسير المبسط",
        "السيرة النبوية",
        "المسابقات القرآنية"
      ],
      color: "blue",
      popular: true
    },
    {
      title: "برنامج الكبار",
      subtitle: "من 26 سنة فما فوق",
      description: "برنامج مرن للكبار مع إمكانية التعلم عن بُعد وجلسات فردية",
      duration: "مفتوح",
      sessions: "2 جلسة أسبوعياً",
      level: "جميع المستويات",
      features: [
        "جدول زمني مرن",
        "تعلم عن بُعد",
        "جلسات فردية",
        "مراجعة دورية",
        "متابعة شخصية"
      ],
      color: "amber",
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'from-emerald-500 to-emerald-600',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      blue: {
        bg: 'from-blue-500 to-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      amber: {
        bg: 'from-amber-500 to-amber-600',
        text: 'text-amber-600',
        border: 'border-amber-200',
        button: 'bg-amber-600 hover:bg-amber-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="programs" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-amiri text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            برامجنا التعليمية
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-6"></div>
          <p className="font-cairo text-xl text-gray-600 max-w-3xl mx-auto">
            اختر البرنامج المناسب لك من مجموعة متنوعة من البرامج المصممة خصيصاً لكل فئة عمرية
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color);
            
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${colorClasses.border} card-hover animate-fadeInUp overflow-hidden`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-cairo font-bold z-10">
                    الأكثر شعبية
                  </div>
                )}
                
                {/* Header */}
                <div className={`bg-gradient-to-r ${colorClasses.bg} p-6 text-white`}>
                  <h3 className="font-cairo text-2xl font-bold mb-2">
                    {program.title}
                  </h3>
                  <p className="opacity-90 font-cairo">
                    {program.subtitle}
                  </p>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="font-cairo text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  {/* Program Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Clock className={`w-5 h-5 ${colorClasses.text} ml-3`} />
                      <span className="font-cairo text-gray-700">
                        <span className="font-semibold">المدة:</span> {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className={`w-5 h-5 ${colorClasses.text} ml-3`} />
                      <span className="font-cairo text-gray-700">
                        <span className="font-semibold">الجلسات:</span> {program.sessions}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className={`w-5 h-5 ${colorClasses.text} ml-3`} />
                      <span className="font-cairo text-gray-700">
                        <span className="font-semibold">المستوى:</span> {program.level}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-cairo text-lg font-bold text-gray-800 mb-4">
                      ما ستتعلمه:
                    </h4>
                    <div className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className={`w-4 h-4 ${colorClasses.text} ml-2`} />
                          <span className="font-cairo text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full ${colorClasses.button} text-white py-3 rounded-lg font-cairo font-semibold transition-all duration-300 transform hover:scale-105`}>
                    سجل الآن
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl p-8 lg:p-12 text-white text-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h3 className="font-amiri text-3xl font-bold mb-4">
            هل تحتاج برنامجاً مخصصاً؟
          </h3>
          <p className="font-cairo text-xl mb-6 opacity-90">
            نوفر برامج مخصصة تناسب احتياجاتك الخاصة وظروفك الشخصية
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-cairo font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            تواصل معنا للاستشارة
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
