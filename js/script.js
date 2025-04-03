// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
    // input
    let radius = parseFloat(document.getElementById('radius').value);
    let radius_2 = parseFloat(document.getElementById('radius2').value)
    // process
    const PI = 3.14
    let area = PI * radius ** 2;
    let circumference = 2 * PI * radius_2
    // output
    document.getElementById('area').innerHTML = ' Area is ' + area.toFixed(2) + ' cm² ' + '.';
    document.getElementById('perimeter').innerHTML = ' Area is ' + circumference.toFixed(2) + ' cm ' + '.';
}
