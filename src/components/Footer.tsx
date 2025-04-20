
import React from 'react';
import { Copyright } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-50/50 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks />
          <Separator className="w-full max-w-md bg-purple-200" />
          <div className="flex items-center gap-2 text-gray-600">
            <Copyright className="h-4 w-4" />
            <p>{currentYear} Vikash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
