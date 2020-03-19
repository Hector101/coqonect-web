import React, { FunctionComponent } from 'react';

import Input from 'src/components/Shared/Input';
import Button from 'src/components/Shared/Button';

import Logo from '../../../public/svgs/Logo.svg';

const Footer: FunctionComponent<{}> = () => {
  return (
      <section>
        <div className="c-FooterSection">
        <div className="c-FooterContainer flex-ns justify-between pv4 items-start-ns">
        <div className="flex-ns items-center pointer">
          <Logo className="c-LogoIcon"/>
          <span className="b c-LogoText" >CoQonect</span>
        </div>
        <div>
        <ul className="list ph0 ma0-ns">
          <li className="c-NavLinks pointer pv2"><a>About Us</a></li>
          <li className="c-NavLinks pointer pv2"><a>Contact</a></li>
          <li className="c-NavLinks pointer pv2"><a>FAQs</a></li>
          <li className="c-NavLinks pointer pv2"><a>Terms &amp; Conditions</a></li>
        </ul>
        </div>
        <div>
        <ul className="list ph0 ma0-ns">
          <li className="c-NavLinks pointer pv2"><a>Facebook</a></li>
          <li className="c-NavLinks pointer pv2"><a>Twitter</a></li>
          <li className="c-NavLinks pointer pv2"><a>LinkedIn</a></li>
        </ul>
        </div>
        <div>
          <p>subscribe to our newsletter</p>
          <div className="flex-ns">
            <Input
              className="pv3 pr2 ph2 f6 input-reset bg-transparent w-100"
              containerClassName="mt2"
              defaultType="text"
              placeholder="Enter E-mail Address"
              name="text"
              value=""
            />
            <Button
              className="bn br1 bg-primary-blue  white pointer f6 pv2 ph4 ph3 w-100 w-auto-ns mt2"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </div>
        </div>
        </div>
        <p className="tc f7 pv3 ma0">&copy; copyright- All rights reserved</p>
      </section>
  );
};

export default Footer;
