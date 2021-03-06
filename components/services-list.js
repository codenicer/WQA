import styles from '../styles/services.module.scss'
import { isoServiceList } from '../settings/iso-service-list'
import { useRouter } from 'next/router'

export default function Services() {
  const router = useRouter()

  return (
    <section className={styles.service_list_container}>
      <h1 className={styles.service_list_header}>Available Services</h1>
      <ul className={styles.sevices_list}>
        {Object.values(isoServiceList).map((content, i) => {
          return (
            <li key={i} className={styles.service_container}>
              <h1 className={styles.sevices_title}>{content.title}</h1>
              <p className={styles.sevices_info}>
                {content.headline[0].headlineText.slice(0, 100) + '...'}
              </p>

              <button
                onClick={() => {
                  router.push(`/iso/${content.slug}`).then(() => {
                    console.log(window)
                  })
                  // router.push(`/iso/${content.slug}`)
                  // router.reload(window.location.pathname)
                }}
                className={styles.sevices_read_more}
              >
                Read More
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}