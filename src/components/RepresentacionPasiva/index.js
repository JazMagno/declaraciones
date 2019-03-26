import React from "react";
import RepresentacionPasiva from "./RepresentacionPasiva";
import {
  getData,
catTiposRepresentaciones,
catPaises,
catSectorIndustria,
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class RepresentacionPasiva extends React.Component {
  constructor(props) {
  super(props);

  let info;

  info = clean;
  info = example;

  // this.state = data;
  // this.state.informacion_general =
  //   info.informacion_personal.informacion_general;
  // this.state.entidad_federativa=getSectorIndustria();
  // let catEntidadesFederativas_data = catEntidadesFederativas();

  this.state = {
    datos_curriculares_grados_academicos:
      info.informacion_personal.datos_curriculares.grados_academicos[0],
    catEntidadesFederativas: [],
    catPaises: [],
    catEstatusEstudio: [],
    catDocumentoObtenido: [],
    curriculares_grados_academicos: []
  };

  // console.log("state constructor", this.state);
}

componentDidMount() {
  catEntidadesFederativas().then(data => {
    this.setState({ catEntidadesFederativas: data });
  });
  catPaises().then(data => {
    this.setState({ catPaises: data });
  });
}

setDataRepresentacionPasiva = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    case "curp":
      data.datos_representacion_pasiva.curp = valor;
      break;
    case "fecha_inicio_representacion":
      data.datos_representacion_pasiva.fecha_inicio_representacion = valor;
      break;
    case "fecha_nacimiento":
      data.datos_representacion_pasiva.fecha_nacimiento = valor;
      break;
    case "id":
      data.datos_representacion_pasiva.id = valor;
      break;
    case "nacionalidades_representante":
      data.datos_representacion_pasiva.nacionalidades_representante = valor;
      break;
    case "nombre":
      data.datos_representacion_pasiva.nombre = valor;
      break;
    case "observaciones":
      data.datos_representacion_pasiva.observaciones = valor;
      break;
    case "ocupacion_profesion":
      data.datos_representacion_pasiva.ocupacion_profesion = valor;
      break;
    case "rfc":
      data.datos_representacion_pasiva.rfc = valor;
      break;
    case "sector_industria":
      data.datos_representacion_pasiva.sector_industria = getData(
        catSectorIndustria,
        valor
      );
      break;
    case "tiene_intereses":
      data.datos_representacion_pasiva.tiene_intereses = !data
        .datos_representacion_pasiva.tiene_intereses;
      break;
    case "tipo_representacion":
      data.datos_representacion_pasiva.tipo_representacion.valor = valor;
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};


addClickRepresentacionPasiva = () => {
  let data = Object.assign({}, this.state.datos_representacion_pasiva);
  let info = Object.assign({}, clean.intereses.representacion_pasiva[0]);

  this.setState(
    {
      representacion_pasiva: [...this.state.representacion_pasiva, data],
      datos_representacion_pasiva: info
    },
    () => {
      console.log(this.state.representacion_pasiva);
    }
  );
};


removeClickRepresentacionPasiva = index => event => {
  this.state.representacion_pasiva.splice(index, 1);
  this.setState(
    { representacion_pasiva: this.state.representacion_pasiva },
    () => {
      // console.log(this.state.representacion_pasiva);
    }
  );
};

  render() {
    return (
      <RepresentacionPasiva
        data={this.state}
        handleChange={this.setDataRepresentacionPasiva}
        addClick={this.addClickRepresentacionPasiva}
        removeClick={this.removeClickRepresentacionPasiva}
      />
    );
  }
}

export default RepresentacionPasiva;