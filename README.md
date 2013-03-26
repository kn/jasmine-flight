# jasmine-flight

A collection of functions that help testing [Flight](https://github.com/twitter/flight) with [Jasmine](http://pivotal.github.com/jasmine/).

## Installation

Download jasmine-flight.js from [here](https://raw.github.com/kn/jasmine-flight/master/lib/jasmine-flight.js) and include it in your Jasmine's test runner file (or add it to jasmine.tml file if you are using Ruby with (jasmine-gem)[https://github.com/pivotal/jasmine-gem]).

## describeComponent

Defines a suite of flight component specs. It wraps a Jasmine describe block inside a require statement so that each spec is executed after the component is loaded. The loaded component is available as this.Component.

```
describeComponent('app/components/example.js', function() {
  it("loads the component as this.Component", function() {
    expect(this.Component).toBeDefined();
  });
});
```

## prepareComponent
 Initializes and instance of the flight component and the node that the component uses. It takes either options for the component or html/jQuery object to be attached to the component as a first argument and component options as a second argument if first argument is not options. The initialized component and node is available as this.component and this.$node, respectively.

```
describeComponent('app/components/example.js', function() {
  beforeEach(function() {
    var html = "<div id='container'><a href='#'>link</a></div>";
    prepareComponent(html);
  });

  it("loads an instance of this.Component as this.component", function() {
    expect(this.component).toBeDefined();
  });
});
```

## describeMixin

Defines a suite of flight mixin specs. It wraps a Jasmine describe block inside a require statement so that each spec is executed after the mixin is loaded and a component is defined with the mixin. The loaded mixin is available as this.Mixin. The defined component with the mixin is available as this.Component.

```
describeMixin('app/mixins/example.js', function() {
  it("loads the mixin as this.Mixin", function() {
    expect(this.Mixin).toBeDefined();
  });
});
```
