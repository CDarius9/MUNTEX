// mockProducts.js
// This file contains mock product data for use when the backend is not available

const mockProducts = {
    men: [
      {
        id: 'm1',
        name: 'Jachetă Impermeabilă Alpine Pro',
        description: 'Jachetă impermeabilă, respirabilă, cu membrană GTX și glugă ajustabilă',
        price: '649.99',
        category: 'men',
        subcategory: 'Jachete',
        imagePath: 'https://via.placeholder.com/300x400/3498db/ffffff?text=Jacheta+Barbati',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'm2',
        name: 'Tricou Tehnic Montura',
        description: 'Tricou cu uscare rapidă, perfect pentru drumeții și activități outdoor intense',
        price: '129.99',
        category: 'men',
        subcategory: 'Tricouri',
        imagePath: 'https://via.placeholder.com/300x400/27ae60/ffffff?text=Tricou+Tehnic',
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 'm3',
        name: 'Pantaloni Trekking Columbia',
        description: 'Pantaloni rezistenți la apă cu buzunare multiple și material elastic',
        price: '249.99',
        category: 'men',
        subcategory: 'Pantaloni',
        imagePath: 'https://via.placeholder.com/300x400/34495e/ffffff?text=Pantaloni+Trekking',
        sizes: ['30', '32', '34', '36', '38']
      },
      {
        id: 'm4',
        name: 'Bocanci Montură La Sportiva',
        description: 'Bocanci robuști pentru trasee dificile, impermeabili și cu protecție la impact',
        price: '899.99',
        category: 'men',
        subcategory: 'Incaltaminte',
        imagePath: 'https://via.placeholder.com/300x400/f39c12/ffffff?text=Bocanci+Munte',
        sizes: ['40', '41', '42', '43', '44', '45']
      },
      {
        id: 'm5',
        name: 'Bluză Polartech Fleece',
        description: 'Bluză din material polar de înaltă calitate, călduroasă și respirabilă',
        price: '199.99',
        category: 'men',
        subcategory: 'Bluze',
        imagePath: 'https://via.placeholder.com/300x400/8e44ad/ffffff?text=Bluza+Fleece',
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 'm6',
        name: 'Pălărie Soare UPF50+',
        description: 'Pălărie cu protecție UV, aerisită și cu șnur de fixare sub bărbie',
        price: '89.99',
        category: 'men',
        subcategory: 'Accesorii',
        imagePath: 'https://via.placeholder.com/300x400/d35400/ffffff?text=Palarie+UPF50',
        sizes: ['S/M', 'L/XL']
      },
      {
        id: 'm7',
        name: 'Mănuși WindStopper',
        description: 'Mănuși impermeabile cu izolație termică și suprafață tactilă pentru smartphone',
        price: '119.99',
        category: 'men',
        subcategory: 'Accesorii',
        imagePath: 'https://via.placeholder.com/300x400/7f8c8d/ffffff?text=Manusi+Munte',
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 'm8',
        name: 'Geacă Down Insulated',
        description: 'Geacă ușoară cu umplutură de puf de gâscă, perfectă pentru temperaturi scăzute',
        price: '549.99',
        category: 'men',
        subcategory: 'Jachete',
        imagePath: 'https://via.placeholder.com/300x400/c0392b/ffffff?text=Geaca+Puf',
        sizes: ['S', 'M', 'L', 'XL']
      }
    ],
    
    women: [
      {
        id: 'w1',
        name: 'Jachetă Softshell Mammut',
        description: 'Jachetă softshell rezistentă la vânt și apă cu detalii reflectorizante',
        price: '429.99',
        category: 'women',
        subcategory: 'Jachete',
        imagePath: 'https://via.placeholder.com/300x400/e84393/ffffff?text=Jacheta+Femei',
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'w2',
        name: 'Bluză Mid-Layer',
        description: 'Bluză termică pentru strat intermediar cu fermoar 1/4 și buzunar la piept',
        price: '159.99',
        category: 'women',
        subcategory: 'Hanorace',
        imagePath: 'https://via.placeholder.com/300x400/fd79a8/ffffff?text=Bluza+Termica',
        sizes: ['XS', 'S', 'M', 'L']
      },
      {
        id: 'w3',
        name: 'Tricou Merino Wool',
        description: 'Tricou din lână merino 100%, natural anti-mirosuri și cu reglare termică',
        price: '179.99',
        category: 'women',
        subcategory: 'Tricouri',
        imagePath: 'https://via.placeholder.com/300x400/00cec9/ffffff?text=Tricou+Merino',
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'w4',
        name: 'Pantaloni Convertibili',
        description: 'Pantaloni convertibili în pantaloni scurți, cu protecție UV și uscare rapidă',
        price: '219.99',
        category: 'women',
        subcategory: 'Pantaloni',
        imagePath: 'https://via.placeholder.com/300x400/636e72/ffffff?text=Pantaloni+Convertibili',
        sizes: ['34', '36', '38', '40', '42']
      },
      {
        id: 'w5',
        name: 'Încălțăminte Trail Running',
        description: 'Încălțăminte ușoară pentru alergare pe trasee montane cu tracțiune sporită',
        price: '399.99',
        category: 'women',
        subcategory: 'Incaltaminte',
        imagePath: 'https://via.placeholder.com/300x400/fdcb6e/ffffff?text=Adidasi+Trail',
        sizes: ['36', '37', '38', '39', '40', '41']
      },
      {
        id: 'w6',
        name: 'Pălărie Trekking',
        description: 'Pălărie pentru drumeții cu boruri largi și ventilație laterală',
        price: '79.99',
        category: 'women',
        subcategory: 'Palarii',
        imagePath: 'https://via.placeholder.com/300x400/55efc4/ffffff?text=Palarie+Trek',
        sizes: ['S/M', 'L/XL']
      },
      {
        id: 'w7',
        name: 'Eșarfă Multifuncțională',
        description: 'Eșarfă multifuncțională care poate fi purtată în 12 moduri diferite',
        price: '59.99',
        category: 'women',
        subcategory: 'Accesorii',
        imagePath: 'https://via.placeholder.com/300x400/a29bfe/ffffff?text=Esarfa+Multi',
        sizes: ['Universal']
      },
      {
        id: 'w8',
        name: 'Vestă cu Puf Sintetic',
        description: 'Vestă ușoară și compactă, rezistentă la apă, ideală ca strat suplimentar',
        price: '299.99',
        category: 'women',
        subcategory: 'Jachete',
        imagePath: 'https://via.placeholder.com/300x400/fab1a0/ffffff?text=Vesta+Puf',
        sizes: ['XS', 'S', 'M', 'L']
      }
    ],
    
    equipment: [
      {
        id: 'e1',
        name: 'Rucsac Trekking 45L',
        description: 'Rucsac confortabil cu suport lombar și multiple compartimente organizatoare',
        price: '379.99',
        category: 'equipment',
        subcategory: 'Ghiozdane',
        imagePath: 'https://via.placeholder.com/300x400/3498db/ffffff?text=Rucsac+45L',
        sizes: ['Universal']
      },
      {
        id: 'e2',
        name: 'Cort 2 Persoane',
        description: 'Cort ușor, impermeabil, cu absidă pentru echipament și montare rapidă',
        price: '899.99',
        category: 'equipment',
        subcategory: 'Corturi',
        imagePath: 'https://via.placeholder.com/300x400/2ecc71/ffffff?text=Cort+2P',
        sizes: ['Universal']
      },
      {
        id: 'e3',
        name: 'Filtru Apă Portabil',
        description: 'Filtru compact ce elimină 99.99% din bacterii și protozoare din apă',
        price: '149.99',
        category: 'equipment',
        subcategory: 'Filtre Apa',
        imagePath: 'https://via.placeholder.com/300x400/e74c3c/ffffff?text=Filtru+Apa',
        sizes: ['Universal']
      },
      {
        id: 'e4',
        name: 'Bidon Termoizolant 750ml',
        description: 'Bidon cu pereți dubli care menține băuturile reci 24h sau calde 12h',
        price: '119.99',
        category: 'equipment',
        subcategory: 'Bidoane apa',
        imagePath: 'https://via.placeholder.com/300x400/f1c40f/ffffff?text=Bidon+750ml',
        sizes: ['750ml']
      },
      {
        id: 'e5',
        name: 'Sac de Dormit -10°C',
        description: 'Sac de dormit cu puf pentru temperaturi de până la -10°C, ultracompact',
        price: '599.99',
        category: 'equipment',
        subcategory: 'Sac de dormit',
        imagePath: 'https://via.placeholder.com/300x400/9b59b6/ffffff?text=Sac+Dormit',
        sizes: ['Universal']
      },
      {
        id: 'e6',
        name: 'Bețe Trekking Aluminiu',
        description: 'Bețe telescopice din aluminiu cu mânere ergonomice și vârfuri din carbură',
        price: '199.99',
        category: 'equipment',
        subcategory: 'Bete trekking',
        imagePath: 'https://via.placeholder.com/300x400/1abc9c/ffffff?text=Bete+Trekking',
        sizes: ['Universal']
      },
      {
        id: 'e7',
        name: 'Bidon Pliabil 2L',
        description: 'Bidon pliabil pentru economie de spațiu când nu este folosit',
        price: '79.99',
        category: 'equipment',
        subcategory: 'Bidoane apa',
        imagePath: 'https://via.placeholder.com/300x400/e67e22/ffffff?text=Bidon+Pliabil',
        sizes: ['2L']
      },
      {
        id: 'e8',
        name: 'Filtru Apă Gravitațional',
        description: 'Sistem de filtrare gravitațional pentru grupuri, filtrează 6L în 5 minute',
        price: '349.99',
        category: 'equipment',
        subcategory: 'Filtre Apa',
        imagePath: 'https://via.placeholder.com/300x400/34495e/ffffff?text=Filtru+Gravitational',
        sizes: ['Universal']
      }
    ]
  };
  
  export default mockProducts;