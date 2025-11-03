import { NavLink } from "react-router-dom";
import { BarChart, FileSignature, Settings, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const CustomNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        isActive && "bg-accent text-primary"
      )
    }
  >
    {children}
  </NavLink>
);

export function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Briefcase className="h-6 w-6" />
            <span className="">ContractGen</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <CustomNavLink to="/dashboard">
              <BarChart className="h-4 w-4" />
              Dashboard
            </CustomNavLink>
            <CustomNavLink to="/clients">
              <Users className="h-4 w-4" />
              Clientes
            </CustomNavLink>
            <CustomNavLink to="/documents">
              <FileSignature className="h-4 w-4" />
              Documentos
            </CustomNavLink>
            <CustomNavLink to="/settings">
              <Settings className="h-4 w-4" />
              Configurações
            </CustomNavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}