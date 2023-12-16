import DashboardIcon from "../assets/icons/dashboard.svg";
import ShippingIcon from "../assets/icons/shipping.svg";
import ProductIcon from "../assets/icons/product.svg";
import UserIcon from "../assets/icons/user.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: "/teams",
    title: "Team",
  },
  {
    id: 2,
    icon: ShippingIcon,
    path: "/orders",
    title: "Gestion des stockages",
  },
  {
    id: 3,
    icon: ProductIcon,
    path: "/",
    title: "Acceder au site web",
  },
  {
    id: 4,
    icon: UserIcon,
    path: "/profile",
    title: "Mon compte",
  },
];

export default sidebar_menu;
