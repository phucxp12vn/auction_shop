import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Nón Vegeta',
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    picture: '/images/products/non.jpg',
    totalBids: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    picture: '/images/products/product_2.png',
    totalBids: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    name: 'Slack',
    description:
      'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    picture: '/images/products/product_3.png',
    totalBids: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    name: 'Lyft',
    description:
      'Lyft is an on-demand transportation company based in San Francisco, California.',
    picture: '/images/products/product_4.png',
    totalBids: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    name: 'GitHub',
    description:
      'GitHub is a web-based hosting service for version control of code using Git.',
    picture: '/images/products/product_5.png',
    totalBids: '835',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    name: 'Squarespace',
    description:
      'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    picture: '/images/products/product_6.png',
    totalBids: '835',
    createdAt: '04/04/2019'
  }
];
