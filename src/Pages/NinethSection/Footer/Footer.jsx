

const Footer = () => {
    return (
        <div className="mt-12 lg:w-[1340px]" >
            <footer className="footer lg:h-[600px] p-36 bg-[#02033B]  text-white ">
                {/* 1st part */}
            <nav>
    <h6 className="footer-title">Scan. Detect. Remove.</h6> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
    <div className="space-x-5 mt-6">
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Terms of use</a>
    </div>
    <div className="mt-10">
    <h1 className="font-normal text-[11px]">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</h1>
    <p>Designed & developed by Bigger Picture</p>
    </div>
  
  
  </nav>

  {/* 2nd part */}
  <nav>
    <h6 className=" text-4xl font-extrabold font-poppins">Miro</h6> 
    <span className='w-[170px] hidden md:block h-[5px] bg-white rounded-sm mb-4  mt-5'></span>
    <div className="flex gap-5 text-[#FFC247] text-lg font-extrabold">
    <span className='w-[40px] hidden md:block h-[5px] bg-[#FFC247] rounded-sm   mt-2'></span>
    <a className="link link-hover">iPhone</a>
    </div>
    <div className="flex gap-5 text-[#FFC247] text-lg font-extrabold">
    <span className='w-[40px] hidden md:block h-[5px] bg-[#FFC247] rounded-sm   mt-2'></span>
    <a className="link link-hover">Android</a>
    </div>
    <div className="flex gap-5 text-[#FFC247] text-lg font-extrabold">
    <span className='w-[40px] hidden md:block h-[5px] bg-[#FFC247] rounded-sm   mt-2'></span>
    <a className="link link-hover">Help</a>
    </div>
    <div className="flex gap-5 text-[#FFC247] text-lg font-extrabold">
    <span className='w-[40px] hidden md:block h-[5px] bg-[#FFC247] rounded-sm   mt-2'></span>
    <a className="link link-hover">About</a>
    </div>
    <div className="flex gap-5 text-[#FFC247] text-lg font-extrabold">
    <span className='w-[40px] hidden md:block h-[5px] bg-[#FFC247] rounded-sm   mt-2'></span>
    <a className="link link-hover">Insights</a>
    </div>
  </nav> 

  <form className="lg:w-[430px] lg:h-[280px] border p-9 rounded-box bg-[#FFC247] text-black -mx-32 lg:mx-10">
    <h6 className="text-2xl font-extrabold font-poppins">Sign up to our newsletter</h6> 
    <p className="text-base font-normal">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn bg-[#02033B] text-white">Submit</button>
      </div>
    </fieldset>
  </form>
 
</footer>
<footer className="footer items-center p-4 bg-[#02033B]  text-white">
  <aside className="items-center grid-flow-col -mt-40 mx-32">
  
    <p className="font-normal text-xs ">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other <br /> countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play <br />logo are trademarks of Google LLC.</p>
  </aside> 
  
</footer>

        </div>
    );
};

export default Footer;