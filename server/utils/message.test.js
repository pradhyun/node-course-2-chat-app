var expect=require('expect');
var {generateMessage}=require('./message');

describe('generateMessage',()=>{
  it('should generate correct msg object',()=>{
    var from="jem@emp.com";
    var text="hi...hello";
    var message=generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});
