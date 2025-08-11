import React, { useState } from 'react';
import { Search, Clock, Users, MapPin, Star } from 'lucide-react';

const AlgerianFoodPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'الأطباق الرئيسية', 'الحلويات', 'المشروبات', 'المقبلات', 'الخبز والمعجنات'];

  const foods = [
    // الأطباق الرئيسية
    {
      id: 1,
      name: 'الكسكس',
      category: 'الأطباق الرئيسية',
      description: 'الطبق الوطني الجزائري المصنوع من السميد المطبوخ على البخار، يُقدم عادة مع اللحم والخضار والحمص في مرق لذيذ',
      ingredients: 'السميد، اللحم، الجزر، البصل، الحمص، الكوسا، الطماطم، التوابل',
      cookingTime: '2-3 ساعات',
      serves: '6-8 أشخاص',
      region: 'جميع أنحاء الجزائر',
      difficulty: 'متوسط',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'الرشتة',
      category: 'الأطباق الرئيسية',
      description: 'نودلز جزائرية تقليدية مصنوعة يدوياً، تُطبخ مع الدجاج أو اللحم في صلصة غنية بالطماطم والبصل',
      ingredients: 'دقيق، بيض، دجاج، طماطم، بصل، حمص، توابل',
      cookingTime: '1-2 ساعة',
      serves: '4-6 أشخاص',
      region: 'الجزائر العاصمة وضواحيها',
      difficulty: 'صعب',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'الشوربة',
      category: 'الأطباق الرئيسية',
      description: 'حساء جزائري تقليدي غني بالخضار واللحم، يُقدم عادة في رمضان لكسر الصيام',
      ingredients: 'لحم الضأن، طماطم، بصل، كرفس، خضار مشكلة، عدس، توابل',
      cookingTime: '45 دقيقة - 1 ساعة',
      serves: '4-6 أشخاص',
      region: 'جميع أنحاء الجزائر',
      difficulty: 'سهل',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'الدولمة',
      category: 'الأطباق الرئيسية',
      description: 'خضار محشوة باللحم المفروم والأرز، تشمل الكوسا والباذنجان والطماطم والفلفل',
      ingredients: 'كوسا، باذنجان، فلفل، لحم مفروم، أرز، بصل، بقدونس، نعناع',
      cookingTime: '1.5-2 ساعة',
      serves: '6-8 أشخاص',
      region: 'المناطق الساحلية',
      difficulty: 'متوسط',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'المحشي',
      category: 'الأطباق الرئيسية',
      description: 'ورق العنب المحشو بالأرز واللحم المفروم والأعشاب العطرية',
      ingredients: 'ورق العنب، أرز، لحم مفروم، بصل، بقدونس، نعناع، عصير ليمون',
      cookingTime: '2-2.5 ساعة',
      serves: '6-8 أشخاص',
      region: 'شمال الجزائر',
      difficulty: 'صعب',
      image: 'https://images.unsplash.com/photo-1594998893017-36147d8c4e3d?w=300&h=200&fit=crop'
    },

    // الحلويات
    {
      id: 6,
      name: 'البقلاوة',
      category: 'الحلويات',
      description: 'حلوى تقليدية مصنوعة من طبقات رقيقة من العجين محشوة بالمكسرات ومحلاة بالعسل أو الشربات',
      ingredients: 'عجينة رقيقة، لوز، عسل، زبدة، ماء الورد',
      cookingTime: '1-1.5 ساعة',
      serves: '10-12 قطعة',
      region: 'جميع أنحاء الجزائر',
      difficulty: 'صعب',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop'
    },
    {
      id: 7,
      name: 'القريوش',
      category: 'الحلويات',
      description: 'حلوى مقلية على شكل وردة، مغطاة بالعسل أو السكر البودرة',
      ingredients: 'دقيق، بيض، سكر، زيت للقلي، عسل، ماء الزهر',
      cookingTime: '30-45 دقيقة',
      serves: '15-20 قطعة',
      region: 'قسنطينة والشرق الجزائري',
      difficulty: 'متوسط',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop'
    },
    {
      id: 8,
      name: 'المقروض',
      category: 'الحلويات',
      description: 'حلوى تقليدية محشوة بالتمر والمكسرات، مغطاة بالسكر البودرة',
      ingredients: 'سميد، تمر، لوز، زبدة، ماء الزهر، سكر بودرة',
      cookingTime: '1 ساعة',
      serves: '20-25 قطعة',
      region: 'الجنوب الجزائري',
      difficulty: 'متوسط',
      image: 'https://images.unsplash.com/photo-1586985289906-406988974504?w=300&h=200&fit=crop'
    },

    // المشروبات
    {
      id: 9,
      name: 'الشاي بالنعناع',
      category: 'المشروبات',
      description: 'الشاي التقليدي الجزائري المحضر بالنعناع الطازج والسكر',
      ingredients: 'شاي أخضر، نعناع طازج، سكر',
      cookingTime: '10-15 دقيقة',
      serves: '4-6 أكواب',
      region: 'جميع أنحاء الجزائر',
      difficulty: 'سهل',
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&h=200&fit=crop'
    },
    {
      id: 10,
      name: 'القهوة التركية',
      category: 'المشروبات',
      description: 'قهوة قوية ومركزة تُقدم في أكواب صغيرة، جزء من الثقافة الجزائرية',
      ingredients: 'قهوة مطحونة ناعماً، سكر، ماء',
      cookingTime: '5-10 دقائق',
      serves: '2-4 أكواب',
      region: 'جميع أنحاء الجزائر',
      difficulty: 'سهل',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop'
    },

    // المقبلات
    {
      id: 11,
      name: 'البوراك',
      category: 'المقبلات',
      description: 'فطائر مقلية أو مخبوزة محشوة بالبطاطس، الجبن، أو اللحم',
      ingredients: 'عجينة رقيقة، بطاطس، جبن، بقدونس، بصل',
      cookingTime: '45 دقيقة - 1 ساعة',
      serves: '15-20 قطعة',
      region: 'شمال الجزائر',
      difficulty: 'متوسط',
      image: 'https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=300&h=200&fit=crop'
    },
    {
      id: 12,
      name: 'البريك',
      category: 'المقبلات',
      description: 'فطيرة رقيقة محشوة بالتونة أو اللحم والبيض، مقلية حتى تصبح ذهبية اللون',
      ingredients: 'ورق البريك، تونة، بيض، بقدونس، كبار',
      cookingTime: '20-30 دقيقة',
      serves: '8-10 قطع',
      region: 'شمال شرق الجزائر',
      difficulty: 'سهل',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop'
    },

    // الخبز والمعجنات
    {
      id: 13,
      name: 'الخبز التقليدي',
      category: 'الخبز والمعجنات',
      description: 'خبز جزائري تقليدي يُخبز في الفرن، له قشرة مقرمشة ونسيج ناعم من الداخل',
      ingredients: 'دقيق، خميرة، ملح، ماء، زيت زيتون',
      cookingTime: '2-3 ساعات (مع وقت التخمير)',
      serves: '6-8 أشخاص',
      region: 'جميع أنحاء الجزائر',
      difficulty: 'متوسط',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop'
    },
    {
      id: 14,
      name: 'الملوي',
      category: 'الخبز والمعجنات',
      description: 'خبز رقيق ومطوي يُقدم عادة مع الشاي أو كوجبة إفطار',
      ingredients: 'دقيق، سميد، زبدة، ملح، ماء',
      cookingTime: '1-1.5 ساعة',
      serves: '4-6 قطع',
      region: 'وسط وشرق الجزائر',
      difficulty: 'متوسط',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=200&fit=crop'
    }
  ];

  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         food.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'سهل': return 'text-green-600';
      case 'متوسط': return 'text-yellow-600';
      case 'صعب': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">
            🇩🇿 المطبخ الجزائري التقليدي
          </h1>
          <p className="text-xl text-center opacity-90">
            اكتشف نكهات وتقاليد الطبخ الجزائري الأصيل
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن الطبق المفضل لديك..."
                className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="lg:w-1/3">
              <select
                className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map(food => (
            <div key={food.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {food.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{food.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{food.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">وقت الطبخ: {food.cookingTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">يكفي: {food.serves}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">المنطقة: {food.region}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span className={`font-medium ${getDifficultyColor(food.difficulty)}`}>
                      الصعوبة: {food.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">المقادير الرئيسية:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{food.ingredients}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">جرب البحث بكلمات أخرى أو اختر فئة مختلفة</p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">عن المطبخ الجزائري</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            يعتبر المطبخ الجزائري مزيجاً رائعاً من التأثيرات البربرية والعربية والعثمانية والفرنسية والأندلسية. 
            يتميز بالنكهات الغنية والتوابل العطرة واستخدام المكونات الطازجة المحلية. 
            من الكسكس الشهير عالمياً إلى الحلويات التقليدية الرائعة، يقدم المطبخ الجزائري تجربة طعام لا تُنسى 
            تعكس تاريخ وثقافة هذا البلد المتنوع.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlgerianFoodPage;