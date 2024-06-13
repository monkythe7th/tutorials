import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'photo.gallery',
  appName: 'photo-gallery',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
