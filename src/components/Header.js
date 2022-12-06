import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { title: "News", link: "/" },
    { title: "About", link: "/About" },
    { title: "Contact", link: "/Contact" },
  ];
  return (
    <>
      <header className='bg-dark py-3'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-auto'>
              <div className='brand'>
                <Link className='text-white text-lg' to='/'>
                  News-App
                </Link>
              </div>
            </div>
            <div className='col-auto'>
              <ul className='d-flex align-items-center justify-content-end list-none m-0'>
                {navItems.map((item, index) => (
                  <li key={index} className='py-2 px-4'>
                    <Link className='text-white' to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
