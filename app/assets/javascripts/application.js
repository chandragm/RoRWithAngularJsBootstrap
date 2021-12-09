// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require angular
//= require angular-ui-router
//= require angular-rails-templates
//= require angular-animate
//= require angular-bootstrap
//= require jquery
//= require bootstrap
//= require cable
//= require_tree ./channels

// ====================================
// Main App
// ====================================
//= require ./angular/main/main.module
//= require ./angular/main/config.route
//= require_tree ./angular/main

// ====================================
// Customers
// ====================================
//= require ./angular/customers/customer.module
//= require ./angular/customers/config.route
//= require_tree ./angular/customers