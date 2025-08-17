// utils/dateUtils.ts
export const formatDate = (date: Date, isLaterSection = false): string => {
    if (isLaterSection) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  export const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  export const isTomorrow = (date: Date): boolean => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return date.toDateString() === tomorrow.toDateString();
  };
  
  // utils/launchUtils.ts
  import { Launch } from '@/data/type';
  
  export const getImageUrl = (launch: Launch): string | null => {
    if (launch.image) return launch.image;
    if (launch.rocket?.configuration?.image_url) return launch.rocket.configuration.image_url;
    return null;
  };