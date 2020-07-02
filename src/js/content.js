const projectList = [
    {
        "name": "Dbox 研发文档管理系统",
        "date": "2019/9-至今",
        "describe": "DBOX是管理海内外各个部门各产品各个项目全生命周期相关文档的系统，实现线上文档操作、相关流程、文档管理、文档共享等核心功能。使用VUE框架+ElementUI组件库+webpack构建工具。",
        "duties": [
            "参与产品设计，根据设计快速指定开发计划",
            "梳理业务逻辑，使用vue-cli快速搭建前端框架，vue-router搭建页面路由",
            "封装接口请求、配置全局数据管理、国际化配置及编写公共组件及样式库",
            "协调安排开发工作，快速有效的进行功能模块开发",
            "代码检视及部署上线"
        ]
    }, {
        "name": "PDM管理系统",
        "date": "2019/8-2019/9",
        "describe": "PDM（Part Document Manufactor）是用来管理产品涉及到的部件、部件相关文档及关联厂家相关信息管理系统，集成了部件、文档、厂家、EC流程四大业务模块。",
        "duties": [
            "使用VUE + AUI框架实现前台页面",
            "使用vue-cli快速搭建vue框架,vue-router搭建页面路由，使用webpack编译打包工具",
            "使用Axios请求响应拦截器相关功能封装接口请求方法（包括各环境配置、各种状态码拦截响应）",
            "使用vuex为专门为vue.js应用程序提供全局的数据管理",
            "封装弹窗、输入框、树形菜单、多功能表格等公共组件"
        ]
    }, {
        "name": "All In One 塔台",
        "date": "2018/11-2019/5",
        "describe": "塔台为方便公司管理层管理查看项目相关信息、研发活动、研发人员相关信息等，包括项目中心、运营中心、外包管理、电视墙、生命周期管理、可信与软件工程、环境管理等主要模块。",
        "duties": [
            "使用Angular.js+ tinyUI实现路由搭建和前端页面",
            "使用图表组件Echart + 富文本 WangEditor等插件实现相应功能",
            "使用angular自定义组件封装过滤功能",
            "使用vuex为专门为vue.js应用程序提供全局的数据管理",
            "优化页面性能，提高用户体验"
        ]
    }, {
        "name": "Pilot Fleet Unify 统一平台",
        "date": "2015/7-2017/10",
        "describe": "统一平台为网络优化提供全套解决方案，包括测试管理、数据管理、远程实时监控、网络调整与优化、异常事件自动分析、问题与案例分析、多运营商指标对比分析、丰富的报表统计以及高效的预处理分析功能，能让运营商和提供商有效地降低运营成本。",
        "duties": [
            "使用Angular.js+bootstrap实现路由搭建和前端页面",
            "使用echart完成图表的绘制",
            "使用jqgrid做表格排序过滤，文件上传下载等功能",
            "使用vuex为专门为vue.js应用程序提供全局的数据管理",
            "使用promise和ajax封装请求接口的方法"
        ]
    }
]

const workList = [
    {
        "name": "My Blog",
        "date": "",
        "describe": "",
        "duties": [
            "使用VUE + Axios 实现前台页面，封装功能组件",
            "后台使用Koa + MySQL，实现用户登录、注册、浏览、评论等功能",
            "使用ES6异步解决方案（Promise/async/await）封装后台接口",
            "使用ejs模板引擎实现博客后台管理系统，文章管理、用户管理、评论管理等"
        ]
    }, {
        "name": "个人简历",
        "date": "",
        "describe": "",
        "duties": [
            "使用Html + CSS3 + SASS完成页面，使用gulp自动构建工具",
            "使用gulp-compass实现自动化编译以及browser-sync实时更新数据",
            "使用viewport + rem实现移动端页面的适配",
            "使用pagepadding分页库"
        ]
    }
]

const experienceList = [
    {
        "name": "中软国际",
        "date": "2018.11-2020.6",
        "describe": "",
        "duties": [
            "负责产品的页面架构设计和开发，根据产品需求给出较优的前端页面开发方案",
            "根据需求参与产品设计，参与产品详细设计评审",
            "编写可复用的用户界面功能组件及公共样式库",
            "使构建前端项目框架，有效的协同各组员开发工作",
            "负责产品上线工作，对接客户，维护上线项目，保证线上稳定"
        ]
    }, {
        "name": "四川星石网络",
        "date": "2017.11-2018.10",
        "describe": "",
        "duties": [
            "配合UI设计及需求，根据PSD设计图快速生成静态页面",
            "编写JS程序，实现用户操作",
            "与后端开发人员合作，实现产品的Web相关功能",
            "负责产品后期维护及bug修改工作"
        ]
    }, {
        "name": "世纪鼎利",
        "date": "2015.7-2017.10",
        "describe": "",
        "duties": [
            "根据产品需求和设计，完成相应功能效果开发和页面交互效果",
            "负责产品需求分析、规划设计、开发及实现过程的控制",
            "项目上线后的BUG修复及功能优化等"
        ]
    }
]

var project = document.querySelector("#projectList");
for(var i = 0; i < projectList.length; i++) {
    var p = '';
    for(var j = 0; j < projectList[i].duties.length; j++) {
        p += '<p>' + (j+1) +'.'+ projectList[i].duties[j] + '</p>';
    }
    project.innerHTML +=
        '<div class="work work' + i%2 +
        '">' +
        '<div class="work_list">' +
        '<div class="h2">' + projectList[i].name + '</div>'
        + p +
        '</div>' +
        '</div>';
}

var work = document.querySelector("#workList");
for(var i = 0; i < workList.length; i++) {
    var p = '';
    for(var j = 0; j < workList[i].duties.length; j++) {
        p += '<p>' + (j+1) +'.'+ workList[i].duties[j] + '</p>';
    }
    work.innerHTML +=
        '<div class="work workWidth">' +
        '<div class="work_list">' +
        '<div class="h2">' + workList[i].name + '</div>'
        + p +
        '</div>' +
        '</div>';
}

var experience = document.querySelector("#experienceList");
for(var i = 0; i < experienceList.length; i++) {
    var p = '';
    for(var j = 0; j < experienceList[i].duties.length; j++) {
        p += '<p>' + (j+1) +'.'+ experienceList[i].duties[j] + '</p>';
    }
    experience.innerHTML +=
        '<div class="work fnone companyWidth">' +
        '<div class="work_list">' +
        '<div class="h2">' + experienceList[i].name+
        '<span class="date">&nbsp;&nbsp;' + experienceList[i].date + '</span>' + '</div>'
        + p +
        '</div>' +
        '</div>';
}

