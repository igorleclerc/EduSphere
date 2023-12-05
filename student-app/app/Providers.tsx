"use client";
import exp from 'constants';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#012496"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
