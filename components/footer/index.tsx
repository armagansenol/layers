import React from 'react'
import s from './footer.module.scss'
import { Image } from '../image'
import { Link } from '@/components/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={s.footer}>
      <div className={s.main}>
        <div className={s.gridY}>
          <div className={s.info}>
            <Link href="/" className={s.logoC}>
              <Image
                src="/img/layers-logo.svg"
                alt="6 hours"
                width="206"
                height="193"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <div className={s.linksC}>
              <h6 className={s.title}>DOWNLOAD</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <Link className={s.link} href="">
                    Employee Database
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link className={s.link} href="">
                    Employee Database
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.linksC}>
              <h6 className={s.title}>COMPANY</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <Link className={s.link} href="about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className={s.linksC}>
              <h6 className={s.title}>SUPPORT</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <Link className={s.link} href="">
                    Pricing
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link className={s.link} href="">
                    Terms of Use
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link className={s.link} href="">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.gridY}>
          <div className={s.linksC}>
            <h6 className={s.title}>FEATURES</h6>
            <ul className={s.links}>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.linksC}>
            <h6 className={s.title}>SERVICES</h6>
            <ul className={s.links}>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
              <li className={s.linkC}>
                <Link className={s.link} href="">
                  Employee Database
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.copyright}>
        <small>© 2023 Layers. All Rights Reserved.</small>
        <small className={s.signature}>
          Designed by{' '}
          <a
            className={s.jdfx}
            target="_blank"
            rel="noreferrer noopener"
            href="https://justdesignfx.com"
          >
            JUST DESIGN FX
          </a>
          <sup>®</sup>{' '}
        </small>
      </div>
      <div className={s.iskur}>
        <small>
          Layers Yazılım ve İnsan Kaynakları Hizmetleri A.Ş. Özel İstihdam
          Bürosu Olarak 29/05/2023-28/05/2026 tarihleri arasında faaliyette
          bulunmak üzere, Türkiye İş Kurumu tarafından 24/05/2023 tarih ve
          13939467 sayılı karar uyarınca 1502 nolu belge ile faaliyet
          göstermektedir. 4904 sayılı kanun uyarınca iş arayanlarndan ücret
          alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için
          aşağıdak telefon numaralarına başvurabilirsiniz. Türkiye İş Kurumu
          İstanbul İl Müdürlüğü : 0212 249 29 87 Türkiye İş Kurumu İstanbul
          Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26
        </small>
      </div>
    </footer>
  )
}

export default Footer
