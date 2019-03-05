module.exports = {
  OrderPage: {
    orders_subtab: '#subtab-AdminParentOrders',
    form: '#form-order',
    view_order_button: '#form-order tr:nth-of-type(%NUMBER) div[class*=pull-right] a',
    order_state_select: '#id_order_state',
    update_status_button: '//*[@id="status"]/form//button[@name="submitState"]',
    order_quantity: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(4) > span[class*=show]',
    order_available_quantity: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(5)',
    order_status: '#status table[class*=history-status] tr:nth-of-type(1) > td:nth-of-type(2)',
    shipping_cost: '#shipping_table tr:nth-of-type(1) td:nth-of-type(5) > span',
    message_order: '#content div.message-body p.message-item-text',
    product_Url: '#orderProducts tr:nth-of-type(1) > td:nth-of-type(2) > a',
    edit_product_button: '#orderProducts button[class*=edit_product_change_link]',
    product_basic_price: '#orderProducts tr:nth-of-type(%NUMBER) input[class*=edit_product_price_tax_incl]',
    product_basic_price_TTC: '(//*[@id="orderProducts"]//span[@class="product_price_show"])[%NUMBER]',
    customer_name: '#content div.message-body h4.message-item-heading',
    order_submenu: '//*[@id="subtab-AdminOrders"]/a',
    document_submenu: '//*[@id="tabOrder"]//a[@href="#documents"]',
    download_delivery_button: '//*[@id="documents_table"]//tr[3]/td[3]/a',
    product_name: '#orderProducts tr:nth-of-type(%NUMBER) span.productName',
    total_price: '#total_products > td[class*=amount]',
    shipping_method: '#shipping_table tr > td:nth-of-type(3)',
    search_by_reference_input: '#form-order table[class*=order] input[name=orderFilter_reference]',
    search_order_button: '#submitFilterButtonorder',
    first_order: '//*[@id="form-order"]//table//tbody//tr[1]//a',
    transform_guest_customer_button: '//*[@id="content"]//input[@name="submitGuestToCustomer"]',
    check_order_id: '(//*[@id="table-cart"]//td[3]/span)[1]',
    dropdown_button: '(//*[@id="table-cart"]/tbody//button[@data-toggle="dropdown"])[1]',
    delete_button: '(//*[@id="table-cart"]//a[@class="delete"])[1]',
    stock_product: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(5)',
    total_order: '#total_order > td.amount.text-right.nowrap > strong',
    total_product_price: '#orderProducts tr:nth-of-type(%NUMBER) > td:nth-of-type(6)',
    first_shopping_cart_checkbox: '//*[@id="table-cart"]//tr[1]//input[@name="cartBox[]"]',
    first_dropdown_button: '//*[@id="table-cart"]/tbody//tr[1]//button[@data-toggle="dropdown"]',
    total_price_tax_included: '//*[@id="orderProducts"]//tr[%NUMBER]/td[@class="total_product"]',
    order_view_button: '//*[@id="form-order"]//table//tr[%ORDERNumber]//td[12]//a',
    partial_refund: '//*[@id="desc-order-partial_refund"]',
    product_total: '//*[@id="documents"]//tr[contains(@id,"orderslip")]/td[4]',
    re_stock_product: '//label[@for="reinjectQuantitiesRefund"]',
    generate_credit_slip_checkbox: '//label[@for="generateCreditSlip"]',
    refund_products_button: '//button[@name="partialRefund"]',
    success_msg: '(//*[@id="main"]//div[contains(@class,"alert-success")])[1]',
    order_date: '(//*[@id="content"]//div[@class="kpi-content"])[1]/span[2]',
    order_ref: '(//*[@id="content"]//span[@class="badge"])[1]',
    product_information: '//*[@id="orderProducts"]//tr[1]/td[2]/a',
    empty_page_logo: '//*[@id="documents_table"]//div[@class="list-empty-msg"]',
    pdf_icon: '//*[@id="table-order"]//tr[%ORDER]//td[11]//i',
    invoice_document: '//table//td[3]/a',
    product_quantity: '//*[@id="orderProducts"]//span[contains(@class,"product_quantity_show")]',
    product_name_tab: '//*[@id="orderProducts"]//span[contains(@class,"productName")]',
    product_unit_price: '//*[@id="orderProducts"]//input[@name="product_price_tax_excl"]',
    product_unit_price_tax_included: '#orderProducts span.product_price_show',
    product_price: '//*[@id="orderProducts"]//input[@name="product_price_tax_incl"]',
    total_order_price: '#total_order > td:nth-of-type(2) > strong',
    total_product: '//*[@id="total_products"]/td[2]',
    shipping_cost_price: '#total_shipping > td:nth-of-type(2)',
    total: '//*[@id="total_order"]/td[2]/strong',
    total_tax: '//*[@id="total_taxes"]/td[2]',
    carrier: '#shipping_table tr:nth-of-type(1) > td:nth-of-type(3)',
    payment_method: '#formAddPayment tr:nth-of-type(1) > td:nth-of-type(2)',
    payment_date_column: '#formAddPayment tr:nth-of-type(1) > td:nth-of-type(1)',
    order_id: '(//*[@id="content"]//span[@class="badge"])[2]',
    credit_slip_document_name: '//*[@id="documents_table"]//tr[3]//a',
    quantity_refund: '//*[@id="orderProducts"]//div[@class="input-group"]/input[@onchange="checkPartialRefundProductQuantity(this)"]',
    documents_tab: '//*[@id="tabOrder"]/li[2]/a',
    generate_invoice_button: '//*[@id="documents_table"]/tbody/tr/td/a',
    awaiting_bank_wire_payment_option: '//*[@id="form_generate_by_status_order_states"]//label/span[contains(text(),"Awaiting bank wire payment")]',
    awaiting_check_payment: '//*[@id="form_generate_by_status_order_states"]//label/span[contains(text(),"Awaiting check payment")]',
    cancelled_option: '//*[@id="form_generate_by_status_order_states"]//label/span[contains(text(),"Canceled")]',
    delivery_document_name: '//*[@id="documents_table"]//tr[3]//a',
    product_total_price: '#total_order > td:nth-of-type(2) > strong',
    delivery_slip_document: '//*[@id="documents_table"]//a[contains(@href, "DeliverySlip")]',
    status:'//*[@id="status"]//tr[1]/td[contains(text(),"%STATUS")]',
    customer_email:'#content dl[class*=list-detail] a',
    customer_created:'#content dd.text-muted',
    valid_order_placed:'#content dl[class*=list-detail] dd span.badge',
    total_registration:'#content dd span[class*=badge-success]',
    shipping_address: '#addressShipping',
    tab_invoice:'#tabAddresses a[href^="#addressInvoice"]',
    amount_payment:'#formAddPayment tr:nth-of-type(1) > td:nth-of-type(4)',
    tracking_number_column:'#shipping_table tr:nth-of-type(1) > td:nth-of-type(6)',
    shipping_address_bloc: 'div #addressShipping',
    customer_email_link: '#content dl > dd:nth-of-type(1) > a',
    customer_account_registred_text: '#content dd.text-muted',
    valid_order_placed_number_span: '#content dd:nth-of-type(3) > span',
    total_registration_span: '#content dd:nth-of-type(4) > span',
    invoice_address_tab: '#tabAddresses > li:nth-of-type(2) > a',
    invoice_address: '#addressInvoice',
    date_shipping: '#shipping_table tr > td:nth-of-type(1)',
    weight_shipping: '#shipping_table tr > td:nth-of-type(4)',
    view_invoice_button: '//*[@id="content"]//div[contains(@class, "hidden-print")]/a[contains(@href, "generateInvoicePDF")]',
    date_invoice: '(//*[@id="documents_table"]//a[contains(@href, "generateInvoicePDF")])[1]',
    download_invoice_button: '(//*[@id="documents_table"]//a[contains(@href, "generateInvoicePDF")])[1]',
    view_delivery_slip: '//*[@id="content"]//div[contains(@class, "hidden-print")]/a[contains(@href, "generateDeliverySlipPDF")]',
    date_delivery_slip:'//*[@id="documents_table"]//tr[3]/td[1]',
    page_title:'//*[@id="content"]//h1[@class="page-title"]',
    id_order:'//*[@id="table-order"]//tr[1]/td[2]',
  },

  CreateOrder: {
    new_order_button: '#page-header-desc-order-new_order',
    customer_search_input: '#customer',
    choose_customer_button: '#customers > div:nth-of-type(1) > div > div:nth-of-type(2) > button',
    product_search_input: '#product',
    quantity_input: '#qty',
    add_to_cart_button: 'div.form-group #submitAddProduct',
    order_message_textarea: 'div.form-group #order_message',
    order_message_div: 'div.order_message_right',
    delivery_option: '#carrier_form #delivery_option',
    payment: '#payment_module_name',
    total_shipping: '#total_shipping',
    create_order_button: '#summary_part button[name=submitAddOrder]',
    product_combination: '.id_product_attribute',
    basic_price_value: '#customer_cart tr:nth-of-type(1) input.product_unit_price',
    product_select: '//*[@id="id_product"]',
    new_customer_button: '#search-customer-form-group a',
    detail_customer_button: '#customers a',
    customer_details_header_bloc: '#container-customer div.panel.clearfix div.panel-heading',
    customer_details_email_link: '#container-customer div.panel.clearfix div.panel-heading a:nth-child(2)',
    close_detail_link: 'a[title=Close]',
    detail_cart_button: '#nonOrderedCarts a[title*=View]',
    use_cart_button: '#nonOrderedCarts a[title*=Use]',
    orders_tab: '#old_carts_orders_navtab > li:nth-of-type(2) > a',
    detail_orders_button: '#lastOrders a[title*=View]',
    use_orders_button: '#lastOrders a[class*=duplicate_order]',
    total_with_tax: 'div #total_with_taxes',
    delete_product_button: '#customer_cart a[class*=delete_product]',
    quantity_arrow_up_button: '#customer_cart a[class*=increaseqty_product]',
    quantity_arrow_down_button: '#customer_cart a[class*=decreaseqty_product]',
    price_product_column: '#customer_cart td:nth-of-type(6)',
    currency_select: '#id_currency',
    language_select: '#id_lang',
    voucher_input: '#voucher',
    delete_voucher_button: '#voucher_list a[class*=delete_discount]',
    new_voucher_button: '#vouchers_part a',
    detail_addresses_bloc: '#address_delivery_detail',
    shipping_price: '#shipping_price > b',
    edit_delivery_address_button: '#edit_delivery_address',
    new_address_button: 'div #new_address',
    delivery_address_select: 'div #id_address_delivery',
    invoice_address_select: 'div #id_address_invoice',
    free_shipping_button: '#carrier_form > div:nth-of-type(3) > div label[for=free_shipping%S]',
    total_products_span: '#total_products',
    total_vouchers_span: '#total_vouchers',
    total_taxes_span: '#total_taxes',
    total_tax_excluded_span: '#total_without_taxes',
    total_tax_included_span: '#total_with_taxes',
  },

  ShoppingCart: {
    check_first_order_id: '//*[@id="table-cart"]//tr[1]/td[3]/span',
    check_order_customer: '//*[@id="table-cart"]//tr[1]/td[4]',
    view_order_button: '//*[@id="table-cart"]//td[%NUMBER]//a[@title="View"]',
    total_cart: '//*[@id="box-kpi-cart"]//span[@class="value"]',
    customer_name: '//*[@id="content"]//a[text()="%NAME"]',
    product_unit_price: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(3)',
    quantity_product: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(4)',
    stock_product: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(5)',
    total_product: '#orderProducts tr:nth-child(%NUMBER) > td:nth-child(6)',
    total_cart_summary: '#orderProducts td:nth-of-type(2) > strong',
    order_page: '//*[@id="content"]//a[contains(@href,"%s")]',
    export_carts_button: '//*[@id="page-header-desc-cart-export_cart"]',
    search_input: '//*[@id="table-cart"]//thead//input[@name="cartFilter_%searchParam"]',
    search_button: '//*[@id="submitFilterButtoncart"]',
    id: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    order_id: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    customer: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    total: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    carrier: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    date: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    customer_online: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    id_shopping_carts: 'table-cart',
    reset_button: '//*[@name="submitResetcart"]',
    checkbox_input: '//*[@id="table-cart"]//input[@name="cartBox[]"]',
    filter_id_input: '//*[@id="table-cart"]//input[@name="cartFilter_id_cart"]',
    product_name_cart: '//*[@id="orderProducts"]//tr[%NUMBER]/td[1]',
  },

  CreditSlip: {
    download_btn: '//*[@id="table-order_slip"]//td[2][contains(text(),"%ID")]/..//a',
    date_form: '//*[@id="date_from"]',
    date_to: '//*[@id="date_to"]',
    generate_button: '//*[@id="submitPrint"]',
    alert_message: '//*[@id="content"]//div[contains(@class,"alert-danger")]',
    credit_slip_prefix_input: '//*[@id="conf_id_PS_CREDIT_SLIP_PREFIX"]//div[@class="translatable-field lang-1"]//input',
    save_button: '//*[@id="order_slip_fieldset_general"]//button[@type="submit"]',
    green_validation: '//*[@id="content"]//div[@class="alert alert-success"]',
    first_credit_slip_download_btn: '//*[@id="table-order_slip"]/tbody/tr[1]/td[4]/a'
  },

  Invoices: {
    generate_pdf_button: '//*[@id="main-div"]//button[contains(text(),"Generate PDF file by date")]',
    generate_pdf_by_status_button: '//*[@id="main-div"]//button[contains(text(),"Generate PDF file by status")]',
    from_input: '//*[@id="form_generate_by_date_date_from"]',
    to_input: '//*[@id="form_generate_by_date_date_to"]',
    no_invoice_alert: '//*[@id="main-div"]//div[@class="alert-text"]/p'
  },
  DeliverySlip: {
    generate_btn: '//*[@id="delivery_pdf_fieldset"]//button',
    delivery_prefix: '//*[@id="form_options_prefix_1"]',
    delivery_number: '//*[@id="form_options_number"]',
    enable_product_image: '//*[@id="delivery_options_fieldset"]//label[@for="form_options_enable_product_image_1"]',
    disable_product_image: '//*[@id="delivery_options_fieldset"]//label[@for="form_options_enable_product_image_0"]',
    save_button: '//*[@id="delivery_options_fieldset"]//button[text()="Save"]',
    success_message: '//*[@id="main-div"]//div[@class="alert-text"]/p'
  }
};
