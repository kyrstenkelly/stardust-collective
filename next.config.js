const commerce = require('./commerce.config.json')
const withCommerceConfig = require('./framework/commerce/with-config')

const isBC = commerce.provider === 'bigcommerce'
const isShopify = commerce.provider === 'shopify'

module.exports = withCommerceConfig({
  commerce,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  rewrites() {
    return [
      (isBC || isShopify) && {
        source: '/checkout',
        destination: '/api/bigcommerce/checkout',
      },
      // The logout is also an action so this route is not required, but it's also another way
      // you can allow a logout!
      isBC && {
        source: '/logout',
        destination: '/api/bigcommerce/customers/logout?redirect_to=/',
      },
      // Rewrites for /shop
      {
        source: '/shop/:category',
        destination: '/shop',
      },
    ].filter((x) => x)
  },
})
