import { useEffect, useState } from "react";

import { getUser } from "../../utils/getUser";
import { ROLE } from "../../constants/role";

export function useNavData() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    let role = "";
    const decoded = getUser();

    if (decoded) {
      try {
        role = decoded?.role;
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }

    const isAdmin = role === ROLE.admin;

    const sideBarItem = [
      {
        title: t("sidebar.dashboard"),
        href: "/",
        icon: DashboardIcon,
      },

      ...(isAdmin
        ? [
            {
              title: "User Management",
              href: "/user-management",
              icon: PeopleIcon,
            },
          ]
        : []),
    ];

    setNavData(sideBarItem);
  }, [t]);

  return navData;
}
