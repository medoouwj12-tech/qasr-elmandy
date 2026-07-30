// Initial official dataset for Qasr Al-Mandi (قصر المندي)

export const INITIAL_CATEGORIES = [
  {
    id: "cat_1",
    name_ar: "وجبات قصر المندى واللحوم",
    name_en: "Mandi & Meat Meals",
    icon: "UtensilsCrossed",
    order: 1
  },
  {
    id: "cat_2",
    name_ar: "صوانى قصر المندى",
    name_en: "Qasr Al-Mandi Platters",
    icon: "Flame",
    order: 2
  },
  {
    id: "cat_3",
    name_ar: "ركن المشويات",
    name_en: "Grill Corner",
    icon: "Beef",
    order: 3
  },
  {
    id: "cat_4",
    name_ar: "سندوتشات",
    name_en: "Sandwiches",
    icon: "Sandwich",
    order: 4
  },
  {
    id: "cat_5",
    name_ar: "مشروبات قصر المندى",
    name_en: "Beverages",
    icon: "Coffee",
    order: 5
  }
];

export const INITIAL_PRODUCTS = [
  // Category 1: وجبات قصر المندى واللحوم
  {
    id: "p1",
    category_id: "cat_1",
    name: "Quarter Mandi Chicken",
    price: 170.00,
    description: "Red Sauce + Basmati Rice + Salads",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 1
  },
  {
    id: "p2",
    category_id: "cat_1",
    name: "Half Mandi Chicken",
    price: 270.00,
    description: "Red Sauce + Basmati Rice + Salads",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 2
  },
  {
    id: "p3",
    category_id: "cat_1",
    name: "Quarter Mandi Meat",
    price: 400.00,
    description: "Same Rice and Salads",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 3
  },
  {
    id: "p4",
    category_id: "cat_1",
    name: "Mandi Lamb Shank",
    price: 550.00,
    description: "Rice and Salads",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 4
  },
  {
    id: "p5",
    category_id: "cat_1",
    name: "Chicken Kabsa or Biryani",
    price: 300.00,
    description: "أرز برياني فاخر مع دجاج محمر والتوابل الخليجية المميزة",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 5
  },
  {
    id: "p6",
    category_id: "cat_1",
    name: "Quarter Grilled Liver",
    price: 600.00,
    description: "ربع كبدة مشوية على الفحم مع السلطات",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 6
  },
  {
    id: "p7",
    category_id: "cat_1",
    name: "Quarter Grilled Chicken",
    price: 160.00,
    description: "Rice + Vegetables + Soup",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 7
  },
  {
    id: "p8",
    category_id: "cat_1",
    name: "Half Grilled Chicken",
    price: 220.00,
    description: "Rice + Vegetables + Soup",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 8
  },
  {
    id: "p9",
    category_id: "cat_1",
    name: "Grilled Chicken",
    price: 480.00,
    description: "Rice + Vegetables + Vegetables + Soup",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 9
  },
  {
    id: "p10",
    category_id: "cat_1",
    name: "1/4 kg Grilled Kebab",
    price: 300.00,
    description: "ربع كيلو كباب مشوي فاخر",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 10
  },
  {
    id: "p11",
    category_id: "cat_1",
    name: "1/4 kg Grilled Tarb",
    price: 300.00,
    description: "ربع كيلو طرب ضاني مشوي على الفحم",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 11
  },
  {
    id: "p12",
    category_id: "cat_1",
    name: "1/4 kg Grilled Lamb Ribs",
    price: 350.00,
    description: "ريش ضاني مشوية بدقة قصر المندي",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 12
  },
  {
    id: "p13",
    category_id: "cat_1",
    name: "1/4 kg Grilled Sausage",
    price: 200.00,
    description: "سجق مشوي على الجريل",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 13
  },
  {
    id: "p14",
    category_id: "cat_1",
    name: "1/4 kg Grilled Pure Lamb Liver",
    price: 300.00,
    description: "كبدة ضاني صافي مشوية",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 14
  },
  {
    id: "p15",
    category_id: "cat_1",
    name: "1/4 kg Grilled Fettelo",
    price: 300.00,
    description: "لحم فتيلو مشوي طري جداً",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 15
  },
  {
    id: "p16",
    category_id: "cat_1",
    name: "Two Grilled Quails",
    price: 300.00,
    description: "2 فرد سمان مشوي على الفحم",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 16
  },
  {
    id: "p17",
    category_id: "cat_1",
    name: "Two Stuffed Quails",
    price: 400.00,
    description: "2 فرد سمان محشي بالأرز بالخلطة",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 17
  },
  {
    id: "p18",
    category_id: "cat_1",
    name: "1 kg Lamb Kofta",
    price: 800.00,
    description: "كيلو كفتة ضاني بلدي مشوية",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 18
  },
  {
    id: "p19",
    category_id: "cat_1",
    name: "1 kg Beef Kofta",
    price: 800.00,
    description: "كيلو كفتة عجالي بلدي مشوية",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 19
  },
  {
    id: "p20",
    category_id: "cat_1",
    name: "1 kg Beef Kebab",
    price: 1100.00,
    description: "كيلو كباب عجالي فاخر",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 20
  },
  {
    id: "p21",
    category_id: "cat_1",
    name: "1 kg Lamb Kebab",
    price: 1400.00,
    description: "كيلو كباب ضاني بلدي فاخر",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 21
  },
  {
    id: "p22",
    category_id: "cat_1",
    name: "1 kg Lamb Tarb",
    price: 700.00,
    description: "كيلو طرب ضاني مشوي",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 22
  },
  {
    id: "p23",
    category_id: "cat_1",
    name: "Lamb Mozza",
    price: 550.00,
    description: "موزة ضاني مطبوخة بالطريقة المندي",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 23
  },
  {
    id: "p24",
    category_id: "cat_1",
    name: "Mixed Kebab with Kofta",
    price: 1200.00,
    description: "كيلو مشكل كباب مع كفتة ضاني بلدي",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 24
  },
  {
    id: "p25",
    category_id: "cat_1",
    name: "1 kg Mixed Grilled Meat Platter",
    price: 1100.00,
    description: "كيلو مشكل مشويات لحوم متنوعة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 25
  },
  {
    id: "p26",
    category_id: "cat_1",
    name: "Quarter Chicken with Rice and Kofta",
    price: 250.00,
    description: "وجبة ربع فرخة مع أرز بسمتي وكفتة",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 26
  },
  {
    id: "p27",
    category_id: "cat_1",
    name: "One Pigeon with Rice and Kofta",
    price: 300.00,
    description: "فرد حمام محشي مع أرز وكفتة",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 27
  },
  {
    id: "p28",
    category_id: "cat_1",
    name: "ربع فراخ مندى",
    price: 170.00,
    description: "صوص - ارز بسمتى برياني - سلطات",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 28
  },
  {
    id: "p29",
    category_id: "cat_1",
    name: "نص فراخ مندى",
    price: 270.00,
    description: "صوص - ارز بسمتى برياني - سلطات - تومية",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 29
  },
  {
    id: "p30",
    category_id: "cat_1",
    name: "ربع لحمة مندى ضاني",
    price: 400.00,
    description: "صوص - ارز بسمتى برياني - سلطات",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 30
  },
  {
    id: "p31",
    category_id: "cat_1",
    name: "ربع لحمة ماعز",
    price: 400.00,
    description: "ارز بسمتى - صوص - سلطات",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 31
  },
  {
    id: "p32",
    category_id: "cat_1",
    name: "نص مكرونة مبكبكة باللحمة الضاني",
    price: 900.00,
    description: "مكافأة الطعم الليبي الأصيل باللحم الضاني الطازج",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281313?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 32
  },
  {
    id: "p33",
    category_id: "cat_1",
    name: "نصف كيلو نيفة",
    price: 700.00,
    description: "ارز - شوربة - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 33
  },
  {
    id: "p34",
    category_id: "cat_1",
    name: "نص مشكل لحوم مندى",
    price: 800.00,
    description: "ارز - خضار - شوربة - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 34
  },
  {
    id: "p35",
    category_id: "cat_1",
    name: "اثنان فرد سمان محشي مندى",
    price: 400.00,
    description: "ارز - صوص",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 35
  },
  {
    id: "p36",
    category_id: "cat_1",
    name: "موزة ضانى مندى",
    price: 550.00,
    description: "ارز - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 36
  },
  {
    id: "p37",
    category_id: "cat_1",
    name: "ربع تيس مندى 2.5 كيلو",
    price: 3250.00,
    description: "ارز - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 37
  },
  {
    id: "p38",
    category_id: "cat_1",
    name: "نص تيس مندى",
    price: 400.00,
    description: "ارز - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 38
  },
  {
    id: "p39",
    category_id: "cat_1",
    name: "مكس جرال مشكل لحوم",
    price: 750.00,
    description: "لحم ماعز + ضاني",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 39
  },
  {
    id: "p40",
    category_id: "cat_1",
    name: "مكس مندي",
    price: 550.00,
    description: "ربع فراخ + ربع لحمه",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 40
  },
  {
    id: "p41",
    category_id: "cat_1",
    name: "فرخة مندي مع رز بسمتي شوربة وسلطة وطحينة (صينية بدوي)",
    price: 600.00,
    description: "تكفي عدد أربع أفراد سفرة أو تيك اواي",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 41
  },
  {
    id: "p42",
    category_id: "cat_1",
    name: "ربع كبدة طاسة",
    price: 300.00,
    description: "كبدة + سلطات وشوربة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 42
  },
  {
    id: "p43",
    category_id: "cat_1",
    name: "وجبة كبدة أرز وخضار",
    price: 300.00,
    description: "كبدة + رز + شوربة خضار (250 جرام)",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 43
  },
  {
    id: "p44",
    category_id: "cat_1",
    name: "ربع لحمة وربع فراخ",
    price: 550.00,
    description: "تكفي فردين",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 44
  },

  // Category 2: صوانى قصر المندى
  {
    id: "p45",
    category_id: "cat_2",
    name: "صنية ربع تيس",
    price: 3000.00,
    description: "ربع تيس ماعز كامل - كفتة - نص كبدة - 2 سمان - نص سجق - كيلو محاشى ورق عنب وممبار - 2 طاجن ملوخية قصر مندى - بامية - سلطات - شوربة",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 1
  },
  {
    id: "p46",
    category_id: "cat_2",
    name: "صنية ثمن تيس سوبر",
    price: 4200.00,
    description: "ثمن تيس - فرخة مندى او مشوى - 12 قطعة كفتة - 24 قطعة شيش طاووق - 8 قطعة طرب ضانى - ارز - 2 سمان - 1 كيلو محاشى - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 2
  },
  {
    id: "p47",
    category_id: "cat_2",
    name: "صنية التوفير",
    price: 3200.00,
    description: "كيلو لحمة مندى - 2 كيلو فراخ - كيلو كفتة - ارز - صوص - سلطات - 2 سمان",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 3
  },
  {
    id: "p48",
    category_id: "cat_2",
    name: "ربع كيلو مكرونة مبكبكة باللحمة الشمبري العجانى",
    price: 450.00,
    description: "250 جرام",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281313?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 4
  },
  {
    id: "p49",
    category_id: "cat_2",
    name: "ربع كيلو مكرونة مبكبكة باللحمة الضانى",
    price: 450.00,
    description: "مكرونة مبكبكة طازجة باللحم الضاني الصافي",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281313?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 5
  },
  {
    id: "p50",
    category_id: "cat_2",
    name: "ربع تيس امامي",
    price: 1800.00,
    description: "نصف كفته - فراخ - ارز بريانى - صوص - سلطات",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 6
  },
  {
    id: "p51",
    category_id: "cat_2",
    name: "نصف تيس 11 فرد",
    price: 600.00,
    description: "كيلو كفته - 2 فراخ - كيلو لحمة محمرة - ارز - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 7
  },
  {
    id: "p52",
    category_id: "cat_2",
    name: "تيس مندى حسب الطلب",
    price: 1000.00,
    description: "ارز - كبدة - كلاوى - التيس - سلطات - صوص",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 8
  },
  {
    id: "p53",
    category_id: "cat_2",
    name: "صنيه الحبيبه",
    price: 1800.00,
    description: "ربع طرب - موزة ضاني - نصف ممبار - فرخة - ربع كفتة - 2 كيلو رز - سرفيس تكفي 5 أفراد",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 9
  },
  {
    id: "p54",
    category_id: "cat_2",
    name: "مكس مندي مع مشوي",
    price: 450.00,
    description: "ثمن لحمه مع ربع كفته على سجق مشوي",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 10
  },
  {
    id: "p55",
    category_id: "cat_2",
    name: "مكس جريل",
    price: 500.00,
    description: "نصف فرخه مشويه مع رز بسمتي وشوربة وسلطات وربع طرب على كفته",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 11
  },
  {
    id: "p56",
    category_id: "cat_2",
    name: "صينية ابو شنب",
    price: 1100.00,
    description: "دى هتخليك أسد .. اطلب و خلى الباقى علينا",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 12
  },
  {
    id: "p57",
    category_id: "cat_2",
    name: "صينية دلع كرشك",
    price: 1300.00,
    description: "فرخه مع ربع كفته وربع لحمة .. مع محاشى و ممبار و سمبوسه",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 13
  },
  {
    id: "p58",
    category_id: "cat_2",
    name: "صينية الفخم",
    price: 700.00,
    description: "نص فرخه مع ربع كفته و ربع طرب .. ممبار",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 14
  },
  {
    id: "p59",
    category_id: "cat_2",
    name: "صينية الصحاب",
    price: 700.00,
    description: "نص فرخه مع ربع لحمة ضانى .. بطاطس - ارز بسمتى - سلطة - شوربة - طحينة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 15
  },
  {
    id: "p60",
    category_id: "cat_2",
    name: "صينية الروقان",
    price: 900.00,
    description: "ربع لحمة .. ثمن كفته .. ربع سجق .. ربع ممبار مع 1 حمام",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 16
  },
  {
    id: "p61",
    category_id: "cat_2",
    name: "صينية العشاق",
    price: 700.00,
    description: "ربع فراخ مندى + ربع لحمة ضانى او ماعز + ربع كفته مع شربة وسلطه وطحينة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 17
  },
  {
    id: "p62",
    category_id: "cat_2",
    name: "صنية المعلم ابو ربع واحد بس",
    price: 2000.00,
    description: "ربع لحمه - ربع كفتة - ربع سجق - ربع كبدة - ربع طرب - ربع ممبار - ربع شيش كباب",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 18
  },
  {
    id: "p63",
    category_id: "cat_2",
    name: "بنادول السعادة",
    price: 1600.00,
    description: "نصف فراخ مشوي - ربع كفته - ربع طرب - نصف لحمه - ربع سجق",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 19
  },
  {
    id: "p64",
    category_id: "cat_2",
    name: "صنية العزومه 10 فرد",
    price: 2800.00,
    description: "فرخه مندي - نصف فرخه شيش - فراخ مشوى تكا - كيلو كفته - كيلو سجق جزاري مشوى - ربع كبدة اسكندراني",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 20
  },
  {
    id: "p65",
    category_id: "cat_2",
    name: "صنيه ابو السيد",
    price: 1200.00,
    description: "ربع لحمه ماعز او ضاني - ربع كباب عجالي - ربع طرب - نصف فرخه",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 21
  },
  {
    id: "p66",
    category_id: "cat_2",
    name: "صنيه الاندلس",
    price: 900.00,
    description: "فرخه كامله - نصف كفته - نصف سجق مشوي بصوص البربكيو الحار",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 22
  },
  {
    id: "p67",
    category_id: "cat_2",
    name: "صنيه الاسره (تكفي 2 و 2 اطفال)",
    price: 900.00,
    description: "نصف فرخه مندي او مشوي - ربع كفته - ربع كباب - ربع سجق - سرفيس 3 شوربة وسلطات 3 أنواع",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 23
  },
  {
    id: "p68",
    category_id: "cat_2",
    name: "صنيه الاموره دهب",
    price: 1500.00,
    description: "ربع لحمه ماعز - ربع فراخ - ربع كفته - ربع طرب - ربع سجق - ربع كبده - سلطات وشوربة (تكفي 4 افراد كبار)",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 24
  },
  {
    id: "p69",
    category_id: "cat_2",
    name: "وجبة الروقان 2",
    price: 700.00,
    description: "ربع فراخ - ربع لحمه - ربع كفته - ثمن سجق مشوي - ثمن ممبار",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 25
  },

  // Category 3: ركن المشويات
  {
    id: "p70",
    category_id: "cat_3",
    name: "ربع فرخة مشوية صدر",
    price: 160.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 1
  },
  {
    id: "p71",
    category_id: "cat_3",
    name: "نص فرخة مشوية",
    price: 220.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 2
  },
  {
    id: "p72",
    category_id: "cat_3",
    name: "فرخة مشوية",
    price: 440.00,
    description: "ارز - خضار 2 - شوربة 2",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 3
  },
  {
    id: "p73",
    category_id: "cat_3",
    name: "ربع كفتة مشوية",
    price: 200.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 4
  },
  {
    id: "p74",
    category_id: "cat_3",
    name: "ربع كباب مشوى",
    price: 300.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 5
  },
  {
    id: "p75",
    category_id: "cat_3",
    name: "ربع طرب مشوى",
    price: 300.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 6
  },
  {
    id: "p76",
    category_id: "cat_3",
    name: "ربع ريش مشوي",
    price: 350.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 7
  },
  {
    id: "p77",
    category_id: "cat_3",
    name: "ربع سجق مشوي",
    price: 200.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 8
  },
  {
    id: "p78",
    category_id: "cat_3",
    name: "ربع كبدة ضانى مشوى صافي",
    price: 300.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 9
  },
  {
    id: "p79",
    category_id: "cat_3",
    name: "ربع فتلو مشوى",
    price: 300.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 10
  },
  {
    id: "p80",
    category_id: "cat_3",
    name: "اتنين فرد سمان مشوى",
    price: 300.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 11
  },
  {
    id: "p81",
    category_id: "cat_3",
    name: "اتنين فرد سمان محشى",
    price: 400.00,
    description: "ارز - خضار - شوربة",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 12
  },
  {
    id: "p82",
    category_id: "cat_3",
    name: "كيلو كفتة ضانى",
    price: 800.00,
    description: "كفتة ضاني بلدي مشوية على الفحم",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 13
  },
  {
    id: "p83",
    category_id: "cat_3",
    name: "كيلو كفته عجانى",
    price: 800.00,
    description: "سلطات وصوص طحينه 4 علب من كل نوع",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 14
  },
  {
    id: "p84",
    category_id: "cat_3",
    name: "كيلو كباب عجانى",
    price: 1100.00,
    description: "كباب عجالي طازج مشوي",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 15
  },
  {
    id: "p85",
    category_id: "cat_3",
    name: "كيلو كباب ضانى",
    price: 1400.00,
    description: "كباب ضاني بلدي فاخر",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 16
  },
  {
    id: "p86",
    category_id: "cat_3",
    name: "فرد سمان",
    price: 200.00,
    description: "فرد سمان مشوي طازج",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 17
  },
  {
    id: "p87",
    category_id: "cat_3",
    name: "فرد حمام",
    price: 250.00,
    description: "سلطات وعيش",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 18
  },
  {
    id: "p88",
    category_id: "cat_3",
    name: "كيلو طرب ضانى",
    price: 900.00,
    description: "طرب ضاني فاخر مشوي",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 19
  },
  {
    id: "p89",
    category_id: "cat_3",
    name: "موزة ضانى مشوية",
    price: 550.00,
    description: "موزة ضاني مشوية بدقة قصر المندي",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 20
  },
  {
    id: "p90",
    category_id: "cat_3",
    name: "مشكل كباب على كفته",
    price: 1200.00,
    description: "نصف كباب ونصف كفته + سلطات وعيش",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 21
  },
  {
    id: "p91",
    category_id: "cat_3",
    name: "نصف مشكل مكس",
    price: 600.00,
    description: "ربع فراخ مع ثمن كفتة مع ثمن لحم مشوي مع رز بسمتي وشوربة وسلطة خضار وعيش",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 22
  },
  {
    id: "p92",
    category_id: "cat_3",
    name: "كيلو مشكل مكس مشوي",
    price: 1100.00,
    description: "ربع كباب - ربع طرب - ربع كفته - ربع ريش مع بيت كلوة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 23
  },
  {
    id: "p93",
    category_id: "cat_3",
    name: "وجبة ربع فراخ وثمن كفته",
    price: 250.00,
    description: "رز بسمتي وشوربه وسلطات",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 24
  },
  {
    id: "p94",
    category_id: "cat_3",
    name: "ربع شيش طاووق",
    price: 250.00,
    description: "مع الخضار المشوي والصوص والسلطات",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 25
  },
  {
    id: "p95",
    category_id: "cat_3",
    name: "فرد حمام مع ثمن كفته",
    price: 300.00,
    description: "رز بسمتي مندي مع شوربه وسلاطات وصوص",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 26
  },

  // Category 4: سندوتشات
  {
    id: "p96",
    category_id: "cat_4",
    name: "كفته بلدى",
    price: 80.00,
    description: "عيش بلدي مع الطحينة والسلطة",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 1
  },
  {
    id: "p97",
    category_id: "cat_4",
    name: "كفته ضانى",
    price: 80.00,
    description: "سندوتش كفتة ضاني بلدي",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 2
  },
  {
    id: "p98",
    category_id: "cat_4",
    name: "حواوشي بلدي",
    price: 70.00,
    description: "حواوشي بلدي طازج بالخلطة السرية",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 3
  },
  {
    id: "p99",
    category_id: "cat_4",
    name: "كباب بلدى",
    price: 100.00,
    description: "ثمن كباب وعيش بلدي وسلطات",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 4
  },
  {
    id: "p100",
    category_id: "cat_4",
    name: "كباب ضانى",
    price: 90.00,
    description: "سندوتش كباب ضاني فاخر",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 5
  },
  {
    id: "p101",
    category_id: "cat_4",
    name: "طرب ضانى",
    price: 90.00,
    description: "سندوتش طرب ضاني مشوي",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 6
  },
  {
    id: "p102",
    category_id: "cat_4",
    name: "شيش طاووق",
    price: 90.00,
    description: "سندوتش شيش طاووق مع التومية",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 7
  },
  {
    id: "p103",
    category_id: "cat_4",
    name: "سجق بلدى",
    price: 100.00,
    description: "سندوتش سجق بلدي مشوي",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 8
  },
  {
    id: "p104",
    category_id: "cat_4",
    name: "سجق ضانى",
    price: 70.00,
    description: "سندوتش سجق ضاني مميز",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 9
  },

  // Category 5: مشروبات قصر المندى
  {
    id: "p105",
    category_id: "cat_5",
    name: "شاي زرد بدوي",
    price: 60.00,
    description: "شاي بدوي مخدر على الفحم بالنبوة والريحان",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 1
  },
  {
    id: "p106",
    category_id: "cat_5",
    name: "مياه صغيرة",
    price: 10.00,
    description: "زجاجة مياه معدنية 500 مل",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 2
  },
  {
    id: "p107",
    category_id: "cat_5",
    name: "مياه كبيرة",
    price: 20.00,
    description: "زجاجة مياه معدنية 1.5 لتر",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: false,
    order: 3
  },
  {
    id: "p108",
    category_id: "cat_5",
    name: "عصير ليمون نعناع",
    price: 50.00,
    description: "عصير ليمون نعناع طازج ومنعش",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    is_available: true,
    is_popular: true,
    order: 4
  }
];

export const OFFICIAL_WHATSAPP_NUMBERS = [
  { number: "01066568284", label: "الرقم الرئيسي 1", display: "01066568284" },
  { number: "01098128320", label: "الرقم الرئيسي 2", display: "01098128320" }
];
