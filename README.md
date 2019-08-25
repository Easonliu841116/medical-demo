# 監測系統

**使用框架：** `Vue.js`

## 展示網址

<https://easonliu841116.github.io/demo_tours-website/dist/#/>

## 功能簡介

#### 登入頁面

![login](https://i.imgur.com/wqt1vbL.png "login")

* Demo: 登入時，驗證表單完整度、並將登入資訊存至 localStorage。
* 正式: 登入時，call API，並驗證表單完整度。

#### 病患群組選擇畫面

![panel](https://i.imgur.com/fFJAM7a.png "panel")

* Demo ( 使用 localStorage 做簡易資料庫 ) :
  * 選擇 `全部` 病患: 返回 `所有` 病患資訊。
  * 選擇 `部分` 病患: 返回 `部分` 病患資訊 ( 預設為第一組 )

* 正式 ( call API ) :
  * 選擇 `全部` 病患: 返回 `所有` 病患資訊。
  * 選擇 `部分` 病患: 根據 API 返回與 `登入者 ID` 相應的負責病患資訊。


#### 病患群組選擇畫面

* 未在床
![dashboard-off](https://i.imgur.com/cj7YcrR.png "dashboard-off")

* 在床
![dashboard-on](https://i.imgur.com/jllQxYB.png "dashboard-on")

* Demo ( 使用 localStorage 做簡易資料庫 ) :
  * 病患選單: 返回 `部分` 或 `全部` 的 `假資料`。
  * 在床按鈕: 控制病患是否在床。
  * 病患資訊: 根據 `ramdom API` 返回隨機資訊。
  * 在床資訊: 根據病患 `是否在床` 返回值( 1為在床，0為離床 )
  * 壓力圖表: 根據病患 `是否在床` 及 `假資料` 返回患者身體某部分之壓力指數，並以 `顏色` 標示壓力程度。

* 正式 ( call API ) :
  * 病患選單: 根據 `API` 返回 `部分` 或 `全部` 的資料。
  * 在床按鈕: 控制病患是否在床。
  * 病患資訊: 根據 `API` 返回相應的病患資訊。
  * 在床資訊: 根據病患 `是否在床` 返回值( 2為在床，1為離床 )
  * 壓力圖表: 根據病患 `是否在床` 及 ` API ` 返回患者身體某部分之壓力指數，並以 `顏色` 標示壓力程度。