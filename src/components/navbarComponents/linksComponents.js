import { useState, useEffect } from "react";
import {
  LuHome as Home,
  LuLayoutGrid as Projects,
  LuMessageCircle as Contact,
  LuUserCog2 as Skills,
} from "react-icons/lu";

export const linksComponents = (highLightsLink) => {
  const navigations = [
    { name: "Home", href: "#Home", current: true, icon: Home },
    { name: "Skills", href: "#Skills", current: false, icon: Skills },
    { name: "Projects", href: "#Projects", current: false, icon: Projects },
    { name: "Contact", href: "#Contact", current: false, icon: Contact },
  ];

  const [currentNavigation, setCurrentNavigation] = useState(navigations);
  // console.log(currentNavigation);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "2px",
      threshold: 0.5, // when 50% of the element is visible in the viewport
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        setCurrentNavigation((prevNavigations) =>
          prevNavigations.map((nav) =>
            nav.href.slice(1) === entry.target.id
              ? { ...nav, current: entry.isIntersecting }
              : nav,
          ),
        );
      });
    };

    const observer = new IntersectionObserver(callback, options);

    navigations.forEach((nav) => {
      const element = highLightsLink.current[nav.href.slice(1)];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [highLightsLink]);

  return { navigation: navigations, currentNavigation };
};
