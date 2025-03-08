"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { Logo } from "../Logo/Logo";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      header: t("footer.useful_links"),
      id: "product",
      links: [
        { id: 1, name: t("footer.about_us"), href: "/about-us" },
        { id: 2, name: t("footer.projects"), href: "/projects" },
        { id: 3, name: t("footer.contact_us"), href: "/contact-us" },
      ],
    },
    {
      header: t("footer.contact"),
      id: "contact",
      links: [
        {
          id: 890,
          name: (
            <span className={styles.iconsBox}>
              <FaPhoneAlt />
              {t("footer.phone_number")}
            </span>
          ),
          href: "",
        },
        {
          id: 89,
          name: (
            <span className={styles.iconsBox}>
              <MdEmail />
              {t("footer.email")}
            </span>
          ),
          href: "",
        },
        {
          id: 34,
          name: (
            <span className={styles.iconsBox}>
              <FaLocationDot />
              {t("footer.address")}
            </span>
          ),
          href: "",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      href: "https://t.me/cryptonode_io",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      href: "https://t.me/cryptonode_io",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      href: "https://t.me/cryptonode_io",
    },
    {
      id: 4,
      icon: <FaTelegramPlane />,
      href: "https://t.me/cryptonode_io",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Logo />
        {footerLinks.map((link) => (
          <div
            key={link.header}
            className={clsx(styles.column, styles[link.id])}
          >
            <h3 className={styles.header}>{link.header}</h3>
            <ul className={styles.list}>
              {link.links.map((item) => (
                <li key={item.id} className={styles.listLi}>
                  <Link href={item.href} className={styles.socialItems}>
                    <h4 className={styles.link}>{item.name}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className={styles.header}>{t("footer.follow_us")}</h3>
          <ul className={styles.listSocial}>
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                className={styles.socialItems}
                href={link.href}
              >
                {link.icon}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.contacts}>
        <a
          href="https://meekz-it.vercel.app/"
          target="_blank"
          style={{ height: "30px" }}
        >
          <Image
            src={"/assets/images/meekz-it.svg"}
            priority
            alt="logo"
            width={134}
            height={44}
            quality={100}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
