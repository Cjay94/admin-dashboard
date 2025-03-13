import { DollarSign, LayoutDashboard, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";

export const SIDEBAR_ITEMS = [
    { name: "Overview", icon: LayoutDashboard, color: "#fb2c36", href: "/" },
    { name: "Products", icon: ShoppingBag, color: "#ff6900", href: "/products" },
    { name: "Users", icon: Users, color: "#efb100", href: "/users" },
    { name: "Sales", icon: DollarSign, color: "#00c951", href: "/sales" },
    { name: "Orders", icon: ShoppingCart, color: "#2b7fff", href: "/orders" },
    { name: "Analytics", icon: TrendingUp, color: "#f6339a", href: "/analytics" },
    { name: "Settings", icon: Settings, color: "#8e51ff", href: "/settings" },
]; 