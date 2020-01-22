// tslint:disable-next-line:no-default-export
export default {
  general: {
    total: 'Total DKK',
    exVat: 'Ex. VAT',
  },
  header: {
    storefinder: 'My location',
    account: 'My account',
    menu: 'Menu',
    logo: 'To Elgiganten homepage',
    logoAltB2B: 'Logo of Elgiganten - Business Customer',
    logoAltB2C: 'Logo of Elgiganten - Private Customer',
    minicart: 'Number of cart items',
    login: 'Login',
    mobile: {
      orderTotal: 'Order Total',
      item: '{{ totalUnitCount }} item',
      items: '{{ totalUnitCount }} items',
    },
    customerService: 'Customer Service',
    privateCustomer: 'Private Customer',
    businessCustomer: 'Business Customer',
    wishList: 'Your Wishlist',
    vatToggle: {
      showPrices: 'Show prices:  ',
    },
  },
  vatToggle: {
    incVat: 'Inc. VAT',
  },
  minicart: {
    closeDescription: 'Close mini cart',
    headline: 'Your basket ({{ totalUnitCount }} items)',
    headlineSingleItem: 'Your basket ({{ totalUnitCount }} item)',
    orderTotal: 'Total DKK',
    orderTotalMobile: 'Order Total',
  },
  confirmation: {
    order: 'Order',
    review: 'Review or edit',
    headline: 'Thank you! Your order has been submitted.',
    deliveryNotice: 'Your items are due to arrive by',
    deliveryTracking:
      'We’ve sent an order confirmation email to {{email}}.\n' +
      ' We’ll send you tracking information via SMS to {{phone}} and an email once your order ships. ',
    accountLink: {
      headline: 'Create your account',
      benefit: {
        fastCheckout: 'Faster checkout next time',
        trackAndManage: 'Track & manager your orders',
        earnRewards: 'Earn rewards for purchases',
      },
      change: 'Change',
      createAccount: 'Create account',
    },
  },
  summary: {
    headline: 'Order summary ({{ totalUnitCount }} items)',
    headlineSingleItem: 'Order summary ({{ totalUnitCount }} item)',
  },
  extra: {
    headline: 'Your basket ({{ totalUnitCount }} items)',
    headlineSingleItem: 'Your basket ({{ totalUnitCount }} item)',
  },
  filter: {
    seeAll: 'See all',
    seeLess: 'See less',
  },
  product: {
    search: 'Search for products, category or articles',
    list: {
      tileDescription: 'See details of {{ productName }}',
      filters: 'Filters',
      filterCount: 'Number of applied filters',
      filterSelection: 'Your selection',
      resetAllFilters: 'Clear all',
      searchPlaceholder: 'Search for',
      pagination: '{{ from }}–{{ to }} of {{ total }} products',
    },
    action: {
      compare: 'Compare',
      wishlist: 'Save',
      share: 'Share',
    },
    detail: {
      sku: 'Article number:',
      buyBox: {
        homeDeliveryHeadline: 'Deliver it',
        storeDeliveryHeadline: 'Get in store',
      },
      shortDescriptionHeadline: 'The basics',
      keySpecificationsHeadline: 'Key specifications',
      seeAllFeatures: 'See all features',
      seeAllSpecifications: 'See all specs',
      specifications: {
        headline: 'Specifications',
        seeMoreLabel: 'See full specifications',
        seeLessLabel: 'See less specifications',
      },
      featuresHeadline: 'Features',
    },
    upSelling: {
      continueShopping: 'Continue Shopping',
      recommendHeadline: 'Got everything you need?',
      seeMoreServices: 'See more services',
      seeMoreProducts: 'See more products',
      orderTotal: 'Order Total',
      itemAdded: 'Item added to your basket!',
    },
    general: {
      addToBasket: 'Add to basket',
      checkout: 'Checkout',
      viewBasket: 'View Basket',
    },
    productItem: {
      itemAdded: 'Item added!',
      itemRemoved: 'Item removed!',
      inStock: 'In Stock',
      notInStock: 'Not in Stock',
      stockUnknown: 'Stock unknown',
      discounted: 'Personal quote!',
    },
  },
  order: {
    delivery: {
      address: 'Delivery address',
      method: 'Delivery method',
    },
    billing: {
      address: 'Billing address',
    },
    payment: {
      method: 'Payment method',
    },
  },
  checkout: {
    terms: {
      agree: 'I agree to Elkjøp`s purchasing terms',
    },
    contact: {
      summary: {
        to: 'Going to',
        address: 'Address',
        edit: 'View or edit',
      },
      header: `1. Who's your item going to`,
      login: 'Login',
      continuelogin: ' or continue below. You can create an account after you checkout.',
      hint: {
        email: 'To send your order confirmation',
        phone: 'So we can look up your details and delivery address',
        finding: 'Finding your details',
      },
      error: {
        email: 'Please enter a valid email address',
        phone: 'Invalid phone number format (8-digits)',
        notfound: 'Details not found',
      },
    },
    delivery: {
      summary: {
        method: 'Delivery method',
        arriving: 'Arriving',
      },
      header: '2. Choose a delivery type and delivery speed',
      numberOfMoreOptions: '{{ numberOfMoreOptions }} more delivery options',
      address: {
        label: 'Delivery address',
        prompt: 'Please enter your delivery address',
        asbilling: 'Use as billing address',
      },
    },
    billing: {
      address: {
        label: 'Billing address',
        prompt: 'Please enter your billing address',
      },
    },
    payment: {
      summary: {
        method: 'Payment method',
        expiry: 'Expire',
      },
      headline: '3. Choose your payment method',
      methodUnavailable: 'Sorry, this payment method is unavailable for this order.',
      numberOfMoreOptions: '{{ numberOfMoreOptions }} more payment options',
      creditCard: {
        number: 'Card number',
        expiration: 'Expiry',
        cvcHint: '{{digits}} digits',
        save: 'Save card for future use',
      },
    },
  },
  address: {
    name: 'First and last name',
    street: 'Street',
    city: 'City',
    zip: 'Post code (4 digits)',
  },
  contact: {
    phone: 'Phone',
    email: 'Email',
  },
  delivery: {
    price: {
      free: 'FREE',
    },
    method: {
      delivery_1_2: {
        title: '1-2 day delivery',
        subtitle: 'Arrives',
      },
      delivery_3_7: {
        title: '3-7 day delivery',
        subtitle: 'Arrives',
      },
      delivery_5_10: {
        title: '5-10 day delivery',
        subtitle: 'Arrives',
      },
    },
  },
  payment: {
    method: {
      Card_Card: {
        title: 'Dankort, Visa or Mastercard',
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
        title: 'Split payment',
        subtitle: `Finance your purchase with Santander Consumer Bank`,
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
