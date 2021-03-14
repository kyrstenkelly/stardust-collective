import React, { FC } from 'react'
import { Container } from '@components/ui'
import { RightArrow } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface Props {
  className?: string
  headline: string
  description?: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className={s.root}>
      <Container>
        <div className={s.hero}>
          <h2 className="text-6xl leading-10  font-cursive sm:text-5xl sm:leading-none lg:text-8xl">
            {headline}
          </h2>
          {description ? (
            <div className="flex flex-col justify-between">
              <p className="mt-5 text-xl leading-7 text-accent-2 text-white">
                {description}
              </p>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  )
}

export default Hero
