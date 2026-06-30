import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data';

export function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100/70 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center">
                <Sun className="w-5 h-5 text-gold-300" />
              </div>
              <div className="leading-tight">
                <div className="font-serif text-xl font-semibold text-white">Second Innings</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-forest-100/60">House</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              A premium senior living community where every senior can laugh, travel,
              learn, celebrate, and truly enjoy life again.
            </p>
            <p className="font-serif italic text-gold-200 text-lg leading-snug">
              "Because life doesn't end at retirement. It begins again."
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/wellness#health" className="hover:text-gold-300 transition-colors">24×7 Healthcare</Link></li>
              <li><Link to="/pricing" className="hover:text-gold-300 transition-colors">Luxury Accommodation</Link></li>
              <li><Link to="/pricing" className="hover:text-gold-300 transition-colors">Personalized Dining</Link></li>
              <li><Link to="/wellness" className="hover:text-gold-300 transition-colors">Wellness Center</Link></li>
              <li><Link to="/community#family" className="hover:text-gold-300 transition-colors">Family Portal App</Link></li>
              <li><Link to="/experiences#adventures" className="hover:text-gold-300 transition-colors">Adventure Programs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-300 mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-300 mt-0.5 shrink-0" />
                <span>hello@secondinningshouse.in</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-300 mt-0.5 shrink-0" />
                <span>Green Valley Road, Hill District, India</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 Second Innings House. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>for every second chapter</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
