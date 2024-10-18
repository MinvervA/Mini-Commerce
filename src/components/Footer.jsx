import { ContactMeButton } from "./uis/button/ContactMeButton";

export const Footer = () => {
  return (
    <div className="h-[60px] border-t flex items-center justify-between md:px-20 px-4 mt-20">
      <div className="text-gray-500">MinvervA Copyright 2024</div>
      <ContactMeButton />
    </div>
  );
};
