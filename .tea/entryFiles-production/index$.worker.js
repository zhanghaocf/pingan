
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../components/component-zxLoading/component-zxLoading');
require('../../pages/index/index');
require('../../pages/rule/rule');
require('../../pages/h5/h5');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
