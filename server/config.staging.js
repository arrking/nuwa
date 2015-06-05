/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: true,

  get mini_assets() {
    return !this.debug;
  }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'Nodeclub', // 社区名字
  description: 'CNode：Node.js专业中文社区', // 社区的描述
  keywords: 'nodejs, node, express, connect, socket.io',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />'
  ],
  site_logo: '/public/images/cnodejs_light.svg', // default is `name`
  site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    ['/about', '关于']
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'nuwa-staging.arrking.com',
  client_host: 'nuwa-staging-wx.arrking.com',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://james:VatjuAdKs2sx1el3@115.28.162.221:27088/nuwadb',
  db_name: 'nuwadb',

  // redis 配置，默认是本地
  redis_host: '115.28.162.221',
  redis_port: 6379,
  redis_pass: 'DMMiNvjfdsi6pyoKvKGFCTVoMDEHH6eD',



  session_secret: 'Vebo881ilrein7', // 务必修改
  auth_cookie_name: 'nuwa_sid',

  // 程序运行的端口
  port: 3088,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: 'CNode：Node.js专业中文社区',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'CNode：Node.js专业中文社区',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'club@126.com',
      pass: 'club'
    }
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签，设某人为达人
  admins: {
    mike001: true
  },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'http://cnodejs.org/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: false,

  // newrelic 是个用来监控网站性能的服务
  newrelic_key: 'yourkey',

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    domain: 'http://{bucket}.qiniudn.com'
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // 版块
  tabs: [
    ['ask', '问题'],
    ['diary', '日记']
  ],
  // 极光推送
  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false,
  },

  create_post_per_day: 1000, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  visit_per_day: 1000, // 每个 ip 每天能访问的次数


  /**
   * wechat gzh
   */
  wechat_gzh: {
    appId: "wxacb345923b110906",
    appSecret: "e7071a860767d3f602cecce1f599b4b3",
    api: {
      notify_template_id: "xx"
    },
    debug: true
  },

  /**
   * weimi api
   */
  weimi_api: {
    uid: "lmf8FDhlAHHB",
    pas: "r2z36xbh",
    cid: "Zh07NWBGgr1r"
  },

  /**
   * Config log4js
   */
  log4js: {
    appenders: [{
      type: "console"
    }, {
      type: "file",
      filename: "logs/default.log",
      maxLogSize: 2048000,
      backups: 5
    }]
  }

};

module.exports = config;