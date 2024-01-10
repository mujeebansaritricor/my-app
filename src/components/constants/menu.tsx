import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LoginIcon from '@mui/icons-material/Login';

const createMainMenu = () => [
  {
    icon: <HomeIcon className="h-auto w-full" />,
    title: 'Home',
    active: true,
  },
  {
    icon: <PersonIcon className="h-auto w-full" />,
    title: 'Employee',
    active: false,
  },
  {
    icon: <BusinessIcon className="h-auto w-full" />,
    title: 'Entity',
    active: false,
  },
  {
    icon: <AccountBalanceIcon className="h-auto w-full" />,
    title: 'Payroll',
    active: false,
  },
  {
    icon: <LoginIcon className="h-auto w-full" />,
    title: 'Login',
    active: false,
  },
];

const MainMenu = () => {
  const mainMenuItems = createMainMenu();

  return (
    <div>
      {mainMenuItems.map((menuItem) => (
        <MenuItem key={menuItem.title} {...menuItem} />
      ))}
    </div>
  );
};

const MenuItem = ({ icon, title, active }: { icon: JSX.Element, title: string, active: boolean }) => (
<div onClick={() => {}}>
    {icon}
    <span>{title}</span>
  </div>
);

export default MainMenu;
