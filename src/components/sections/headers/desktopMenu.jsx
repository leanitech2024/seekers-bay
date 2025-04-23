import { menuList } from '@/lib/fackdata/menuList';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa6';

const DesktopMenu = () => {
  return (
    <nav className='hidden xl:block'>
      <ul className='flex items-center gap-[25px]'>
        {menuList.map(({ dropDownMenu, id, label, path }) => {
          return (
            <li key={id} className='leading-[164%] relative group'>
              <Link
                href={path}
                className='flex items-center gap-1 py-5 text-lg font-semibold transition-all duration-500 font-jost group-hover:text-primary-foreground'>
                {label}
                {dropDownMenu.length && <FaAngleDown className='text-sm' />}
              </Link>
              {dropDownMenu.length && (
                <ul className='absolute z-10 invisible transition-all duration-500 translate-y-5 shadow-sm opacity-0 top-full bg-background min-w-56 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0'>
                  {dropDownMenu.map(({ id, label, path }) => {
                    return (
                      <li key={id}>
                        <Link
                          href={path}
                          className='font-semibold font-jost hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300'>
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
