import styles from '../styles/train-with-us.module.scss'
export default function IntrouctionSection({ position, settings }) {
  return (
    <div className={styles.train_with_us_container} style={position}>
      <div className={styles.train_img_cont}>
        <img
          src={`${process.env.ADMIN_URL}${
            settings.train_with_us_img.length > 0
              ? settings.train_with_us_img[0].url
              : ''
          }`}
          className={styles.train_with_us_img}
        />
        <div className={styles.filter}></div>
      </div>

      <div className={styles.train_with_us_informations}>
        <h1 className={styles.train_with_us_heading}>We Offer Training</h1>
        <p className={styles.train_with_us_moto}>
          {settings.we_offer_training_message}
        </p>
        <a
          className={styles.train_with_us_cta}
          href={`${process.env.ADMIN_URL}${
            settings.train_with_us_pdf.length > 0
              ? settings.train_with_us_pdf[0].url
              : ''
          }`}
          target="_blank"
        >
          <button className={styles.train_with_us_cta}>View Details</button>
        </a>
        <ul>
          <li>
            <h5>{settings.no_of_issued_cetifiacate}</h5>
            <p>Certicate Issued</p>
          </li>
          <li>
            <h5>{settings.no_of_happy_clients}</h5>
            <p>Happy Clients</p>
          </li>
          <li>
            <h5>{settings.no_of_bussiness_partner}</h5>
            <p>Business Partners</p>
          </li>
          <li>
            <h5>{settings.no_of_consultant}</h5>
            <p>Consultant</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
