
import { Heart, Target, Eye, BookOpen, Users, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "الإخلاص",
      description: "العمل بصدق وإخلاص لوجه الله تعالى في خدمة كتابه الكريم"
    },
    {
      icon: BookOpen,
      title: "الجودة",
      description: "تقديم تعليم قرآني متميز وفق أحدث الطرق والمناهج التعليمية"
    },
    {
      icon: Users,
      title: "التكامل",
      description: "بناء شخصية متكاملة تجمع بين العلم الشرعي والأخلاق الحميدة"
    },
    {
      icon: Star,
      title: "التميز",
      description: "السعي للريادة في مجال التعليم القرآني والعلوم الشرعية"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-amiri text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            عن مؤسسة نون القرآنية
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-6"></div>
          <p className="font-cairo text-xl text-gray-600 max-w-3xl mx-auto">
            منارة علم ومعرفة تهدف إلى نشر تعاليم القرآن الكريم وبناء جيل محب لكتاب الله
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="font-amiri text-3xl font-bold text-gray-800 mb-6">
              رسالتنا ورؤيتنا
            </h3>
            
            <div className="space-y-8">
              {/* Mission */}
              <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-emerald-600 ml-3" />
                  <h4 className="font-cairo text-xl font-bold text-emerald-700">رسالتنا</h4>
                </div>
                <p className="font-cairo text-gray-700 leading-relaxed">
                  تقديم تعليم قرآني متميز يجمع بين الأصالة والمعاصرة، من خلال برامج تعليمية شاملة 
                  تهدف إلى إعداد جيل محب لكتاب الله، متقن لتلاوته وتجويده، عامل بأحكامه وآدابه.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-amber-600 ml-3" />
                  <h4 className="font-cairo text-xl font-bold text-amber-700">رؤيتنا</h4>
                </div>
                <p className="font-cairo text-gray-700 leading-relaxed">
                  أن نكون المؤسسة الرائدة في تعليم القرآن الكريم والعلوم الشرعية، 
                  ومنارة علم تشع بالهداية والنور لتحقيق مجتمع قرآني متميز.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-16 h-16 mx-auto mb-6" />
                <h4 className="font-amiri text-2xl font-bold mb-4">
                  "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ"
                </h4>
                <p className="font-cairo opacity-90">سورة الإسراء - آية 82</p>
              </div>
              
              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <h3 className="font-amiri text-3xl font-bold text-gray-800 text-center mb-12">
            قيمنا ومبادئنا
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover text-center"
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-cairo text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h4>
                <p className="font-cairo text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
