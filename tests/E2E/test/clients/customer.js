let CommonClient = require('./common_client');

class Customer extends CommonClient {

  async searchByAddress(addresses, address) {
    if (isVisible) {
      await this.waitAndSetValue(addresses.filter_by_address_input, address);
      await page.keyboard.press('Enter');
      await page.waitFor(addresses.address_value.replace('%ID', 5));
      await page.$eval(addresses.address_value.replace('%ID', 5), el => el.innerText).then((text) => expect(text.trim).to.equal(("12 rue d'amsterdam" + address).trim));
    } else {
      await page.waitFor(addresses.address_value.replace('%ID', 4));
      await page.$eval(addresses.address_value.replace('%ID', 4), el => el.innerText).then((text) => expect(text.trim).to.equal(("12 rue d'amsterdam" + address).trim));
    }
  }

  searchByEmail(customer, customer_email) {
    if (isVisible) {
      return this.client
        .waitAndSetValue(customer.customer_filter_by_email_input, customer_email)
        .keys('\uE007')
        .getText(customer.email_address_value.replace('%ID', 6)).then(function (text) {
          expect(text).to.be.equal(customer_email);
        })
    } else {
      return this.client
        .getText(customer.email_address_value.replace('%ID', 5)).then(function (text) {
          expect(text).to.be.equal(customer_email);
        })
    }
  }

  getAddressNumberInVar(selector, globalVar) {
    return this.client
      .execute(function (selector) {
        return (document.querySelectorAll(selector).length);
      }, selector)
      .then((variable) => global.tab[globalVar] = variable.value);
  }

  async deleteAddresses(selector) {
    for (let j = 1; j <= (parseInt(tab['address_number'])); j++) {
      await this.client.waitForExistAndClick(selector)
    }
    return await this.client.pause(1000)
  }

}

module.exports = Customer;
