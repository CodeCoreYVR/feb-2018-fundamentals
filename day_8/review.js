// css - selectors
// 1. tagname
// 2. id
// 3. class

// hyperlink element
// anchor element
// a is the tag name
// href is an attribute
// the corresponding value is:  http://www.google.com/
// inner html: Google
<a id="first" class="highlight" href="http://www.google.com/">Google</a>

// css
// a is my selector
// declaration or rule is inbetween {}
// css properties and their corresponding values
a {
  color: green;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
}

#first {
  color: orange;
}

.highlight {
  background-color: yellow;
}

li a {}
li.container a#first {}

a:hover {
  color: black;
}

// jquery - javascript library
// john resig
// javascript has the capability to create higher order functions
// objects, arrays, classes....

// a communication portal between your html/css and your javascript
// write less and do more



$('.large.grey.diamond').remove();
$('.large.grey.diamond').hide();
$('.large.grey.diamond').show();

//
