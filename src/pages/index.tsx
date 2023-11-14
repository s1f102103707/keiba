import cheerio from 'cheerio';
import superagent from 'superagent';

class Crowller {
  private url = 'https://db.netkeiba.com/horse/2009102739/';
  constructor() {
    this.getRawHtml();
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.getJobInfo(result.text);
  }

  getJobInfo(html: string) {
    const $ = cheerio.load(html);
    const jobItems = $('.c-job_offer-recruiter__name');
    jobItems.map((index, element) => {
      const companyName = $(element).find('a').text();
      console.log(companyName);
    });
  }
}

const crowller = new Crowller();
