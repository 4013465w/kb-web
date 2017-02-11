let date = new Date();
  let year = date.getFullYear();
  let grade = [];
  for(let i = 0; i < 5; i++){
    grade.push({
      value: year % 2000,
      label: year + '级'
    });
    year--;
  }
  let arr = [{
    label: '烟台大学',
    value: 'yd',
    children: []
  },{
    label: '文经学院',
    value: 'wj',
    children: []
  }];
  let yd = ['环','法','计','光','海','建','经','生','食','数','土','外','新','机','药','音','应','中','化','材','体','EIE','对外','专国','汉教'];
  let wj = ['文专中','文专会','文专商','文专土','文专市','文专房','文专机','文专电','文专英','文专计','文专财','文专贸','文专通','文中','文会','文公','文商','文土','文市','文投','文新','文日','文朝','文机','文法','文环','文生','文电','文自','文艺','文英','文视','文计','文财','文贸','文车','文通','文金','文食']
  for (let i = 0; i < yd.length; i++) {
    arr[0].children.push({
      label: yd[i],
      value: yd[i],
      children: grade
    });
  }
  for (let i = wj.length - 1; i >= 0; i--) {
    arr[1].children.push({
      label: wj[i],
      value: wj[i],
      children: grade
    });
  }

module.exports = {
    gradeList: arr, 
    startDate: '2017-02-27',
    maxDate: '8m',
    tips:`2016-2017学年第二三学期春夏<br/>
    1. 2月25，26日学生报到注册，27日开始上课<br/>
    2. 5月1日至5月5日为春假；清明节，五一和端午节不再单独放假<br/>
    3. 5月11、12日举行校运动会<br/>
    4. 第19-20周进行期末考试。实习实践周数多的班级，根据教学计划安排考试<br/>
    5. 第21-26周（7月17-8月27日）为暑假`,
    work: {
        '2016-02-06': '除夕班',
        '2016-02-14': '春节班',
        '2016-06-12': '端午班',
        '2016-09-18': '中秋班',
        '2016-10-08': '国庆班',
        '2016-10-09': '国庆班'
    },
    holiday: {
        '2017-05-01': '春假',
        '2017-05-02': '春假',
        '2017-05-03': '春假',
        '2017-05-04': '春假',
        '2017-05-05': '春假'
    },

    vication: { // 节日配置
        yuandan: {
            name: '元旦',
            dates: [
                '2016-01-01',
                '2017-01-01',
                '2018-01-01',
                '2019-01-01',
                '2020-01-01',
                '2021-01-01'
            ]
        },
        chuxi: {
            name: '除夕',
            dates: [
                '2016-02-07',
                '2017-01-27',
                '2018-02-15',
                '2019-02-04',
                '2020-01-24',
                '2021-02-11'
            ]
        },
        chunjie: {
            name: '春节',
            dates: [
                '2016-02-08',
                '2017-01-28',
                '2018-02-16',
                '2019-02-05',
                '2020-01-25',
                '2021-02-12'
            ]
        },
        yuanxiao: {
            name: '元宵节',
            dates: [
                '2016-02-22',
                '2017-02-11',
                '2018-03-02',
                '2019-02-19',
                '2020-02-08',
                '2021-02-26'
            ]
        },
        qingming: {
            name: '清明',
            dates: [
                '2016-04-04',
                '2017-04-04',
                '2018-04-05',
                '2019-04-05',
                '2020-04-04',
                '2021-04-04'

            ]
        },
        wuyi: {
            name: '劳动节',
            dates: [
                '2016-05-01',
                '2017-05-01',
                '2018-05-01',
                '2019-05-01',
                '2020-05-01',
                '2021-05-01',
                '2022-05-01',
                '2023-05-01',
                '2024-05-01',
                '2025-05-01',
                '2026-05-01'
            ]
        },
        duanwu: {
            name: '端午节',
            dates: [
                '2016-06-09',
                '2017-05-30',
                '2018-06-18',
                '2019-06-07',
                '2020-06-25',
                '2021-06-14'
            ]
        },
        zhongqiu: {
            name: '中秋节',
            dates: [
                '2016-09-15',
                '2017-10-04',
                '2018-09-24',
                '2019-09-13',
                '2020-10-01',
                '2021-09-21'
            ]
        },
        guoqing: {
            name: '国庆节',
            dates: [
                '2016-10-01',
                '2017-10-01',
                '2018-10-01',
                '2019-10-01',
                '2020-10-01',
                '2021-10-01',
                '2022-10-01',
                '2023-10-01',
                '2024-10-01',
                '2025-10-01',
                '2026-10-01'
            ]
        },
        baodao: {
            name: '报到',
            dates: [
                '2017-02-25',
                '2017-02-26'
            ]
        },
        shangke: {
            name: '上课',
            dates: ['2017-02-27']
        },
        yundonghui: {
            name: '运动会',
            dates: [
            '2017-05-11',
            '2017-05-12'
            ]
        }
    },

    links: {
    "yd": [
        {
            "category": "烟大生活",
            "links": [
                {
                    "name": "烟大贴吧",
                    "icon": "",
                    "style": "basic",
                    "url": "http://tieba.baidu.com/f?kw=%D1%CC%CC%A8%B4%F3%D1%A7"
                },
                {
                    "name": "图书馆",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.lib.ytu.edu.cn:9999/opac/reader_info.aspx"
                },
                {
                    "name": "表白墙",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.handschool.cn/addon/BiaoBai/BiaoBaiView/show/hmp/0f4339c19535d77981f16aa6d3a8cf69.html?from=singlemessage"
                },
                {
                    "name": "烟大集市",
                    "icon": "",
                    "style": "basic",
                    "url": "http://wx.quanzijishi.com/circle/ni61rl90ayb"
                },
                {
                    "name": "全景烟大",
                    "icon": "",
                    "style": "basic",
                    "url": "https://720yun.com/t/af927ci6qyr?from=timeline&isappinstalled=0&openSpeakModal=true&pano_id=1240382"
                }
            ]
        },
        {
            "category": "烟大校园",
            "links": [
                {
                    "name": "烟大官网",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.ytu.edu.cn/"
                },
                {
                    "name": "烟大导航",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.ytu.edu.cn/wzdt/index.jhtml"
                },
                {
                    "name": "选课系统",
                    "icon": "",
                    "style": "basic",
                    "url": "http://jwc.ytu.edu.cn/xk/xuankefuwu.htm"
                },
                {
                    "name": "网上民生",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.ytu.edu.cn/wsms/index.jhtml"
                },
                {
                    "name": "烟大新闻",
                    "icon": "",
                    "style": "basic",
                    "url": "http://xcb.ytu.edu.cn/"
                },
                {
                    "name": "学院导航",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.ytu.edu.cn/xysz.jhtml"
                },
                {
                    "name": "密码修改",
                    "icon": "",
                    "style": "basic",
                    "url": "http://202.194.116.59:8081/user/userchgpw2.jsp"
                },
                {
                    "name": "烟大官方微博",
                    "icon": "",
                    "style": "basic",
                    "url": "http://weibo.com/ytu2014"
                }
            ]
        }
    ],
    "wj": [
        {
            "category": "文经生活",
            "links": [
                {
                    "name": "网上餐厅",
                    "icon": "",
                    "style": "basic",
                    "url": "https://wap.lewaimai.com/index.php?r=showdivpage/index&id=1357&from=singlemessage&isappinstalled=0&code=0313ITsS05T9sc2HSIuS0NvUsS03ITsR&state=lewaimaibase"
                },
                {
                    "name": "文经贴吧",
                    "icon": "",
                    "style": "basic",
                    "url": "http://tieba.baidu.com/f?ie=utf-8&kw=%E7%83%9F%E5%8F%B0%E5%A4%A7%E5%AD%A6%E6%96%87%E7%BB%8F%E5%AD%A6%E9%99%A2"
                },
                {
                    "name": "失物招领",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.wxhand.com/addon/LostAndFound/WapLostAndFound/lists/hmp/f844cb5d65d6b9a7c68c3ca75b24016f.html"
                },
                {
                    "name": "表白墙",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.handschool.cn/addon/BiaoBai/BiaoBaiView/show/hmp/0c9ba4a11ddd07bf814abf677496927a.html"
                },
                {
                    "name": "全景文经",
                    "icon": "",
                    "style": "basic",
                    "url": "http://720yun.com/t/2e928a8gatv?pano_id=722152"
                }
            ]
        },
        {
            "category": "文经校园",
            "links": [
                {
                    "name": "文经官网",
                    "icon": "",
                    "style": "basic",
                    "url": "http://wenjing.ytu.edu.cn/"
                },
                {
                    "name": "校园一卡通",
                    "icon": "",
                    "style": "basic",
                    "url": "http://192.168.100.7/homeLogin.action"
                },
                {
                    "name": "选课系统",
                    "icon": "",
                    "style": "basic",
                    "url": "http://jiaowu.wenjing.ytu.edu.cn/index.php/portal/article/index/id/2799"
                },
                {
                    "name": "文经微信",
                    "icon": "",
                    "style": "basic",
                    "url": "http://m.najiaoluo.com/weixin/732.html"
                },
                {
                    "name": "文经新闻",
                    "icon": "",
                    "style": "basic",
                    "url": "http://news.wenjing.ytu.edu.cn/"
                }
            ]
        }
    ],
    "public_links": [
        {
            "category": "社交",
            "links": [
                {
                    "name": "微博",
                    "icon": "weibo red",
                    "style": "basic",
                    "url": "http://weibo.com/"
                },
                {
                    "name": "微信网页版",
                    "icon": "wechat green",
                    "style": "basic",
                    "url": "http://wx.qq.com/"
                },
                {
                    "name": "百度贴吧",
                    "icon": "paw blue",
                    "style": "basic",
                    "url": "http://tieba.baidu.com/"
                },
                {
                    "name": "知乎",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.zhihu.com/"
                }
            ]
        },
        {
            "category": "娱乐",
            "links": [
                {
                    "name": "优酷",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.youku.com/"
                },
                {
                    "name": "土豆",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.tudou.com/"
                },
                {
                    "name": "Youtube",
                    "icon": "youtube red",
                    "style": "basic",
                    "url": "http://www.youtube.com/"
                },
                {
                    "name": "爱奇艺",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.iqiyi.com/"
                },
                {
                    "name": "芒果TV",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.mgtv.com/"
                },
                {
                    "name": "哔哩哔哩",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.bilibili.com/"
                },
                {
                    "name": "AcFun",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.acfun.tv/"
                },
                {
                    "name": "吐槽",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.tucao.tv/"
                },
                {
                    "name": "多瑙影院",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.dnvod.eu/"
                },
                {
                    "name": "虾米",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.xiami.com/"
                },
                {
                    "name": "热歌榜",
                    "icon": "",
                    "style": "basic",
                    "url": "http://music.163.com/#/playlist?id=3778678"
                }
            ]
        },
        {
            "category": "购物",
            "links": [
                {
                    "name": "京东",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.jd.com/"
                },
                {
                    "name": "天猫",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.tmall.com/"
                },
                {
                    "name": "淘宝",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.taobao.com/"
                },
                {
                    "name": "亚马逊",
                    "icon": "amazon yellow",
                    "style": "basic",
                    "url": "http://www.amazon.cn/"
                },
                {
                    "name": "一号店",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.yhd.com/"
                },
                {
                    "name": "当当",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.dangdang.com/"
                },
                {
                    "name": "网易严选",
                    "icon": "",
                    "style": "basic",
                    "url": "http://you.163.com/"
                }
            ]
        },
        {
            "category": "工具",
            "links": [
                {
                    "name": "12306",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.12306.cn/"
                },
                {
                    "name": "百度地图",
                    "icon": "marker red",
                    "style": "basic",
                    "url": "http://map.baidu.com/"
                },
                {
                    "name": "大众点评",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.dianping.com/beijing"
                },
                {
                    "name": "QQ邮箱",
                    "icon": "qq black",
                    "style": "basic",
                    "url": "http://mail.qq.com/"
                },
                {
                    "name": "网易邮箱",
                    "icon": "",
                    "style": "basic",
                    "url": "http://email.163.com/"
                },
                {
                    "name": "Gmail",
                    "icon": "google red",
                    "style": "basic",
                    "url": "http://mail.google.com"
                },
                {
                    "name": "有道翻译",
                    "icon": "",
                    "style": "basic",
                    "url": "http://fanyi.youdao.com/"
                },
                {
                    "name": "快递查询",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.kuaidi100.com/"
                }
            ]
        },
        {
            "category": "学习",
            "links": [
                {
                    "name": "CSDN",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.csdn.net/"
                },
                {
                    "name": "W3School",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.w3school.com.cn/"
                },
                {
                    "name": "Stack Overflow",
                    "icon": "stack overflow orange",
                    "style": "basic",
                    "url": "http://stackoverflow.com/"
                },
                {
                    "name": "GitHub",
                    "icon": "github black",
                    "style": "basic",
                    "url": "http://github.com/"
                },
                {
                    "name": "V2EX",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.v2ex.com/"
                },
                {
                    "name": "SegmentFault",
                    "icon": "",
                    "style": "basic",
                    "url": "http://segmentfault.com/"
                },
                {
                    "name": "掘金",
                    "icon": "",
                    "style": "basic",
                    "url": "http://gold.xitu.io/"
                },
                {
                    "name": "网易公开课",
                    "icon": "",
                    "style": "basic",
                    "url": "http://open.163.com/"
                }
            ]
        },
        {
            "category": "求职",
            "links": [
                {
                    "name": "LinkedIn",
                    "icon": "linkedin blue",
                    "style": "basic",
                    "url": "http://www.linkedin.com/"
                },
                {
                    "name": "大街网",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.dajie.com/"
                },
                {
                    "name": "拉勾网",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.lagou.com/"
                },
                {
                    "name": "智联招聘",
                    "icon": "",
                    "style": "basic",
                    "url": "http://zhaopin.com/"
                },
                {
                    "name": "前程无忧",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.51job.com/"
                },
                {
                    "name": "应届生",
                    "icon": "",
                    "style": "basic",
                    "url": "http://www.yingjiesheng.com/"
                }
            ]
        }
    ]
}
};
