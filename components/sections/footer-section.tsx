"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "About", href: "#about" },
    { label: "Tickets", href: "#tickets" },
    { label: "Speakers", href: "#speakers" },
    { label: "The Team", href: "#team" },
  ],
  getInvolved: [
    { label: "Join Our Team", href: "#team" },
    { label: "Apply to Speak", href: "#" },
    { label: "Partner With Us", href: "#" },
    { label: "Contact", href: "#" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com/tedxuiuc" },
    { label: "Twitter", href: "https://twitter.com/tedxuiuc" },
    { label: "LinkedIn", href: "https://linkedin.com/company/tedxuiuc" },
    { label: "YouTube", href: "https://youtube.com/@tedxuiuc" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="#hero" className="text-lg font-medium text-foreground">
              TEDx<span className="text-[#E62B1E]">UIUC</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ideas worth spreading. Join us at the University of Illinois for inspiring talks, performances, and conversations.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 TEDxUIUC. This independent TEDx event is operated under license from TED.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
