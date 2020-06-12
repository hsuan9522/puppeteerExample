const puppeteer = require('puppeteer');

let headless = false;
let url = 'http://localhost:3000/';
let executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
let buyerFirstName = 'TEST';
let buyerLastName = "TEST";
let buyerCosmileNumber = ''; //option
let buyerContactLastName = 'TEST';
let buyerContactFirstName = 'TEST';
let buyerContactPhoneNumber = '091111111111';
let buyerContactEmail = 'test@example.com';

let buyerCardName = 'TEST';
let buyerCardNumber = '4938170188888994'
let buyerCardCVV = '541';

(async () => {
  let el;
  const browser = await puppeteer.launch({
    headless: headless,
    executablePath: executablePath,
  });

  const page = await browser.newPage();
  
  await page.goto(url);
  try{
    const cookieBtn = await page.$('#__layout > div > div.cookie-banner.w-100 > div > button');
    await cookieBtn.click();
  
    const depEl = await page.$('#__layout > div > div.static-index.content > div.bg > div.container > div > div.col-12.mb-5.search-wrapper > div > div > div > form > div.row > div:nth-child(1) > div > div > div > div > input')
    await depEl.click();
    await page.waitFor(500);
    const depTpe = await page.$('body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > ul:nth-child(1) > li:nth-child(2)')
    await depTpe.click();
    
    await page.waitFor(500);
    const arrCeb = await page.$('body > div:nth-child(9) > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > ul:nth-child(1) > li:nth-child(2) > ul > li:nth-child(1)');
    await arrCeb.click();
  
  
    await page.waitFor(500);
    const date = await page.$('#__layout > div > div.static-index.content > div.bg > div.container > div > div.col-12.mb-5.search-wrapper > div > div > div > form > div.row > div.col-12.col-md-12.col-lg-4.mb-3.default-date-picker.mb-lg-0 > div.date-picker.input-border-block.d-none.d-md-block > div > div > div > div > input:nth-child(2)');
    await date.click();
    await page.waitFor(500);
  
    const go = await page.$('body > div.el-picker-panel.el-date-range-picker.el-popper.has-time.starluxCalendar > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content.el-date-range-picker__content.is-right > table > tbody > tr:nth-child(5) > td:nth-child(5) > div > span');
    await go.click();
    await page.waitFor(500);
    const back = await page.$('body > div.el-picker-panel.el-date-range-picker.el-popper.has-time.starluxCalendar > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content.el-date-range-picker__content.is-right > table > tbody > tr:nth-child(6) > td:nth-child(6) > div > span');
    await back.click();
    await page.waitFor(500);
    const dateSelect = await page.$('body > div.el-picker-panel.el-date-range-picker.el-popper.has-time.starluxCalendar > div.el-picker-panel__footer > button.el-button.el-picker-panel__link-btn.el-button--default.el-button--mini.is-plain')
    await dateSelect.click();
    await page.waitFor(500);
  
    const searchBtn = await page.$('#__layout > div > div.static-index.content > div.bg > div.container > div > div.col-12.mb-5.search-wrapper > div > div > div > form > div:nth-child(2) > div > div > button')
    await searchBtn.click()
  }catch(err) {
    console.log('搜尋航班錯誤', err)
  }


  //航班列表
  try{
    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border');
    await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border');
  }catch{
    console.log('去程無航班')
  }
  await page.waitFor(300);
  try{
    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border.active > div:nth-child(3) > div.extend.bg-cream > button')
    await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border.active > div:nth-child(3) > div.extend.bg-cream > button');
  }catch{
    console.log('去程選擇航班錯誤')
  }
  await page.waitForNavigation()
  try {
    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border');
    await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border');
  } catch{
    console.log('回程無航班')
  }
  try {
    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border.active > div:nth-child(3) > div.extend.bg-cream > button')
    await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div.mt-6 > div.row.mt-2.mt-lg-3 > div.flight-wrapper.col-12 > div.flight-group.border.active > div:nth-child(3) > div.extend.bg-cream > button');
  } catch{
    console.log('回程選擇航班錯誤')
  }

  await page.waitForNavigation()
  await page.waitFor(1000)

  try{
    //選稱謂
    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.mb-6 > div.px-3.pt-lg-5.pb-lg-5.pt-5.pb-6.px-md-5.py-md-5 > div.row.mb-0.mb-lg-5 > div.col-12.col-md-4.h-100.mb-lg-0.mb-3 > div > div > div > div > input');
    await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.mb-6 > div.px-3.pt-lg-5.pb-lg-5.pt-5.pb-6.px-md-5.py-md-5 > div.row.mb-0.mb-lg-5 > div.col-12.col-md-4.h-100.mb-lg-0.mb-3 > div > div > div > div > input')
    await page.waitForSelector('body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > li:nth-child(1)')
    await page.click('body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > li:nth-child(1)');
    
    //輸入姓名
    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.mb-6 > div.px-3.pt-lg-5.pb-lg-5.pt-5.pb-6.px-md-5.py-md-5 > div.row.mb-0.mb-lg-5 > div:nth-child(2) > div > div > div > input');
    await page.keyboard.type(buyerLastName);
    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.mb-6 > div.px-3.pt-lg-5.pb-lg-5.pt-5.pb-6.px-md-5.py-md-5 > div.row.mb-0.mb-lg-5 > div:nth-child(3) > div > div > div > input');
    await page.keyboard.type(buyerFirstName);
  
    //選生日
    const birth = await page.$('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.mb-6 > div.px-3.pt-lg-5.pb-lg-5.pt-5.pb-6.px-md-5.py-md-5 > div.row.mb-0.mb-lg-3 > div.col-12.col-md-6.col-lg-4 > div.el-form-item.d-none.d-md-block.mb-3.el-form-item--feedback.is-required > div > div > input');
    await birth.click();
    await page.waitForSelector('body > div.el-picker-panel.el-date-picker.el-popper.birthCalendar > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content > table.el-date-table > tbody > tr:nth-child(4) > td:nth-child(4) > div > span');
    await page.click('body > div.el-picker-panel.el-date-picker.el-popper.birthCalendar > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content > table.el-date-table > tbody > tr:nth-child(4) > td:nth-child(4) > div > span');
    
    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.mb-6 > div.px-3.pt-lg-5.pb-lg-5.pt-5.pb-6.px-md-5.py-md-5 > div:nth-child(3) > div.col-12.col-md-6.col-lg-4 > div > div > div > input');
    await page.keyboard.type(buyerCosmileNumber);

    //填寫聯絡人資料
    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.px-3.px-lg-5.pt-4.pb-6.pt-lg-5.pb-lg-5.px-3 > div.row.mb-0.mb-lg-4 > div:nth-child(2) > div > div > div.el-input > input');
    await page.keyboard.type(buyerContactLastName);
    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.px-3.px-lg-5.pt-4.pb-6.pt-lg-5.pb-lg-5.px-3 > div.row.mb-0.mb-lg-4 > div:nth-child(3) > div > div > div.el-input > input');
    await page.keyboard.type(buyerContactFirstName);

    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.px-3.px-lg-5.pt-4.pb-6.pt-lg-5.pb-lg-5.px-3 > div:nth-child(2) > div > div > div > div.el-input > input');
    await page.keyboard.type(buyerContactEmail)
    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div.container > form.el-form.form-wrap.px-3.px-lg-5.pt-4.pb-6.pt-lg-5.pb-lg-5.px-3 > div:nth-child(4) > div.col-12.col-md-4 > div > div > div.el-input > input');
    await page.keyboard.type(buyerContactPhoneNumber);

    const checkbox = await page.$('#__layout > div > div.booking.content > div:nth-child(3) > div.container > div:nth-child(7) > div > form > div > div > label > span.el-checkbox__input > span');
    await checkbox.click();

    const submitFormBtn = await page.$('#__layout > div > div.booking.content > div:nth-child(3) > div.container > div.row.mt-lg-6.mt-5 > div > button');
    submitFormBtn.click();
    await page.waitFor(500)

    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(4) > div > div.el-dialog__footer > section > button');
    await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(4) > div > div.el-dialog__footer > section > button')

  }catch(err){
    console.log('填寫中/送出 錯誤',err)
 
  }

  await page.waitForNavigation();
  await page.waitFor(6000)

  //無附加服務
  await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div.container > div.row.justify-content-end > div > button');
  await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div.container > div.row.justify-content-end > div > button');

  await page.waitForNavigation();
  await page.waitFor(2500)
  try{
    //選擇信用卡
    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(3) > div > label');
    await page.click('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(3) > div > label')

    await page.waitForSelector('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div.radio-card.bg-white.rounded.mb-2.mb-lg-4.active > div.radio-card-content')
    await page.focus('#inpBkgPaymentCC');
    await page.keyboard.type(buyerCardNumber);

    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div.radio-card.bg-white.rounded.mb-2.mb-lg-4.active > div.radio-card-content > form.el-form > div:nth-child(4) > div > div > div > div.el-input > input');
    await page.keyboard.type(buyerCardName);
    
    //信用卡年月選項
    el = await page.$('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div.radio-card.bg-white.rounded.mb-2.mb-lg-4.active > div.radio-card-content > form.el-form > div.row.mb-0.mb-md-4.mb-lg-4 > div:nth-child(1) > div > div > div > div.el-input.el-input--suffix > input');
    await el.click();
    await page.waitFor(500);//等下拉選單出現
    await page.click('body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > li:nth-child(12)');

    el = await page.$('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div.radio-card.bg-white.rounded.mb-2.mb-lg-4.active > div.radio-card-content > form.el-form > div.row.mb-0.mb-md-4.mb-lg-4 > div:nth-child(2) > div > div > div > div > input');
    await el.click();
    await page.waitFor(500);//等下拉選單出現
    await page.click('body > div:nth-child(10) > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > li:nth-child(9)');

    await page.focus('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div.radio-card.bg-white.rounded.mb-2.mb-lg-4.active > div.radio-card-content > form.el-form > div:nth-child(6) > div > div > div > div.el-input > input');
    await page.keyboard.type(buyerCardCVV);

    el = await page.$('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div.radio-card.bg-white.rounded.mb-2.mb-lg-4.active > div.radio-card-content > form.el-form > div.el-form-item.el-form-item--feedback > div > div > label > span.el-checkbox__input > span');
    await el.click();

    el = await page.$('#__layout > div > div.booking.content > div:nth-child(3) > div:nth-child(2) > div > div.radio-card.bg-white.rounded.mb-2.mb-lg-4.active > div.radio-card-content > form.el-form > div.d-flex.justify-content-end > button');
    await el.click();

  }catch(err){
    console.log('填寫信用卡錯誤',err)
  }
  
  await page.waitForNavigation();

  try{
    await page.waitForSelector('#userInput1_password')
    await page.focus('#userInput1_password')
    await page.keyboard.type('123');
    el = await page.$('#masterForm > input[type=button]:nth-child(4)');
    await el.click();
    await page.waitFor(2000)
    await page.waitForSelector('#backToMerchant');
    await page.click('#backToMerchant');

  }catch(err){
    console.log('3ds 錯誤',err)
  }

  await page.waitForNavigation();
  await page.waitFor(2000);
  await page.waitForSelector('#__layout > div > div.booking.content > div.complete > div.container-fluid > div > div > div > div > div > div > div.col-12.col-lg-4 > div > div > div.head.d-flex.justify-content-between > div')
  el = await page.$('#__layout > div > div.booking.content > div.complete > div.container-fluid > div > div > div > div > div > div > div.col-12.col-lg-4 > div > div > div.head.d-flex.justify-content-between > div');
  const text = await page.evaluate(item => item.textContent, el);
  console.log('PNR      ：',text);
  console.log('FirstName：', buyerFirstName)
  console.log('LastName ：', buyerLastName)
  process.exit(1);

})();
