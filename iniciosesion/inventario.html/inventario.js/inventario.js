function agregarProducto() {
  let producto = document.getElementById("nombre").value;
  let categoría = document.getElementById("categoria").value;
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;
  let observaciones = document.getElementById("observaciones").value;

  if (producto == "" || cantidad == "" || precio == "" || observaciones == "") {
    alert(
      "El nombre del producto, la cantidad, el precio y las observaciones no pueden estar vacíos"
    );
    //!=    Diferente//
    //== Igual//
    // > mayor //
    // <. menor//
    //<= menor o igual//
    //>= mayor igual//
    //||  O excluyente//
    //&& si o si//
  }

  if (cantidad <= 0 || precio <= 0) {
    alert("El valor debe ser mayor a 0");
  }
  let detalleInventario = document.getElementById("inventario-body");
  //crear nuevas filas al inventario//
  <tr>
    <td scope="row">Flor Huila</td>
    <td scope="row">Arroz</td>
    <td scope="row">10</td>
    <td scope="row">$15.000</td>
    <td scope="row">$150.000</td>
  </tr>;
}

//console.log(ok)//
