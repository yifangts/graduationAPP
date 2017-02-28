import Vue from 'vue'
//引入头部
import { Header } from 'mint-ui';
Vue.component("mt-header", Header);

//引入底部导航
import { Tabbar, TabItem } from 'mint-ui';
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);

//引入轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);

//引入单元格
import { Cell } from 'mint-ui';
Vue.component("mt-cell", Cell);

//引入滑动单元格
import { CellSwipe } from 'mint-ui';
Vue.component("mt-cell-swipe", Cell);

//引入按钮
import { Button } from 'mint-ui';
Vue.component("btn", Button);

//引入开关
import { Switch } from 'mint-ui';
Vue.component("mt-switch", Switch);

//引入搜索
import { Search } from 'mint-ui';
Vue.component("mt-search", Search);

//引入复选框
import { Checklist } from 'mint-ui';
Vue.component("mt-checklist", Checklist);

//加载动画，可指定显示类型、尺寸和颜色。
import { Spinner } from 'mint-ui';
Vue.component("mt-spinner", Spinner);
