'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getBannerList', controller.home.getBannerList);
  router.get('/getAdvertisement',controller.home.getAdvertisement);
  router.get('/getCardList',controller.home.getCardList);
  router.get('/getDescList',controller.home.getDescList);
  router.get('/getMenu',controller.home.getMenu);
};
