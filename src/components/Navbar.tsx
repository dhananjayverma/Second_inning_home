import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Type, Contrast, Phone, Sunrise, ChevronDown } from 'lucide-react';
import { navLinks } from '../data';

export function Navbar({
  onToggleLargeFont,
  onToggleContrast,
  largeFont,
  highContrast,
}: {
  onToggleLargeFont: () => void;
  onToggleContrast: () => void;
  largeFont: boolean;
  highContrast: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location]);

  const showSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? 'py-3'
          : 'py-4'
      }`}
    >
      <nav
        className={`max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-5 flex items-center gap-4 lg:gap-6 justify-between rounded-full ${
          showSolid ? 'soft-panel' : 'bg-white/70 backdrop-blur-xl border border-white/55 shadow-[0_18px_50px_-28px_rgba(29,51,36,0.28)]'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0 pl-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
              showSolid ? 'bg-forest-900 text-white' : 'bg-forest-900 text-white'
            }`}
          >
            <Sunrise className="w-5 h-5 text-gold-400" />
          </div>
          <div className="leading-none">
            <div className="font-serif text-[1.15rem] font-medium tracking-tight text-forest-950">
              Second Innings
            </div>
            <div className="text-[10px] tracking-[0.34em] uppercase mt-0.5 text-forest-500">
              House
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-1 rounded-full px-1.5 py-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setDropdown(link.children ? link.label : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                to={link.href}
                className="flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-full whitespace-nowrap transition-all text-forest-700 hover:text-forest-950 hover:bg-white/70"
              >
                {link.label}
                {link.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {link.children && dropdown === link.label && (
                <div className="absolute top-full left-0 pt-3 w-64">
                  <div className="soft-panel rounded-[1.4rem] p-2.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block text-sm text-forest-700 hover:bg-white/80 hover:text-forest-950 px-4 py-2.5 rounded-xl transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-1 rounded-full p-1 bg-white/70 border border-forest-100">
            <button
              onClick={onToggleLargeFont}
              title="Large fonts"
              className={`p-2 rounded-full transition-all ${largeFont ? 'bg-forest-900 text-white' : 'text-forest-600 hover:bg-forest-100'}`}
            >
              <Type className="w-4 h-4" />
            </button>
            <button
              onClick={onToggleContrast}
              title="High contrast"
              className={`p-2 rounded-full transition-all ${highContrast ? 'bg-forest-900 text-white' : 'text-forest-600 hover:bg-forest-100'}`}
            >
              <Contrast className="w-4 h-4" />
            </button>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-forest-900 hover:bg-forest-950 text-cream-50 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-xl hover:shadow-forest-900/20"
          >
            <Phone className="w-4 h-4" />
            Book a Visit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-forest-900">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden soft-panel rounded-[1.5rem] mt-3 max-h-[80vh] overflow-y-auto shadow-2xl mx-3">
          <div className="px-6 py-6 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link to={link.href} className="text-forest-800 font-medium hover:text-gold-600 text-base block py-2">
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 border-l-2 border-forest-100 ml-2 mb-1">
                    {link.children.map((child) => (
                      <Link key={child.label} to={child.href} className="block text-sm text-forest-600 hover:text-gold-600 py-1.5">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 pt-4 flex-wrap">
              <button onClick={onToggleLargeFont} className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm ${largeFont ? 'bg-forest-800 text-white' : 'bg-forest-50 text-forest-700'}`}>
                <Type className="w-4 h-4" /> Large text
              </button>
              <button onClick={onToggleContrast} className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm ${highContrast ? 'bg-forest-800 text-white' : 'bg-forest-50 text-forest-700'}`}>
                <Contrast className="w-4 h-4" /> Contrast
              </button>
            </div>
            <Link to="/contact" className="bg-forest-800 text-cream-50 px-5 py-3.5 rounded-full text-sm font-medium text-center mt-3">
              Book a Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
