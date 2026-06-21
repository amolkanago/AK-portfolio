import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section
            id="home"
            className="
                relative
                min-h-[85vh]
                flex
                items-center
                overflow-hidden
                bg-white
                dark:bg-slate-950
            "
        >
            <HeroBackground />

            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                    px-6
                    lg:px-8
                    py-20
                    w-full
                "
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <HeroContent
                        scrollToSection={scrollToSection}
                    />

                    <HeroImage />
                </div>
            </div>

            {/* <ScrollIndicator
                onClick={() => scrollToSection("about")}
            /> */}
        </section>
    );
}