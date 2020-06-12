# puppeteerExample
目前是最簡單的寫法即最少需求開票，開出票種為來回且無附加服務，起終點位置、票也是固定抓第一個，之後再想辦法優化。
### 參數設定介紹：
```javascript
headless = true; //無頭模式，false則會開啟設定的瀏覽器執行
url = 'http://localhost:3000/'; //要執行位置的url
let executablePath = ''; //空值預設為chromium 以Macbook若需要Chromey則設為 '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
buyerFirstName = 'TEST'; //購票名
buyerLastName = "TEST";  //購票姓
buyerCosmileNumber = ''; //option
buyerContactLastName = 'TEST';
buyerContactFirstName = 'TEST';
buyerContactPhoneNumber = '091111111111';
buyerContactEmail = 'test@example.com';

buyerCardName = 'TEST';
buyerCardNumber = '4938170188888994'
buyerCardCVV = '541';
```

### 執行
```node
node index.js
```

### 結果
會輸出開票之pnr及姓名
```
PNR       ：KICOAQ
FirstName ：TEST
LastName  ：TEST
```
