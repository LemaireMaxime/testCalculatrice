const assert = require('assert');
const sinon = require('sinon');

describe('CalculService',function (){

  describe('#add', function (){

    it('should add values', function () {
      let result = CalculService.add(1,5);
      assert.equal(result, 6);
    });

  })

  describe('#sub', function (){
    it('should sub values', function () {
      let result = CalculService.sub(10,2);
      assert.equal(result, 8);
    });
  })

  describe('#mul', function (){
    it('should mul values', function () {
      let result = CalculService.mul(2,5);
      assert.equal(result, 10);
    });
  })
  describe('#div', function (){
    it('should div values', function () {
      try {
        let result = CalculService.div(25,0)
      }catch (e){
        assert.equal(e.message,'Division par zéro impossibles.');
        return
      }
      assert(false)
    });
  })

  describe('#prct', function (){
    it('should prct values', function () {
      var stub1 = sinon.stub(CalculService,'mul').callsFake(function (a,b){return 20})
      var result = CalculService.mul(5,5);
      CalculService.mul.restore()

    });
  })
})
