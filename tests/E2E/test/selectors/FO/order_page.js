module.exports = {
  CheckoutOrderPage: {
    add_to_cart_button: '#add-to-cart-or-refresh button[class*=add-to-cart]',
    proceed_to_checkout_modal_button: '#blockcart-modal div.cart-content-btn a',
    blockcart_modal: '#blockcart-modal',
    continue_shopping_button: '#blockcart-modal div.cart-content-btn button',
    proceed_to_checkout_button: '#main div[class*=checkout] a',
    promo_code_link: '//*[@id="main"]//a[contains(@class, "promo-code")]',
    promo_code_input: '//*[@id="promo-code"]//input[contains(@class, "promo-input")]',
    promo_code_add_button: '//*[@id="promo-code"]//button[@type="submit"]/span[text()="Add"]',
    remove_voucher_button: '(//*[@id="main"]//a[@data-link-action="remove-voucher"])[2]',
    cart_subtotal_products: '//*[@id="cart-subtotal-products"]/span[2]',
    cart_subtotal_discount: '//*[@id="cart-subtotal-discount"]/span[2]',
    cart_total: '#main div[class*=cart-total] > span:nth-of-type(2)',
    checkout_step2_continue_button: '#checkout-addresses-step button[name*=confirm-addresses]',
    checkout_step3_continue_button: '#js-delivery button[name=confirmDeliveryOption]',
    checkout_step4_payment_radio: '#payment-option-2',
    shipping_method_option: '#delivery_option_2',
    message_textarea: '#delivery_message',
    condition_check_box: '#conditions_to_approve\\5b terms-and-conditions\\5d',
    confirmation_order_button: '#payment-confirmation button[type=submit]',
    confirmation_order_message: '#content-hook_order_confirmation h3[class*=card-title]',
    order_product: '#order-items div[class*=details] span',
    order_reference: '#order-details li:nth-of-type(1)',
    order_basic_price: '#order-items div[class*=qty] > div > div:nth-of-type(1)',
    order_total_price: '#order-items > div.order-confirmation-table tr:nth-of-type(1) > td:nth-of-type(2)',
    order_shipping_prince_value: '#order-items > div.order-confirmation-table tr:nth-of-type(2) > td:nth-of-type(2)',
    customer_name: '#_desktop_user_info a.account > span',
    shipping_method: '#order-details li:nth-of-type(3)',
    quantity_input: '#main li:nth-of-type(%NUMBER) div[class*=input-group] input[class*=js-cart-line-product-quantity]',
    success_product_add_to_cart_modal: '#myModalLabel',
    product_discount_details: '//*[@id="main"]//span[contains(@class, "discount")]',
    alert: '//*[@id="notifications"]//article[contains(@class, "alert-danger")]',
    product_cart_link: 'div.product-line-info > a',
    cart_product_discount: '//*[@id="main"]//span[contains(@class,"discount-percentage")]',
    total_cart: '//*[@id="main"]//div[contains(@class, "cart-total")]/span[@class="value"]',
    product_name: '#main li:nth-of-type(%NUMBER) div.product-line-info > a',
    product_unit_price: '#main li:nth-of-type(%NUMBER) div.current-price > span',
    arrow_button_up: '//*[@id="main"]//li[%NUMBER]//button[contains(@class, "touchspin-up")]',
    add_new_address: '//*[@id="checkout-addresses-step"]//p[contains(@class,"add-address")]',
    company_input: '//*[@id="delivery-address"]//input[@name="company"]',
    vat_number_input: '//*[@id="delivery-address"]//input[@name="vat_number"]',
    address_input: '//*[@id="delivery-address"]//input[@name="address1"]',
    address_second_input: '//*[@id="delivery-address"]//input[@name="address2"]',
    zip_code_input: '//*[@id="delivery-address"]//input[@name="postcode"]',
    city_input: '//*[@id="delivery-address"]//input[@name="city"]',
    country_input: '//*[@id="delivery-address"]//select[@name="id_country"]',
    phone_input: '//*[@id="delivery-address"]//input[@name="phone"]',
    invoice_company_input: '//*[@id="invoice-address"]//input[@name="company"]',
    invoice_vat_number_input: '//*[@id="invoice-address"]//input[@name="vat_number"]',
    invoice_address_input: '//*[@id="invoice-address"]//input[@name="address1"]',
    invoice_address_second_input: '//*[@id="invoice-address"]//input[@name="address2"]',
    invoice_zip_code_input: '//*[@id="invoice-address"]//input[@name="postcode"]',
    invoice_city_input: '//*[@id="invoice-address"]//input[@name="city"]',
    invoice_country_input: '//*[@id="invoice-address"]//select[@name="id_country"]',
    invoice_phone_input: '//*[@id="invoice-address"]//input[@name="phone"]',
    use_address_for_facturation_input: '//*[@id="use_same_address"]',
    product_current_price: '.current-price > span[itemprop=price]',
    display_after_carrier_link_widget: '//*[@id="hook-display-after-carrier"]//p[contains(text(),"%NAME")]',
    display_after_carrier_second_link_widget: '//*[@id="hook-display-after-carrier"]//div[2]/p',
    modal_content: '//*[@id="blockcart-modal"]//div[@class="modal-content"]',
    cart_page: '//*[@id="cart"]',
    cart_body: '(//*[@id="main"]//div[contains(@class, "body")])[1]',
    country_list: '//*[@id="delivery-address"]//select[@name="id_country"]',
    modal_product_picture: '#blockcart-modal img.product-image',
    modal_product_name: '#blockcart-modal h6[class*=product-name]',
    modal_product_unit_price: '#blockcart-modal  div:nth-child(2) > p:nth-child(2)',
    modal_product_quantity: '#blockcart-modal  div:nth-child(2) > p:nth-child(3)',
    modal_cart_product_count: '#blockcart-modal  p.cart-products-count',
    modal_total_products: '#blockcart-modal div[class=cart-content] p:nth-child(2)',
    modal_total_shipping: '#blockcart-modal p:nth-of-type(3)',
    modal_total: '#blockcart-modal p:nth-of-type(4)',
    product_picture: '#main img[alt=%PRODUCT]',
    shipping_value: '#cart-subtotal-shipping > span.value',
    product_total_price: '#main li:nth-of-type(%NUMBER) span.product-price > strong',
    checkout_total_price: '#js-checkout-summary div[class*=cart-summary-totals] div.cart-total span:nth-of-type(2)',
    confirmation_product_picture:'#order-items img[src*="%PRODUCT"]',
    confirmation_product_name:'#order-items > div > div:nth-child(%ID) div.details > span',
    confirmation_product_unit_price:'#order-items > div > div:nth-child(%ID) > div.qty div.text-xs-left',
    confirmation_product_quantity:'#order-items  div:nth-child(%ID) div:nth-of-type(3)  div:nth-of-type(2)',
    confirmation_product_total_price:'#order-items > div >  div:nth-child(%ID)  div.qty  div:nth-child(3)',
    confirmation_shipping_price:'#order-items table > tbody > tr:nth-child(2) > td:nth-child(2)',
    confirmation_total_price:'#order-items  table > tbody > tr.font-weight-bold  td:nth-child(2)',
    confirmation_sub_total_price:'#order-items table > tbody > tr:nth-child(1) > td:nth-child(2)',
    basic_price_product: '//*[@id="order-items"]//div[%I]/div[contains(@class,"qty")]/div/div[1]',
    product_combination: '//*[@id="order-items"]//div[%I]/div[contains(@class,"details")]/span',
    quantity_product: '//*[@id="order-items"]//div[%I]/div[contains(@class,"qty")]//div[2]',
    total_product: '//*[@id="order-items"]//div[%I]/div[contains(@class,"qty")]//div[3]',
    order_total_tax: '//*[@id="order-items"]/div[@class="order-confirmation-table"]//tr[4]/td[2]',
    order_total_tax_excl_value: '//*[@id="order-items"]/div[@class="order-confirmation-table"]//tr[4]/td[2]',
    order_amount: '//*[@id="content-hook_payment_return"]//dd[1]',
    payment_method: '//*[@id="order-details"]//li[2]',
    product_details_tab: '#main a[href="#product-details"]',
    product_available_quantity_span: '#main div[class*=product-quantities] span',
    product_name_link: '//*[@id="main"]//li[@class="cart-item"]//a[@class="label"]',
    product_customization_link: '(//*[@id="main"]//a[text()="Product customization"])[%I]',
    product_customization_modal: '(//div[contains(@class,"product-customization-line")]/div[%R])[%I]',
    product_customization_modal_image: '//div[contains(@class,"product-customization-line")]//img',
    product_customization_close_modal_button: '(//button[@class="close"])[%I]',
    customization_error_message: '//*[@id="notifications"]//article[contains(@class,"alert-danger")]/ul/li',
  },
  CustomerAccount: {
    order_history_button: '#history-link',
    details_buttons: 'a[data-link-action="view-order-details"]',
    details_button: '#content tr:nth-of-type(1) > td:nth-of-type(6) > a[data-link-action*=details]',
    order_details_words: '#main h1',
    order_infos_block: '//*[@id="order-infos"]',
    order_status_block: '//*[@id="order-history"]',
    invoice_address_block: '//*[@id="invoice-address"]',
    order_products_block: '//*[@id="order-products"]',
    request_return_button: '//*[@id="order-return-form"]//button',
    add_message_block: '//*[@id="content"]/section[@class="order-message-form box"]',
    message_input: '//*[@id="content"]//textarea[@name="msgText"]',
    send_button: '//*[@id="content"]//button[@name="submitMessage"]',
    success_panel: '//*[@id="notifications"]//article[@class="alert alert-success"]',
    product_name:'//*[@id="order-products"]//td[1]//a[contains(text(),"%PRODUCTNAME")]'
  }
};
