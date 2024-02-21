"use client";

import { Button } from "./button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalcomHireButton() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace=""
      data-cal-link="afullsnack/30min"
      data-cal-config='{"layout":"month_view"}'
      variant="outline"
    >
      Hire me
    </Button>
  );
}
