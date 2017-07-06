
Based on: http://ionicframework.com/docs/guide/publishing.html

How to LatinCouver:
  1 - cordova build --release android

  2 - Generate the certificate (JUST IN CASE YOU DON'T HAVE IT):
    keytool -genkey -v -keystore LatinCouver.keystore -storepass rockband -keypass rockband -alias LatinCouver -keyalg RSA -keysize 2048 -validity 10000

  3 - Sign the apk
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore LatinCouver.keystore android-release-unsigned.apk LatinCouver

  4 - Zip it
    /c/Users/Emerson/AppData/Local/Android/sdk/build-tools/23.0.3/zipalign.exe -v 4 android-release-unsigned.apk LatinCouver.apk

    C:/Users\Emerson\AppData\Local\Android\sdk\build-tools\23.0.3


How to not generate two apk:
  http://stackoverflow.com/questions/32535551/building-combined-armv7-x86-apk-after-crosswalk-integration-in-an-ionic-project