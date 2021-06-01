const commerce = require('./commerce.config.json')
const withCommerceConfig = require('./framework/commerce/with-config')

module.exports = withCommerceConfig({
  commerce,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  rewrites() {
    return [
      {
        source: '/checkout',
        destination: '/api/bigcommerce/checkout',
      },
      {
        source: '/logout',
        destination: '/api/bigcommerce/customers/logout?redirect_to=/',
      },
      {
        source: '/shop/:category',
        destination: '/shop',
      },
    ].filter((x) => x)
  },
})
