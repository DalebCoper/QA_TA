Feature('website_builder');

start_page = 'https://www.reg.ru/web-sites/website-builder/';
selector_cost_infin_builder = '.b-plans-pillar__item_type_infinite.i-analytics.i-analytics_event_google.i-analytics_event_yandex .b-money-amount';
selector_order_button = '.b-plans-pillar__item_type_infinite.i-analytics.i-analytics_event_google.i-analytics_event_yandex .b-plans-pillar__details-indent.l-align_center';
selector_adding_domain_button = '.ds-textfield.ds-input.ds-textfield_size_m.ds-textfield_state_defaul';
domain_name = 'foobar2321321';
selector_buying_to_become_visible = '.choice-list .choice-item:first-child .domain-select-item > div:last-child  > div';
selector_buying_domain_button = '.choice-list .choice-item:first-child .domain-select-item';
selector_cost_of_ru_zone_domain = '.domain-in-order-price__final';
selector_cost_total = '.order-footer-price__price';

const assert = require('assert');

Scenario('runity test assignment', async ({ I }) => {
    I.mockRoute(/(.png$)|(.jpg$)|analytics|fonts|ads/, route => route.abort());
    I.amOnPage(start_page);
    let cost_of_builder = await I.grabTextFrom(selector_cost_infin_builder);
    I.click(selector_order_button);
    I.fillField(selector_adding_domain_button, domain_name);
    I.waitForVisible(selector_buying_to_become_visible, 20);
    let not_free = await I.grabTextFrom(selector_buying_to_become_visible);
    assert.doesNotMatch(not_free, /Домен занят/, 'Тестируемый домен был занят, смените его название в переменной "domain_name"');
    I.click(selector_buying_domain_button);
    let cost_of_domain = await I.grabTextFrom(selector_cost_of_ru_zone_domain);
    let cost_total = await I.grabTextFrom(selector_cost_total);
    assert.equal(Number(cost_of_builder) + Number(cost_of_domain), Number(cost_total));
});

