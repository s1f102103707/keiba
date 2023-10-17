import superagent from 'superagent';

class Crowller {
  private url = 'https://db.netkeiba.com/horse/2009102739/';
  constructor() {
    this.getRawHtml();
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    console.log(result.text);
  }
}

const crowller = new Crowller();
