// src/utils/appLauncher.js

export const triggerAppRedirection = () => {
  // 1. Check if the user is on a mobile device
  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  if (!isMobileDevice) {
    // If opened on a desktop/laptop, prompt or prevent redirection
    alert(
      "Please open this website on your mobile phone to download and play via the app!",
    );
    return;
  }

  const packageName = "com.ksonline.app"; // Your Flutter app package name
  const apkDownloadUrl = encodeURIComponent(
    "https://yourwebsite.com/downloads/ksonline.apk",
  );
  const customSchemeUrl = "ksonline://open";

  // Android Intent URI: tries to open app, falls back to APK download if missing
  const androidIntentUrl = `intent://open#Intent;scheme=ksonline;package=${packageName};S.browser_fallback_url=${apkDownloadUrl};end`;

  const isAndroid = /Android/i.test(navigator.userAgent);

  if (isAndroid) {
    // Android Chrome handling
    window.location.href = androidIntentUrl;
  } else {
    // iOS / Fallback handling using JS Timer
    const startTime = Date.now();
    window.location.href = customSchemeUrl;

    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      // If browser didn't switch to the app within 1.5s, app is missing -> download APK
      if (elapsedTime < 2000) {
        window.location.href = "https://yourwebsite.com/downloads/ksonline.apk";
      }
    }, 1500);
  }
};
