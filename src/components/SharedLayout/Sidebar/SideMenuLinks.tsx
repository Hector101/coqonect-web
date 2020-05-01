import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

import { RenderSVG } from 'src/components/SharedLayout/Shared/SVGS';

// constants
import sideMenuLinkOptions from 'src/constants/sideMenuLinkOptions';
import adminSideMenuLinkOptions from 'src/constants/adminSideMenuLinkOptions';

// types
import { MenuList, LinkType } from 'src/interfaces/SideMenuLink';

// context
import { useStore } from 'src/store';

type Props = {
  isMobile?: boolean;
  isAdminDashboard: boolean;
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
    'justify-center': !uiStore.sideMenuOpened && !isMobile,
  });

  return (
    <>
      {
        menuLinks.map((menuLink) => {
          return (
            <div key={menuLink.categoryName}>
              <div className={linkCategoryClassName}>
              <span className="w1 h1">
                <RenderSVG name={menuLink.iconName} className="w1 h1 fill-black-30" />
              </span>
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
  const { uiStore, userStore } = useStore();
  const router = useRouter();

  const mainClassName = classnames('h3 ph3 f6 pointer black-80 c-sidemenu-link link flex items-center', {
    'c-selected': selected && link.selectable,
    'justify-center': !uiStore.sideMenuOpened && !isMobile,
  });
  const linkTextClassName = classnames('ml3', {
    'dn c-fade-out': !uiStore.sideMenuOpened && !isMobile,
    'dib c-ease-in': uiStore.sideMenuOpened,
  });

  const _handleClick = async () => {
    if (link.selectable) {
      router.push(link.route, link.route, { shallow: true });
    } else if (!link.selectable && link.value === 'Logout') {
      userStore.handleLogout(
        () => {
          uiStore.setSnackBarMessage('Logout successful!', 'info');
          router.push(link.route, link.route);
        },
        () => {
          uiStore.setSnackBarSuccessMessage('Logout not successful!');
        },
      );
    }
  };

  return (
    <a className={mainClassName} id={link.route} onClick={_handleClick}>
      <span className="w1 h1">
        <RenderSVG name={link.iconName} className="w1 h1" />
      </span>
      <span id={link.route} className={linkTextClassName}>{link.value}</span>
    </a>
  );
});

const SideMenuLinks: FunctionComponent<Props> = ({ isMobile, isAdminDashboard }) => {
  return (
      <div className="c-SideMenuLinks">
        <MenuLinkCategories
          menuLinks={isAdminDashboard ? adminSideMenuLinkOptions : sideMenuLinkOptions}
          isMobile={isMobile}
        />
      </div>
  );
};

export default SideMenuLinks;
