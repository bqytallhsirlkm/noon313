
import { BookOpen, Users, GraduationCap, Clock, Star, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "تحفيظ القرآن الكريم",
      description: "برامج متدرجة لحفظ القرآن الكريم مع معلمين مختصين وطرق تعليم حديثة",
      features: ["حفظ متدرج", "مراجعة دورية", "اختبارات شهرية"],
      color: "emerald"
    },
    {
      icon: Users,
      title: "تعليم التجويد",
      description: "تعلم أحكام التجويد وتطبيقها عملياً مع التدريب على النطق الصحيح",
      features: ["أحكام التجويد", "التطبيق العملي", "تصحيح الأخطاء"],
      color: "blue"
    },
    {
      icon: GraduationCap,
      title: "دورات متخصصة",
      description: "دورات في علوم القرآن والسيرة النبوية والفقه للمتقدمين",
      features: ["علوم القرآن", "السيرة النبوية", "الفقه الإسلامي"],
      color: "amber"
    },
    {
      icon: Clock,
      title: "مرونة في المواعيد",
      description: "جدول زمني مرن يناسب جميع الأعمار والظروف مع إمكانية التعلم عن بُعد",
      features: ["مواعيد مرنة", "تعلم عن بُعد", "جلسات فردية"],
      color: "purple"
    }
  ];

  const achievements = [
    { icon: Star, number: "500+", label: "طالب وطالبة" },
    { icon: Award, number: "50+", label: "حافظ للقرآن" },
    { icon: Users, number: "20+", label: "معلم متخصص" },
    { icon: BookOpen, number: "15+", label: "سنة خبرة" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-amiri text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            خدماتنا وبرامجنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-6"></div>
          <p className="font-cairo text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من البرامج التعليمية المصممة لتناسب جميع المستويات والأعمار
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-cairo text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="font-cairo text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full ml-3`}></div>
                    <span className="font-cairo text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full mt-6 bg-${service.color}-600 hover:bg-${service.color}-700 text-white py-3 rounded-lg font-cairo font-semibold transition-all duration-300 transform hover:scale-105`}>
                اعرف المزيد
              </button>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <h3 className="font-amiri text-3xl font-bold text-gray-800 text-center mb-12">
            إنجازاتنا بالأرقام
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-cairo text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
                  {achievement.number}
                </div>
                <p className="font-cairo text-gray-600 font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
