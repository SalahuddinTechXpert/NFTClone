import assets from './assets';

const DummyData = [
  {
    from: 'Al khaleej resturant',
    to: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {
    from: 'Al khaleej resturant',
    to: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {
    from: 'Al khaleej resturant',
    to: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {
    from: 'Al khaleej resturant',
    to: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {
    from: 'Al khaleej resturant',
    to: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {
    from: 'Al khaleej resturant',
    to: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
];

const DummyForPrev = [
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    sndAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    sndAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    sndAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
  {Date: 'Today, Tuesday 17 March 2022', time: '04:21 PM'},
  {
    from: 'Al khaleej resturant',
    fstAdd: 'Northorpe, Gainsborough, UK',
    sndAdd: 'Northorpe, Gainsborough, UK',
    price: '12.00',
    estimatedTime: '10 min',
  },
];

const messages = [
  {message: 'i am on the way'},
  {message: 'i am 5 min way'},
  {message: 'Send me a location '},
  {message: 'Send me your whatsApp number'},
  {message: 'order on your Door please pick'},
  {message: 'sorry for late '},
  {message: 'stuck in the traffic '},
];

const DummyOrder = [
  {
    name: 'Burgur',
    price: '12.00',
    quantity: 2,
    decriptionShort: 'Chicken Cheesy BBQ Burger',
    decriptionLong:
      'Crispy  coated chicken with lettuce and our sandwitch sauce in a soft, spicy flabour.',
  },

  {
    name: 'Burgur',
    price: '12.00',
    quantity: 2,
    decriptionShort: 'Chicken Cheesy BBQ Burger',
    decriptionLong:
      'Crispy  coated chicken with lettuce and our sandwitch sauce in a soft, spicy flabour.',
  },
  {
    name: 'Burgur',
    price: '12.00',
    quantity: 1,
    decriptionShort: 'Chicken Cheesy BBQ Burger',
    decriptionLong:
      'Crispy  coated chicken with lettuce and our sandwitch sauce in a soft, spicy flabour.',
  },
  {
    name: 'Burgur',
    price: '12.00',
    quantity: 1,
    decriptionShort: 'Chicken Cheesy BBQ Burger',
    decriptionLong:
      'Crispy  coated chicken with lettuce and our sandwitch sauce in a soft, spicy flabour.',
  },
  {
    name: 'Burgur',
    price: '12.00',
    quantity: 1,
    decriptionShort: 'Chicken Cheesy BBQ Burger',
    decriptionLong:
      'Crispy  coated chicken with lettuce and our sandwitch sauce in a soft, spicy flabour.',
  },
];
const orderSummary = [
  {
    Subtotal: 'Subtotal',
    costSubtotal: 13.0,
  },
  {
    Subtotal: 'delivery cost',
    costSubtotal: 3.0,
  },
  {
    Subtotal: 'Surchange for orders under  10.00 ',
    costSubtotal: 13.0,
  },
  {
    Subtotal: 'TIp for rider',
    costSubtotal: 13.0,
  },
  {
    Total: 'Total cost',
    costTotal: 13.0,
  },
  {
    Payment: 'Payment details',
    PaymentMethod: 'Via a card',
  },
];
const Earning_history = [
  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },

  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },
  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },

  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },
  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },

  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },
  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },

  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },
  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },

  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },
  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },

  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },
  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'Thur',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },

  {
    label: [
      {
        Day: 'Today',
        Date: 'Tuesday 14 May  2022',
      },
    ],
    day: 'fri',
    date: '16',
    type: 'Delivery',
    earn: '20.00',
    time: '12:32 PM',
  },
];
export {
  DummyData,
  DummyForPrev,
  Earning_history,
  messages,
  DummyOrder,
  orderSummary,
};
