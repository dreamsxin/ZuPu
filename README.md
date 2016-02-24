# 族譜

- 實現多種形式的展示（歐式、蘇式、塔式）
- 便捷的查詢功能
- 存放多種格式的數據（視頻、語音、照片）
- 在綫轉換為 PDF，提供實體族譜製作服務

## Cordova 使用

```shell
cordova create client org.myleft.tushuo TuShuo
cd client/
cordova platform add android
cordova build android
# cordova prepare android
# cordova compile android
cordova run android
```

添加插件
```shell
cordova plugin add cordova-plugin-camera
cordova plugin add cordova-plugin-dialogs
```
