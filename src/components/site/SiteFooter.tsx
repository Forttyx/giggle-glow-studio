import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-foreground/90 bg-royal text-royal-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">Anglické Centrum Plzeň</div>
          <p className="mt-3 max-w-md text-sm text-royal-foreground/80">
            Učíme děti i dospělé mluvit anglicky beze strachu — od roku 2011. Malá školička s domácí atmosférou
            a kurzy Callanovou metodou pro dospělé.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href="tel:+420775220044" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" /> +420 775 220 044
            </a>
            <a href="mailto:info@anglickecentrum.cz" className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" /> info@anglickecentrum.cz
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>Slovanská 149, 326 00 Plzeň – Slovany</span>
            </div>
          </div>
        </div>

        <div>
          <div className="font-display text-lg font-bold">Nabízíme</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/anglicka-skolicka" className="hover:underline">Anglická školička</Link></li>
            <li><Link to="/anglictina-pro-deti" className="hover:underline">Angličtina pro děti</Link></li>
            <li><Link to="/anglictina-pro-dospele" className="hover:underline">Angličtina pro dospělé</Link></li>
            <li><Link to="/aktuality" className="hover:underline">Aktuality</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display text-lg font-bold">Informace</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/o-nas" className="hover:underline">O nás</Link></li>
            <li><Link to="/kontakt" className="hover:underline">Kontakt &amp; fakturace</Link></li>
            <li><Link to="/gdpr" className="hover:underline">Ochrana osobních údajů</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-royal-foreground/20 px-4 py-5 text-center text-xs text-royal-foreground/70 sm:px-6">
        © {new Date().getFullYear()} MBedu, s.r.o. &amp; Lingua Minor, s.r.o. — Anglické Centrum Plzeň
      </div>
    </footer>
  );
}