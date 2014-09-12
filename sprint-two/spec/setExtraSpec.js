describe('set++', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should accept keys of any type', function() {
    set.add(1);
    set.add({a: 1, b: "hello"});
    set.add([1,2,3,4]);
    set.add(true);
    expect(set.contains(1)).to.be.true;
    expect(set.contains({a: 1, b: "hello"})).to.be.true;
    expect(set.contains([1,2,3,4])).to.be.true;
    expect(set.contains(true)).to.be.true;
  });

});
