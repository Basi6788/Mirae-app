import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.uchihas.foundation',
  appName: 'Mirae',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      // Black screen chupane ke liye splash screen ko thoda lamba dikhayenge
      // jab tak hum code se usay khud hide na karein
      launchShowDuration: 3000,
      launchAutoHide: false, // Important: Hum khud hide karenge code se
      backgroundColor: "#ffffff", // Default light background
      androidSplashResourceName: "splash",
      showSpinner: false, // Loading gol ghumne wala icon hata diya (cleaner look)
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      // System theme follow karne ke liye style 'DEFAULT' rakha hai
      style: 'DEFAULT', 
      // Agar overlays chahiye to true karo, warna false
      overlay: false, 
    }
  }
};

export default config;
