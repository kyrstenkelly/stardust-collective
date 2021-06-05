import { FC, useMemo } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import type { Product } from '@commerce/types/product'
import s from './ProductCard.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'

interface Props {
  className?: string
  product: Product
  imgProps?: Omit<ImageProps, 'src'>
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCard: FC<Props> = ({ className, product, imgProps, ...props }) => {
  const currency = product.price.currencyCode === 'USD' ? '$' : ''

  const priceRange = useMemo(() => {
    if (product.variants && product.variants.length > 1) {
      const variantPrices = product.variants
        .map((v) => v.prices?.price.value)
        .sort()
      return [variantPrices[0], variantPrices[variantPrices.length - 1]]
        .map((p) => `${currency}${p}`)
        .join(' - ')
    }
    return null
  }, [product])

  return (
    <Link href={`/product/${product.slug}`} {...props}>
      <a className={cn(s.root, className)}>
        <>
          <div className={s.imageContainer}>
            {product?.images?.length && (
              <Image
                alt={product.name || 'Product Image'}
                className={s.productImage}
                src={product.images[0].url || placeholderImg}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
                {...imgProps}
              />
            )}
          </div>
          <div className={s.infoContainer}>
            <div>
              <h3 className={s.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={s.productPrice}>
                {priceRange ? priceRange : `${currency}${product.price.value}`}
              </span>
            </div>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0] as any}
              />
            )}
          </div>
        </>
      </a>
    </Link>
  )
}

export default ProductCard
