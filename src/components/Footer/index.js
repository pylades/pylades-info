import React from 'react'
import { Flex } from 'rebass'

import Link from '../Link'

const links = [
  { url: 'https://pylades.finance', text: 'About' },
  { url: 'https://docs.pylades.finance/', text: 'Docs' },
  { url: 'https://github.com/pylades/pylades-info', text: 'Code' },
]

const FooterLink = ({ children, ...rest }) => (
  <Link external color="pyladespink" fontWeight={500} fontSize={12} mr={'8px'} {...rest}>
    {children}
  </Link>
)

const Footer = () => (
  <Flex as="footer" p={24}>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.url}>
        {link.text}
      </FooterLink>
    ))}
  </Flex>
)

export default Footer
