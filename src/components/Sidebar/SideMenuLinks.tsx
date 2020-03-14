import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

import { RenderSVG } from 'src/components/Shared/SVGS';

// constants
import sideMenuLinkOptions from 'src/constants/sideMenuLinkOptions';

// types
import { MenuList, LinkType } from 'src/interfaces/SideMenuLink';

// context
import { useStore } from 'src/store';

type Props = {
  isMobile?: boolean;
};

type MenuLinkCategoriesProps = {
  menuLinks: MenuList[],
  isMobile?: boolean;
};

type MenuLinksProps = {
  menuLink: MenuList;
  selectedRoute: string;
  isMobile?: boolean;
};

type MenuLinkProps = {
  link: LinkType;
  selected?: boolean;
  isMobile?: boolean;
};

const MenuLinkCategories: FunctionComponent<MenuLinkCategoriesProps> = observer(({ menuLinks, isMobile }) => {
  const { uiStore } = useStore();
  const router = useRouter();

  const linkTitleClassName = classnames('mv0 pv1 black-30 transition-all ml3', {
    'dn c-hide-link-text': !uiStore.sideMenuOpened && !isMobile,
  });

  const linkCategoryClassName = classnames('bb bt b--black-10 flex items-center ph3 h3', {
    'justify-center': !uiStore.sideMenuOpened,
  });

  return (
    <>
      {
        menuLinks.map((menuLink) => {
          return (
            <div key={menuLink.categoryName}>
              <div className={linkCategoryClassName}>
                <img src={`/svgs/${menuLink.iconName}.svg`} className="w1 h1 fill-black-30" />
                <h4 className={linkTitleClassName}>{menuLink.categoryName}</h4>
              </div>
              <MenuLinks menuLink={menuLink}  selectedRoute={router.pathname} isMobile={isMobile} />
            </div>
          );
        })
      }
    </>
  );
});

const MenuLinks: FunctionComponent<MenuLinksProps> = ({ menuLink, selectedRoute, isMobile }) => {
  return (
    <div className="flex flex-column">
      {
        menuLink.links.map((link) => {
          return (
            <MenuLink
              key={link.route}
              link={link}
              selected={selectedRoute === link.route}
              isMobile={isMobile}
            />
          );
        })
      }
    </div>
  );
};

const MenuLink: FunctionComponent<MenuLinkProps> = observer(({ link, selected, isMobile }) => {
  const { uiStore } = useStore();

  const mainClassName = classnames('h3 ph3 f6 pointer black-80 c-sidemenu-link link flex items-center', {
    'c-selected': selected && link.selectable,
    'justify-center': !uiStore.sideMenuOpened,
  });
  const linkTextClassName = classnames('ml3', {
    'dn c-fade-out': !uiStore.sideMenuOpened && !isMobile,
    'dib c-ease-in': uiStore.sideMenuOpened,
  });

  const _handleClick = async () => {
    if (link.onClick) {
      link.onClick();
    }
  };

  return (
    <Link href={link.route}>
      <a className={mainClassName} id={link.route} onClick={_handleClick}>
        <span className="w1 h1">
          <RenderSVG name={link.iconName} className="w1 h1" />
        </span>
        <span id={link.route} className={linkTextClassName}>{link.value}</span>
      </a>
    </Link>
  );
});

const SideMenuLinks: FunctionComponent<Props> = ({ isMobile }) => {
  return (
      <div className="c-SideMenuLinks">
        <MenuLinkCategories menuLinks={sideMenuLinkOptions} isMobile={isMobile} />
      </div>
  );
};

export default SideMenuLinks;
