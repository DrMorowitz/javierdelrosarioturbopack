import { Stethoscope, Menu, Globe, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface MedicalNavbarProps {
  logo?: {
    url: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
}

const MedicalNavbar = ({
  logo = {
    url: "/",
    title: "Dr. Javier del Rosario",
  },
  menu = [
    { title: "nav.home", url: "/" },
    {
      title: "nav.services",
      url: "/servicios",
      items: [
        {
          title: "services.prostate.title",
          description: "services.prostate.subtitle",
          icon: <Stethoscope className="size-5 shrink-0" />,
          url: "/servicios#prostata",
        },
        {
          title: "services.kidney.title", 
          description: "services.kidney.subtitle",
          icon: <Stethoscope className="size-5 shrink-0" />,
          url: "/servicios#calculos",
        },
        {
          title: "services.biopsy.title",
          description: "services.biopsy.subtitle", 
          icon: <Stethoscope className="size-5 shrink-0" />,
          url: "/servicios#biopsia",
        },
        {
          title: "services.ultrasound.title",
          description: "services.ultrasound.subtitle",
          icon: <Stethoscope className="size-5 shrink-0" />,
          url: "/servicios#ultrasonido",
        },
      ],
    },
    { title: "nav.about", url: "/sobre-mi" },
    { title: "nav.contact", url: "/contacto" },
  ],
  mobileExtraLinks = [
    { name: "contact.phone", url: "tel:+507-xxx-xxxx" },
    { name: "contact.whatsapp", url: "https://wa.me/507xxxxxxxx" },
  ],
}: MedicalNavbarProps) => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const getTranslatedTitle = (title: string) => {
    // If title starts with a translation key, translate it
    if (title.includes('.')) {
      return t(title);
    }
    return title;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="section-container">
        <nav className="hidden justify-between lg:flex py-4">
          <div className="flex items-center gap-6">
            <Link to={logo.url} className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Stethoscope className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, isActiveRoute, getTranslatedTitle))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
            <Button asChild size="sm">
              <Link to="/contacto">{t('nav.appointment')}</Link>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between py-4">
            <Link to={logo.url} className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold hidden sm:block">{logo.title}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-1"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs">{language.toUpperCase()}</span>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link to={logo.url} className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                          <Stethoscope className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-semibold">{logo.title}</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item, getTranslatedTitle))}
                    </Accordion>
                    <div className="border-t py-4">
                      <div className="grid grid-cols-1 gap-2">
                        {mobileExtraLinks.map((link, idx) => (
                          <a
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                            href={link.url}
                          >
                            {link.name.includes('phone') && <Phone className="h-4 w-4" />}
                            {link.name.includes('whatsapp') && <Phone className="h-4 w-4" />}
                            {getTranslatedTitle(link.name)}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button asChild>
                        <Link to="/contacto">{t('nav.appointment')}</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem, isActiveRoute: (path: string) => boolean, getTranslatedTitle: (title: string) => string) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{getTranslatedTitle(item.title)}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                    to={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {getTranslatedTitle(subItem.title)}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {getTranslatedTitle(subItem.description)}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground ${
        isActiveRoute(item.url) ? 'text-primary bg-accent' : 'text-muted-foreground'
      }`}
      to={item.url}
    >
      {getTranslatedTitle(item.title)}
    </Link>
  );
};

const renderMobileMenuItem = (item: MenuItem, getTranslatedTitle: (title: string) => string) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {getTranslatedTitle(item.title)}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              to={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{getTranslatedTitle(subItem.title)}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {getTranslatedTitle(subItem.description)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} className="font-semibold">
      {getTranslatedTitle(item.title)}
    </Link>
  );
};

export { MedicalNavbar };