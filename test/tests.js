var expect = chai.expect;

describe("Test para ConverTemp", function() {

  var fin = document.getElementById("resultado");
  var ini = document.getElementById("inicial");

    it("Debería ser: 32e4F", function() {
      var temp = new Temperatura();
      temp.set_valor(32e4);
      temp.set_tipo("F");

      expect(temp.get_valor()).to.equal(32e4);
      expect(temp.get_tipo()).to.equal("F");
    });

    it("Debería ser: -4.3e-2C", function() {
      var temp = new Temperatura();
      temp.set_valor(-4.3e-2);
      temp.set_tipo("C");

      expect(temp.get_valor()).to.equal(-4.3e-2);
      expect(temp.get_tipo()).to.equal("C");
    });

    it("0.032C === 32.0576F", function() {
      var temp = new Temperatura();
      temp.set_valor(0.032);
      temp.set_tipo("C");
      var res = temp.conversor();

      expect(res).to.equal("El resultado es: 32.0576 F");
    });

    it("inicializador()", function() {
      var temp = new Temperatura();
      temp.inicializador("0.032C");

      expect(temp.get_valor()).to.equal(0.032);
      expect(temp.get_tipo()).to.equal("C");
    });

    it("32,0576F === 0.032C", function() {
      var temp = new Temperatura();
      temp.set_valor(32.0576);
      temp.set_tipo("F");
      var res = temp.conversor();

      expect(res).to.equal("El resultado es: 0.032000000000000424 C");
    });

    it("convertir()", function() {
      window.onload = function() {
        ini.value = "0C";
        convertir();

        expect(resultado.innerHTML).to.equal("El resultado es: 32.0576 F");
      }
    });
});
