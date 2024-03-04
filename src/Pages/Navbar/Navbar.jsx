import { RiGlobalLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {/* Mobile Mode */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <details>
          <summary>Product</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    <li>
        <details>
          <summary>Solutions</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    <li>
        <details>
          <summary>Resource</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Enterprise</a></li>
     
      <li><a>Pricing</a></li>
      </ul>
    </div>
    <h1 className="font-poppins text-2xl">Miro</h1>
     {/* desktop mode */}
  <div className="navbar-center  hidden lg:flex text-xl">
    <ul className="menu menu-horizontal px-1">
    <li>
        <details>
          <summary>Product</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    <li>
        <details>
          <summary>Solutions</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    <li>
        <details>
          <summary>Resource</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Enterprise</a></li>
     
      <li><a>Pricing</a></li>
    </ul>
  </div>
  </div>
 
  <div className="navbar-end text-base lg:gap-3">
    <div className="text-xl">
    <  RiGlobalLine />
    </div>
    <h1>EN</h1>
    
    <h1 className="text-xl">Contact sales</h1>
    <h1 >Login</h1>
    <button className="btn bg-blue-500 text-white rounded-full">Sign Up Free 
    <FaArrowRight />
    </button>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;