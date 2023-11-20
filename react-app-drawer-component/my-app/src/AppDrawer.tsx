import { useState } from 'react';
import './AppDrawer.css';
import { ImMenu } from 'react-icons/im';

type Props = {
  drawerItems: string[];
};

export default function AppDrawer({ drawerItems }: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  function openDrawer() {
    setOpenMenu(!openMenu);
  }

  function closeDrawer() {
    setOpenMenu(false);
  }

  return (
    <div className="wrapper">
      <div className="menu-icon">
        <ImMenu
          color="white"
          onClick={openDrawer}
          className={openMenu ? 'hidden' : null}
        />
      </div>
      <div className={openMenu ? 'menu-drawer is-open' : 'menu-drawer'}>
        <div>
          <h2 className="menu-heading">Menu</h2>
        </div>
        {drawerItems.map((item) => (
          <div onClick={closeDrawer} className="menu-item">
            <MenuDrawer item={item} />
          </div>
        ))}
      </div>
      <div
        onClick={closeDrawer}
        className={openMenu ? 'menu-shade is-drawn' : 'menu-shade'}></div>
    </div>
  );
}

type MenuDrawerProps = {
  item: string;
};

function MenuDrawer({ item }: MenuDrawerProps) {
  return (
    <div>
      <div>{item}</div>
    </div>
  );
}
