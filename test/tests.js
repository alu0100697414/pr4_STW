var expect = chai.expect;

describe("Test para ConverTemp", function() {

    it("Debería ser: 32e4F", function() {
      var temp = new Temperatura();

      temp.set_valor(32e4);
      temp.set_tipo("F");

      var espia = sinon.spy();
      espia(temp.get_valor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(32e4)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      expect(temp.get_valor()).to.equal(32e4);
      expect(temp.get_tipo()).to.equal("F");
    });

    it("Debería ser: -4.3e-2C", function() {
      var temp = new Temperatura();
      temp.set_valor(-4.3e-2);
      temp.set_tipo("C");

      var espia = sinon.spy();
      espia(temp.get_tipo());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith("C")).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.string)).to.be.true;

      expect(temp.get_valor()).to.equal(-4.3e-2);
      expect(temp.get_tipo()).to.equal("C");
    });

    it("0.032C === 32.0576F", function() {
      var temp = new Temperatura();

      temp.set_valor(0.032);
      temp.set_tipo("C");

      var espia = sinon.spy();
      espia(temp.get_valor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(0.032)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var res = temp.conversor();

      expect(res).to.equal("El resultado es: 32.0576 F");
    });

    it("inicializador()", function() {
      var temp = new Temperatura();
      temp.inicializador("0.032C");

      var espia = sinon.stub();
      espia.withArgs(0.032).returns(temp.get_valor());
      espia.throws();

      expect(espia(0.032)).to.equal(temp.get_valor());
      expect(espia).to.throw(Error);

      expect(temp.get_valor()).to.equal(0.032);
      expect(temp.get_tipo()).to.equal("C");
    });

    it("32,0576F === 0.032C", function() {
      var temp = new Temperatura();

      temp.set_valor(32.0576);
      temp.set_tipo("F");

      var res = temp.conversor();

      var espia = sinon.spy();
      espia(res);

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith("El resultado es: 0.032000000000000424 C")).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.string)).to.be.true;

      expect(res).to.equal("El resultado es: 0.032000000000000424 C");
    });

    it("conversor()", function() {
      window.onload = function() {
        var ini = document.getElementById("inicial");

        ini.value = "0C";
        conversor();

        var espia = sinon.stub();
        espia.withArgs("El resultado es: 32.0576 F").returns(conversor());
        espia.throws();

        expect(espia("El resultado es: 32.0576 F")).to.equal(conversor());
        expect(espia).to.throw(Error);

        expect(resultado.innerHTML).to.equal("El resultado es: 32.0576 F");
      }
    });
});
