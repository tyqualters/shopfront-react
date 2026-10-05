export type AppType = "default" | "tenant";

export function getAppType(): AppType {
  const hostname = window.location.hostname.toLowerCase();

  switch (hostname) {
    case "example2.com":
    case "www.example2.com":
      return "tenant";

    case "example1.com":
    case "www.example1.com":
    default:
      return "default";
  }
}
