// tslint:disable-next-line:no-default-export
export default {
  general: {
    total: 'i alt DKK',
    exVat: 'Eks. Moms',
  },
  header: {
    storefinder: 'Min lokasjon',
    account: 'Min konto',
    menu: 'Meny',
    logo: 'To Elgiganten homepage',
    logoAltB2B: 'Logo af Elgiganten - Erhvervskunde',
    logoAltB2C: 'Logo af Elgiganten - Privatkund',
    minicart: 'Antal indkøbskurveartikler',
    login: 'Login',
    mobile: {
      orderTotal: 'Bestil i alt',
      item: '{{ totalUnitCount }} vare',
      items: '{{ totalUnitCount }} elementer',
    },
    customerService: 'Kunde service',
    privateCustomer: 'Privatkund',
    businessCustomer: 'Erhvervskunde',
    wishList: 'Din Ønskeliste',
    vatToggle: {
      showPrices: 'Vis priser: ',
    },
  },
  vatToggle: {
    incVat: 'Inkl. Moms',
  },
  minicart: {
    closeDescription: 'Luk minikurv',
    headline: 'Din kurv ({{ totalUnitCount }} elementer)',
    headlineSingleItem: 'Din kurv ({{ totalUnitCount }} vare)',
    orderTotal: 'Bestil i alt DKK',
    orderTotalMobile: 'Bestil i alt',
  },
  confirmation: {
    order: 'Bestilling',
    review: 'Gennemgå eller rediger',
    headline: 'Tak skal du have! Din ordre er blevet sendt.',
    deliveryNotice: 'Dine varer skal ankomme',
    deliveryTracking:
      'Vi har sendt en ordrebekræftelses-e-mail til {{email}}.\n' +
      ' Vi sender dig sporingsoplysninger via SMS til {{phone}} og en e-mail, når din ordre sendes.',
    accountLink: {
      headline: 'Opret din konto',
      benefit: {
        fastCheckout: 'Hurtigere checkout næste gang',
        trackAndManage: 'Spor og administrer dine ordrer',
        earnRewards: 'Tjen belønning ved køb',
      },
      change: 'lave om',
      createAccount: 'Opret konto',
    },
  },
  summary: {
    headline: 'Ordreoversigt ({{ totalUnitCount }} elementer)',
    headlineSingleItem: 'Ordreoversigt ({{ totalUnitCount }} vare)',
  },
  extra: {
    headline: 'Din kurv ({{ totalUnitCount }} elementer)',
    headlineSingleItem: 'Din kurv ({{ totalUnitCount }} vare)',
  },
  filter: {
    seeAll: 'Se alle',
    seeLess: 'Se mindre',
  },
  product: {
    search: 'Søk etter produkter, kategori eller artikler',
    list: {
      tileDescription: 'Se detaljer om {{ productName }}',
      filters: 'Filtre',
      filterCount: 'Antal anvendte filtre',
      filterSelection: 'Dit valg',
      resetAllFilters: 'Slet alt',
      searchPlaceholder: 'Søge efter ',
      pagination: '{{ from }}–{{ to }} fra {{ total }} produkter',
    },
    action: {
      compare: 'Sammenligne',
      wishlist: 'Gemme',
      share: 'Andel',
    },
    detail: {
      sku: 'Artikel nummer:',
      buyBox: {
        homeDeliveryHeadline: 'Lever det',
        storeDeliveryHeadline: 'Gå i butik',
      },
      shortDescriptionHeadline: 'Det grundlæggende',
      keySpecificationsHeadline: 'Nøglespecifikationer',
      seeAllFeatures: 'Se alle funktioner',
      seeAllSpecifications: 'Se alle specifikationer',
      specifications: {
        headline: 'Specifikationer',
        seeMoreLabel: 'Se de fulde specifikationer',
        seeLessLabel: 'Se mindre specifikationer',
      },
      featuresHeadline: 'Funktioner',
    },
    upSelling: {
      continueShopping: 'Fortsætte med at handle',
      recommendHeadline: 'Har du alt hvad du har brug for?',
      seeMoreServices: 'Se flere tjenester',
      seeMoreProducts: 'Se flere produkter',
      orderTotal: 'Bestil i alt',
      itemAdded: 'Vare tilføjet til din kurv!',
    },
    general: {
      addToBasket: 'Læg i kurv',
      checkout: 'Bestilling',
      viewBasket: 'Se kurv',
    },
    productItem: {
      itemAdded: 'Vare tilføjet!',
      itemRemoved: 'Emne slettet!',
      inStock: 'På lager',
      notInStock: 'Ikke på lager',
      stockUnknown: 'lager ukendt',
      discounted: 'Personligt tilbud!',
    },
  },
  order: {
    delivery: {
      address: 'Leveringsadresse',
      method: 'Leveringsmetode',
    },
    billing: {
      address: 'Faktureringsadresse',
    },
    payment: {
      method: 'Betalingsmetode',
    },
  },
  checkout: {
    terms: {
      agree: 'Jeg accepterer Elkjøps købsbetingelser',
    },
    contact: {
      summary: {
        to: 'Går til',
        address: 'Adresse',
        edit: 'Se eller rediger',
      },
      header: '1. Hvem er din vare der skal til',
      login: 'Log på',
      continuelogin: ' eller fortsæt nedenfor. Du kan oprette en konto, når du har checket ud.',
      hint: {
        email: 'For at sende din ordrebekræftelse',
        phone: 'Så vi kan slå dine detaljer og leveringsadresse op',
        finding: 'Find dine detaljers',
      },
      error: {
        email: 'Indtast venligst en gyldig e-mailadresse',
        phone: 'Ugyldigt telefonnummerformat (8-cifre)',
        notfound: 'Detaljerne blev ikke fundet',
      },
    },
    delivery: {
      summary: {
        method: 'Leveringsmetode',
        arriving: 'Ankommer',
      },
      header: '2. Vælg en leveringstype og leveringshastighed',
      numberOfMoreOptions: '{{ numberOfMoreOptions }} yderligere leveringsmuligheder',
      address: {
        label: 'Leveringsadresse',
        prompt: 'Indtast venligst din leveringsadresse',
        asbilling: 'Brug som faktureringsadresse',
      },
    },
    billing: {
      address: {
        label: 'Betalingsadresse',
        prompt: 'Indtast din faktureringsadresse',
      },
    },
    payment: {
      summary: {
        method: 'Betalingsmetode',
        expiry: 'Udløbe',
      },
      headline: '3. Vælg din betalingsmetode',
      methodUnavailable: 'Beklager, denne betalingsmetode er ikke tilgængelig for denne ordre.',
      numberOfMoreOptions: '{{ numberOfMoreOptions }} yderligere betalingsmuligheder',
      creditCard: {
        number: 'Kortnummer',
        expiration: 'Udløb',
        cvcHint: '{{ digits }} cifre',
        save: 'Gem kort til fremtidig brug',
      },
    },
  },
  address: {
    name: 'For-og efternavn',
    street: 'Gade',
    city: 'By',
    zip: 'Postnumer',
  },
  contact: {
    phone: 'Telefonnummer',
    email: 'Email',
  },
  delivery: {
    price: {
      free: 'GRATIS',
    },
    method: {
      delivery_1_2: {
        title: '1-2 dages levering',
        subtitle: 'Ankommer',
      },
      delivery_3_7: {
        title: '3-7 dages levering',
        subtitle: 'Ankommer',
      },
      delivery_5_10: {
        title: '5-10 dages levering',
        subtitle: 'Ankommer',
      },
    },
  },
  payment: {
    method: {
      Card_Card: {
        title: 'Dankort, VISA eller Mastercard',
        subtitle: '',
      },
      Mobile_ApplePay: {
        title: 'ApplePay',
        subtitle: `I'm not sure if that is the right step for this`,
      },
      Finance_Klarna: {
        title: 'Klarna',
        subtitle: `Get it now, pay in 2 months`,
      },
      Wallet_Paypal: {
        title: 'PayPal',
        subtitle: `…`,
      },
      DirectBank_Entercash: {
        title: 'DirectBank Entercash',
        subtitle: `…`,
      },
      DirectBank_Trustly: {
        title: 'DirectBank Trustly',
        subtitle: `…`,
      },
      DirectBank_Payever: {
        title: 'DirectBank Payever',
        subtitle: `…`,
      },
      Mobile_MobilePay: {
        title: 'MobilePay',
        subtitle: ``,
      },
      Finance_Santander: {
        title: 'Del betalingen op',
        subtitle: `Finansier dit køb med Santander Consumer Bank`,
      },
      'Finance_Santander Redirect': {
        title: 'Santander Financing',
        subtitle: `Redirect`,
      },
    },
  },
  cart: {
    remove: {
      ok: 'Yes, remove item',
      cancel: 'cancel',
      info: 'Are you sure you want to remove all items from your basket?',
    },
  },
};
