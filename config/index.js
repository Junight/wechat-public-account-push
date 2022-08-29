export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx446bc285954c99c7",
    // 公众号APP_SECRET
    APP_SECRET: "52091768540ad96dacc892668433cbb3",
    // 模板消息id
    TEMPLATE_ID: "6nD_XR1LFh6ttk6wX3U8kdLzglOuqmOj0njdmPIcPNQ",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["olnu46CwBbZGy0Bo_UDSDspDUS14","olnu46GdgruuZ4hRDxiAWXUNv3Ik"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "广东",
    // 所在城市
    CITY: "深圳",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "媳妇儿", "year": "1995", "date": "11-19"}
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-06-22",
    
    //
    MARRY_DATA:"2021-09-01",
   

    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "小说"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
