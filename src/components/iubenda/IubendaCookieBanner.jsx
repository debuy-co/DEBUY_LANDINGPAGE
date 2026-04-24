import { useEffect } from "react";

export default function IubendaCookieBanner() {
  useEffect(() => {
    if (
      document.querySelector(
        'script[src*="bb15effe-3d0f-443e-ad00-455c29155f5a"]',
      )
    )
      return;

    const script = document.createElement("script");
    script.src =
      "https://embeds.iubenda.com/widgets/bb15effe-3d0f-443e-ad00-455c29155f5a.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
