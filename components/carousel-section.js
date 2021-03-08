import styles from '../styles/home.module.scss'
import { generalSetting } from '../settings/general'
import CarouselIndicator from './carousel-indicator'
import Carousel from 're-carousel'

export default function CarouselSection({ headlines }) {
  return (
    <section className={styles.carousel_container}>
      <Carousel loop auto widgets={[CarouselIndicator]}>
        {headlines.map((content, i) => {
          return (
            <>
              <div
                className={styles.carousel_img}
                style={{
                  backgroundImage: `url('${process.env.ADMIN_URL}${
                    content.image.length > 0 ? content.image[0].url : ''
                  }')`,
                }}
              ></div>
              <div className={styles.carousel__hero_cont}>
                <h3 className={styles.hero_cont__sub_headline}>
                  {content.headline_message}
                </h3>
                <h1 className={styles.hero_cont__headline}>
                  {content.sub_headline_message}
                </h1>
              </div>
            </>
          )
        })}
      </Carousel>
    </section>
  )
}
