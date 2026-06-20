import type { ReactNode } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const linkColumns: FooterColumn[] = [
  {
    heading: "PROGRAM",
    links: [
      { label: "Why Partner", href: "/why-partner" },
      { label: "Investment", href: "/investment" },
      { label: "Process", href: "/process" },
      { label: "Curriculum", href: "/curriculum" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About CLC", href: "/about" },
      { label: "Existing Centers", href: "/centers" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const contactDetails: FooterLink[] = [
  { label: "franchise@careerlabconsulting.com", href: "mailto:franchise@careerlabconsulting.com" },
  { label: "+91 00000 00000", href: "tel:+9100000000" },
  { label: "Head Office, Gurgram India", href: "/contact" },
];

export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0a0e14] px-6 pb-8 pt-12 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        {/* Top: brand + link columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:max-w-[240px]">
            <span className="text-xl font-bold tracking-tight text-white">
              CLC
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Career Lab Consulting — India&apos;s AI/ML EdTech brand,
              partnering with institutes nationwide.
            </p>
          </div>

          {/* Link columns */}
          {linkColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold tracking-[0.15em] text-slate-500">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-slate-500">
              CONTACT
            </h3>
            <ul className="mt-4 space-y-3">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} Career Lab Consulting. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Franchise Portal v1.0</p>
        </div>
      </div>
    </footer>
  );
}