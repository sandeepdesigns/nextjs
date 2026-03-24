"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";

export default function FancyboxProvider() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return null;
}