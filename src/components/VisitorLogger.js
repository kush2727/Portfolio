import { useEffect } from "react";
import { postVisitorInfo } from "../api/api";

function VisitorLogger() {
  useEffect(() => {
    const fetchIP = async () => {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      const visitorData = {
        ip_address: data.ip,
        browser_info: navigator.userAgent,
        os_info: navigator.platform,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        timestamp: new Date().toISOString(),
      };
      postVisitorInfo(visitorData).catch(console.error);
    };
    fetchIP();
  }, []);

  return null; // No UI needed
}

export default VisitorLogger;
