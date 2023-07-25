# todo_list_sql :wink:

<h1> 功能 </h1>

1. 查看所有todo

2. 新增todo

4. 修改todo

5. 刪除todo

6. 瀏覽特定todo
    
7. 登入系統

# 開始使用

1. 請先確認有安裝 node.js 與 npm

2. 將專案 clone 到本地
```

```

3. 在本地開啟之後，透過終端機進入資料夾，輸入：

```
npm install
```

4. 依據.env.example, 請自行帶入以下參數

```




```

5. 安裝完畢後，繼續輸入：

```
npm run start
```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

```
Listening on http://localhost:3000
```

# 7. =重要= 請輸入種子資料

```
npx sequelize db:seed
```

 ### 種子資料使用者email及密碼如下

  name: "root",
  email: "root@example.com",
  password: "12345678"


# 開發工具

- node 18.16.1
- Express 4.18.2
- Express-Handlebars 7.0.7
- sequelize 5.21.13
- sequelize-cli 5.5.1
- mysql2 2.1.0
- 其餘工具請去package.json確認
