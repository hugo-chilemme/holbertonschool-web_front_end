# SASS and SCSS

Welcome to the SASS and SCSS project! This README will guide you through the basics of SASS and SCSS, their benefits, and how to get started.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Variables](#variables)
- [Nesting](#nesting)
- [Partials and Import](#partials-and-import)
- [Mixins](#mixins)
- [Inheritance](#inheritance)
- [Functions](#functions)
- [Resources](#resources)

## Introduction
SASS (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS. SCSS is a syntax of SASS which is fully compatible with CSS.

## Installation
To install SASS, you can use npm:
```bash
npm install -g sass
```

## Basic Usage
To compile a SCSS file to CSS, use the following command:
```bash
sass input.scss output.css
```

## Variables
Variables allow you to store values that you can reuse throughout your stylesheet.
```scss
$primary-color: #333;

body {
    color: $primary-color;
}
```

## Nesting
Nesting allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.
```scss
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
}
```

## Partials and Import
Partials are smaller SASS files that you can import into other SASS files.
```scss
// _reset.scss
* {
    margin: 0;
    padding: 0;
}

// styles.scss
@import 'reset';
```

## Mixins
Mixins allow you to create reusable chunks of code.
```scss
@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
         -moz-border-radius: $radius;
            -ms-border-radius: $radius;
                    border-radius: $radius;
}

.box { @include border-radius(10px); }
```

## Inheritance
Inheritance allows you to share a set of CSS properties from one selector to another.
```scss
.message {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}

.success {
    @extend .message;
    border-color: green;
}
```

## Functions
Functions allow you to create reusable pieces of code that return a value.
```scss
@function calculate-rem($size) {
    $rem-size: $size / 16px;
    @return #{$rem-size}rem;
}

body {
    font-size: calculate-rem(16px);
}
```

## Resources
- [SASS Official Documentation](https://sass-lang.com/documentation)
- [SCSS Guide](https://sass-lang.com/guide)

