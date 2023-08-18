import React from 'react'
import s from './footer.module.scss'

import cn from 'clsx'

import LanguageSelect from '@/components/language-select'
import { Link } from '@/components/link'
import Image from '@/components/image'
import { routes } from '@/global'
import { useMedia } from 'react-use'

const Footer = () => {
  const isMobile = useMedia('(max-width: 800px)', true)

  return (
    <footer>
      <div className={s.main}>
        <div className={s.gridY}>
          <div className={s.layers}>
            <Link href="/" className={s.logoC}>
              <Image
                src="/img/layers-logo-hr-technologies.svg"
                alt="Layers Logo"
                loading="lazy"
                width="206"
                height="193"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <div className={cn(s.linksC, s.download)}>
              <h6>DOWNLOAD</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <Link
                    className={s.imgC}
                    href="https://apps.apple.com/tr/app/layers-portal"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/img/apple-appstore.svg"
                      alt="Apple Appstore Logo"
                      width="300"
                      height="300"
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link
                    className={s.imgC}
                    href="https://play.google.com/store/apps/details?id=com.neyasis.neyasis_mobile_portal"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/img/google-play.svg"
                      alt="Google Playstore Logo"
                      width="300"
                      height="300"
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link
                    className={s.imgC}
                    href="#"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/img/huawei-app-gallery.svg"
                      alt="Huawei Appgallery Logo"
                      width="300"
                      height="300"
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={cn(s.linksC, s.company)}>
              <h6>COMPANY</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <Link className={s.link} href="/about">
                    About
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link className={s.link} href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className={s.linksC}>
              <h6>SUPPORT</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <Link className={s.link} href="/get-an-offer">
                    Get an Offer
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link className={s.link} href="/demo-request">
                    Request a Demo
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link className={s.link} href="/terms-of-use">
                    Terms of Use
                  </Link>
                </li>
                <li className={s.linkC}>
                  <Link
                    href="/pdf/personal-data-protection-and-processing-policy.pdf"
                    target="blank"
                    rel="noreferrer noopener"
                    className={s.link}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.gridY}>
          <div>
            <div className={cn(s.linksC, s.features)}>
              <h6>FEATURES</h6>
              <ul
                className={s.links}
                style={
                  {
                    '--column-count': Math.ceil(
                      Object.keys(routes.features.children).length / 6
                    ),
                  } as React.CSSProperties
                }
              >
                {Object.values(routes.features.children).map((route, i) => {
                  return (
                    <li className={s.linkC} key={i}>
                      <Link
                        className={s.link}
                        href={`/${routes.features.path}/${route.path}`}
                      >
                        {route.ui}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div>
            <div className={cn(s.linksC, s.services)}>
              <h6>SERVICES</h6>
              <ul
                className={s.links}
                style={
                  {
                    '--column-count': Math.ceil(
                      Object.keys(routes.features.children).length / 6
                    ),
                  } as React.CSSProperties
                }
              >
                {Object.values(routes.services.children).map((route, i) => {
                  return (
                    <li className={s.linkC} key={i}>
                      <Link
                        className={s.link}
                        href={`/${routes.services.path}/${route.path}`}
                      >
                        {route.ui}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className={s.lngBtn}>
            <LanguageSelect />
          </div>
        )}
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
        <div className={s.imgC}>
          <Image
            src="/img/iskur-logo.svg"
            alt="Iskur Logo"
            width="300"
            height="300"
            style={{ objectFit: 'contain' }}
            loading="lazy"
          />
        </div>
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
