var LinkedList= require('../list');

it('should add items at the end of the list',()=>{

    var list = new LinkedList();
    list.add(2);
    list.add(3);
    list.add(5);

    expect(list.get(2)).toBe(5);
    expect(list.length).toBe(3);
});