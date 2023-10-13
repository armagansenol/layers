import React from 'react'
import s from './footer.module.scss'

import cn from 'clsx'
import { useTranslation } from 'next-i18next'
import { useMedia } from 'react-use'

import CustomImage from '@/components/custom-image'
import { CustomLink } from '@/components/custom-link'
import LanguageSelect from '@/components/language-select'
import { Locales, routes } from '@/global'

const Footer = () => {
  const { t, i18n } = useTranslation('common')
  const isMobile = useMedia('(max-width: 800px)', true)

  return (
    <footer>
      <div className={s.main}>
        <div className={s.gridY}>
          <div className={s.layers}>
            <CustomLink href="/" className={s.logoC}>
              <CustomImage
                src="/img/layers-logo-hr-technologies.svg"
                alt="Layers Logo"
                loading="lazy"
                width="206"
                height="193"
                style={{ objectFit: 'contain' }}
              />
            </CustomLink>
            <div className={cn(s.linksC, s.download)}>
              <h6>{t('footer.download')}</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <CustomLink
                    className={s.imgC}
                    href="https://apps.apple.com/tr/app/layers-portal"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <CustomImage
                      src="/img/apple-appstore.svg"
                      alt="Apple Appstore Logo"
                      width="300"
                      height="300"
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </CustomLink>
                </li>

                <li className={s.linkC}>
                  <CustomLink
                    className={s.imgC}
                    href="https://play.google.com/store/apps/details?id=com.neyasis.neyasis_mobile_portal"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <CustomImage
                      src="/img/google-play.svg"
                      alt="Google Playstore Logo"
                      width="300"
                      height="300"
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </CustomLink>
                </li>

                {/* <li className={s.linkC}>
                  <CustomLink
                    className={s.imgC}
                    href="#"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <CustomImage
                      src="/img/huawei-app-gallery.svg"
                      alt="Huawei Appgallery Logo"
                      width="300"
                      height="300"
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </CustomLink>
                </li> */}
              </ul>
            </div>
          </div>
          <div>
            <div className={cn(s.linksC, s.company)}>
              <h6>{t('footer.company')}</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <CustomLink className={s.link} href="/about">
                    {t('footer.about')}
                  </CustomLink>
                </li>
                <li className={s.linkC}>
                  <CustomLink className={s.link} href="/contact">
                    {t('footer.contact')}
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className={s.linksC}>
              <h6>{t('footer.support')}</h6>
              <ul className={s.links}>
                <li className={s.linkC}>
                  <CustomLink className={s.link} href="/get-an-offer">
                    {t('footer.getAnOffer')}
                  </CustomLink>
                </li>
                <li className={s.linkC}>
                  <CustomLink className={s.link} href="/demo-request">
                    {t('footer.requestADemo')}
                  </CustomLink>
                </li>
                {/* <li className={s.linkC}>
                  <CustomLink className={s.link} href="/terms-of-use">
                    {t('footer.termsOfUse')}
                  </CustomLink>
                </li> */}
                <li className={s.linkC}>
                  {/* <CustomLink
                    href="/pdf/personal-data-protection-and-processing-policy.pdf"
                    target="blank"
                    rel="noreferrer noopener"
                    className={s.link}
                  >
                    {t('footer.privacyPolicy')}
                  </CustomLink> */}
                  {i18n.language === 'en' ? (
                    <>
                      <CustomLink
                        href="/pdf/personal-data-protection-and-processing-policy.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={s.link}
                        locale={false}
                      >
                        {t('footer.privacyPolicy')}
                      </CustomLink>
                    </>
                  ) : (
                    <>
                      <CustomLink
                        href="/pdf/kisisel-verilerin-korunmasi-ve-islenmesi-politikasi.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={s.link}
                        locale={false}
                      >
                        {t('footer.privacyPolicy')}
                      </CustomLink>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.gridY}>
          <div>
            <div className={cn(s.linksC, s.features)}>
              <h6>{t('footer.features')}</h6>
              <ul
                className={s.links}
                style={
                  {
                    '--column-count': Math.ceil(
                      Object.keys(
                        routes[i18n.language as Locales].features.children
                      ).length / 6
                    ),
                  } as React.CSSProperties
                }
              >
                {Object.values(
                  routes[i18n.language as Locales].features.children
                ).map((route, i) => {
                  return (
                    <li className={s.linkC} key={i}>
                      <CustomLink
                        className={s.link}
                        href={`/${
                          routes[i18n.language as Locales].features.path
                        }/${route.path}`}
                      >
                        {route.ui}
                      </CustomLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div>
            <div className={cn(s.linksC, s.services)}>
              <h6>{t('footer.services')}</h6>
              <ul
                className={s.links}
                style={
                  {
                    '--column-count': Math.ceil(
                      Object.keys(
                        routes[i18n.language as Locales].features.children
                      ).length / 6
                    ),
                  } as React.CSSProperties
                }
              >
                {Object.values(
                  routes[i18n.language as Locales].services.children
                ).map((route, i) => {
                  return (
                    <li className={s.linkC} key={i}>
                      <CustomLink
                        className={s.link}
                        href={`/${
                          routes[i18n.language as Locales].services.path
                        }/${route.path}`}
                      >
                        {route.ui}
                      </CustomLink>
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
        <small>© 2023 Layers. {t('footer.rights')}</small>
      </div>

      <div className={s.iskur}>
        <div className={s.imgC}>
          <CustomImage
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
