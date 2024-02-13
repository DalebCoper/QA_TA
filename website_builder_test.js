Feature('website_builder');

Scenario('runity test assignment', async ({ I }) => {
    I.amOnPage('https://www.reg.ru/web-sites/website-builder/');
    let cost_of_builder = await I.grabTextFrom('.b-plans-pillar__item_type_infinite.i-analytics.i-analytics_event_google.i-analytics_event_yandex .b-money-amount');
    I.click('.b-plans-pillar__item_type_infinite.i-analytics.i-analytics_event_google.i-analytics_event_yandex .b-plans-pillar__details-indent.l-align_center');
    I.fillField('.choose-ssl-domain__input-wrap', 'foobar412325.ru');
    I.click('.choice-list .choice-item:first-child');
    let cost_of_domain = await I.grabTextFrom('.domain-in-order-price__final');
    let cost_total = await I.grabTextFrom('.order-footer-price__price')
    assert.equal(cost_of_builder + cost_of_domain, cost_total)

});
