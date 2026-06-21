import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterBottom } from './FooterBottom';

export function Footer() {
    return (
        <footer
            className="
    relative
    bg-gradient-to-br
    from-white
    via-slate-50
    to-slate-100
    dark:from-slate-900
    dark:via-slate-900
    dark:to-slate-800
    text-slate-900
    dark:text-white
    py-16
    overflow-hidden
  "
        >
            {/* Background decorations */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                aria-hidden="true"
            >
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
            </div>

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <FooterBrand />
                    <FooterLinks />
                    <FooterSocial />
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}