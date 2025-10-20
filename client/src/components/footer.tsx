import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="text-2xl font-serif font-bold text-primary mb-4" data-testid="text-footer-brand">
              MOWOKI
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6" data-testid="text-footer-description">
              Votre porte vers l'Afrique authentique. Nous créons des expériences de voyage inoubliables qui célèbrent la richesse culturelle et naturelle du continent africain.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground" data-testid="text-footer-links-title">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" data-testid="link-footer-accueil">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-lg">
                    Accueil
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/a-propos" data-testid="link-footer-apropos">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-lg">
                    À Propos
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-lg">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground" data-testid="text-footer-contact-title">
              Contactez-Nous
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@mowoki.com"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  contact@mowoki.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="tel:+221123456789"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  +228 70 60 92 43
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span data-testid="text-footer-address">Lomé, Togo</span>
              </li>
            </ul>
            <div className="mt-6 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1" data-testid="text-footer-hours-title">Heures d'ouverture</p>
              <p data-testid="text-footer-hours-weekday">Lun - Ven : 9h00 - 18h00</p>
              <p data-testid="text-footer-hours-saturday">Sam : 10h00 - 16h00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">© {new Date().getFullYear()} MOWOKI - Home for Africa. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
