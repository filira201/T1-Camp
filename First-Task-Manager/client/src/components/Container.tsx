import type { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <main className="mx-auto mt-10 max-w-[1252px] p-[0px_round(up,_1.22223%,_.2rem)] sm:p-[0px_round(up,_3.22223%,_.2rem)] lg:p-[0px_round(up,_7.22223%,_.2rem)]">
      {children}
    </main>
  );
};

export default Container;
