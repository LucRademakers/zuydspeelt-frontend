"use client";

// install npm install @headlessui/react
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

export default function Dropdown() {
  return (




    <Menu>
      <Menu.Button>Profiel</Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items>

          {links.map((link) => (
            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                <Link href={link.href}>
                  <button

                    className={`${active ? 'bg-blue-500 text-white' : ''}
                  w-full rounded-md p-2`}
                  >
                    {link.label}

                  </button>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

