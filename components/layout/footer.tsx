import { Linkedin } from 'lucide-react'

const footerLinks = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#quote-form', label: 'Request Quote' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Zone A: Links and Social */}
        <div className="py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and Links */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <span className="text-xl font-bold text-foreground tracking-tight">
              VELTEC
            </span>
            <nav className="flex flex-wrap justify-center md:justify-start gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end">
            <a
              href="#"
              className="p-2 text-muted hover:text-foreground transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Zone B: Copyright and Made in Germany */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {currentYear} Veltec Precision GmbH. All rights reserved.</p>
          <p>Made in Germany</p>
        </div>

        {/* Zone C: Legal Links */}
        <div className="py-4 border-t border-border flex flex-wrap justify-center gap-6 text-xs text-muted">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Imprint
          </a>
        </div>
      </div>
    </footer>
  )
}
