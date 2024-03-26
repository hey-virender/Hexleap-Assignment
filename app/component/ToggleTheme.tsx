"use client";
import { Fragment } from "react";
import React from "react";
import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

const ToggleTheme = () => {
  const { setTheme } = useTheme();
  return (
    <div className="absolute top-[1%] right-[1%] z-50 xxs:top-[2%]">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-bgdark dark:text-white  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 xxs:text-a5 xxs:w-[80%] xxs:p-[10%]  xs:text-a5">
            Mode
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-50 origin-top-right rounded-md bg-white dark:bg-bgdark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="py-1">
              <Menu.Item>
                <button
                  className="block px-4 py-2 text-sm text-yellow-400 dark:text-white"
                  onClick={() => {
                    setTheme("light");
                  }}
                >
                  <FiSun />
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="block px-4 py-2 text-sm dark:text-yellow-400"
                  onClick={() => {
                    setTheme("dark");
                  }}
                >
                  <LuMoonStar />
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ToggleTheme;
