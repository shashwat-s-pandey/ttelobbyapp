const Footer = () => {
  return (
    <footer className="bg-blue-600 w-full text-gray-200 text-center py-2 mt-auto z-50">
      <div className="flex flex-wrap justify-center gap-4 px-5">
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">DISCLAIMER</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">REIS</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">RBS</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">ICMS</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">TMS</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">NGET</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">RCT</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">WECRS</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">FOIS</a>
        <a className="text-[10px] sm:text-sm hover:text-white font-semibold" href="#">NDMA</a>
      </div>
      <p className="text-[10px] sm:text-sm mt-2">&copy; {new Date().getFullYear()} CRIS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
