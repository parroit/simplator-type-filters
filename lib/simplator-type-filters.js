/*
 * simplator-type-filters
 * https://github.com/parroit/simplator-type-filters
 *
 * Copyright (c) 2013 parroit
 * Licensed under the MIT license.
 */

'use strict';

var simplator = require("simplator"),
    moment = require("moment"),
    accounting = require("accounting");

simplator.filter("simplatorTypeFilters",function(){return "simplator-type-filters ver 0.1.0"});

simplator.filter("date",function(value,format){
    return moment(value || 0).format(format);
});


simplator.filter("number",function(value,precision,decimal,thousand){
    return accounting.formatNumber(value,precision,thousand,decimal);
});

simplator.filter("currency",function(value,currency,precision,decimal,thousand){
    return accounting.formatMoney(value,currency,precision,thousand,decimal);
});