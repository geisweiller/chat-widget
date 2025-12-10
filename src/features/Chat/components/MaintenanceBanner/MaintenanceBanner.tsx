import { useMaintenanceBannerStyles } from "./MaintenanceBanner.styles";

export function MaintenanceBanner({ message }: { message: string }) {
  const styles = useMaintenanceBannerStyles();
  return <div className={styles.banner}>{message}</div>;
}
