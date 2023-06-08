import Text from '../Typography/Text';
import NavLink from './NavLink';

const navItems = [
  {
    label: 'Início',
    path: '/',
  },
  {
    label: 'Contato',
    path: '/contato',
  },
  {
    label: 'Galeria',
    path: '/galeria',
  },
];

function Navbar() {
  return (
    <nav className="w-full flex justify-center p-5 gap-20">
      Logo
      <div className="flex justify-between w-min">
        {navItems.map((navItem) => (
          <NavLink
            href={navItem.path}
            key={navItem.label}
          >
            <Text text={navItem.label} size="text-base" textTransform="uppercase" />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
