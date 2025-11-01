import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">SecureGuard</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 SecureGuard Security Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
