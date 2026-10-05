export type AppType = "default" | "tenant";

export function getAppType(): AppType {
  const hostname = window.location.hostname.toLowerCase();

  switch (hostname) {
    case "dev.local":
      return "tenant";

    case "localhost":
    default:
      return "default";
  }
}
