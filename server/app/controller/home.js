'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async getBannerList() {
     const res = await this.app.mysql.select('banner');
    const list = res.length > 0 ? res:[];
      this.ctx.body = {
         list
      };
  }
  async getAdvertisement() {
    const res = await this.app.mysql.select('advertisement',{
      limit:1,
      offset:0
    })
    this.ctx.body = {
         res
      };
  }
  async getCardList() {
    const list = await this.app.mysql.select('card');
    this.ctx.body = {
      list
    }
  }
  async getDescList() {
    const list = await this.app.mysql.select('welfare');
    this.ctx.body = {
      list
    }
  }
  async getMenu() {
    const list = await this.app.mysql.select('tabmenu');
    this.ctx.body = {
      list
    }
  }
}

module.exports = HomeController;
