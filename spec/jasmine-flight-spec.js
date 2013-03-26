describeComponent('./component.js', function() {
  describe("#describeComponent", function() {
    it("loads the component as this.Component", function() {
      expect(this.Component).toBeDefined();
    });
  });

  var html;
  describe("#prepareComponent", function() {
    beforeEach(function() {
      html = "<div id='container'><a href='#'>link</a></div>";
      prepareComponent(html);
    });

    it("loads an instance of the component as this.component", function() {
      expect(this.component).toBeDefined();
    });

    it("loads the node as this.$node", function() {
      expect(this.$node).toBeDefined();
    });
  });
});

describeMixin('./mixin.js', function() {
  describe("#describeMixin", function() {
    it("loads the mixin as this.Mixin", function() {
      expect(this.Mixin).toBeDefined();
    });

    it("loads the component as this.Component", function() {
      expect(this.Component).toBeDefined();
    });
  });
});
