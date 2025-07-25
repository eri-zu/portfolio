import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-[1rem] right-[1.5rem] mt-40">
      <div>
        <p className="opacity-40 text-center tracking-wider">
          <span className="text-[1rem] font-en2 tracking-wider">
            &copy; {new Date().getFullYear()} ERI IZUTSU
          </span>
        </p>
      </div>
    </footer>
  );
};
