import React from "react";

import {
  getData,
  catPaises,
  getEntidadesFederativas,
  catEntidadesFederativas,
  getMunicipios,
  catMunicipios,
  getLocalidades,
  catLocalidades,
  catTipoVialidad,
  catRelacionDeclarante,
  catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";
import DependientesEconomicosForm from "./DependientesEconomicos";

class DependientesEconomicos extends React.Component {
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
      catRelacionDeclarante: [],
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

  setDataDependientesEconomicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "tipo_relacion":
        data.datos_dependientes_economicos.tipo_relacion = getData(
          catRelacionDeclarante,
          valor
        );
        break;
      case "nombre_personal.nombres":
        data.datos_dependientes_economicos.nombre_personal.nombres = valor;
        break;
      case "nombre_personal.primer_apellido":
        data.datos_dependientes_economicos.nombre_personal.primer_apellido = valor;
        break;
      case "nombre_personal.segundo_apellido":
        data.datos_dependientes_economicos.nombre_personal.segundo_apellido = valor;
        break;
      case "nacionalidades":
        data.dependientes_economicos_nacionlidades = valor;
        let nacionalidad = [];
        for (var index in data.dependientes_economicos_nacionlidades) {
          nacionalidad.push(
            getData(
              catPaises,
              data.dependientes_economicos_nacionlidades[index]
            )
          );
        }

        data.datos_dependientes_economicos.nacionalidades = nacionalidad;
        break;
      case "curp":
        data.datos_dependientes_economicos.curp = valor;
        break;
      case "rfc":
        data.datos_dependientes_economicos.rfc = valor;
        break;
      case "fecha_nacimiento":
        data.datos_dependientes_economicos.fecha_nacimiento = valor;
        break;
      case "numero_identificacion_nacional":
        data.datos_dependientes_economicos.numero_identificacion_nacional = valor;
        break;

      case "habita_domicilio_declarante":
        data.datos_dependientes_economicos.habita_domicilio_declarante = !data
          .datos_dependientes_economicos.habita_domicilio_declarante;
        break;
      case "medio_contacto":
        data.datos_dependientes_economicos.medio_contacto = valor;
        break;
      case "ingresos_propios":
        data.datos_dependientes_economicos.ingresos_propios = !data
          .datos_dependientes_economicos.ingresos_propios;
        break;
      case "ocupacion_profesion":
        data.datos_dependientes_economicos.ocupacion_profesion = valor;
        break;
      case "sector_industria":
        data.datos_dependientes_economicos.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "proveedor_contratista_gobierno":
        data.datos_dependientes_economicos.proveedor_contratista_gobierno = !data
          .datos_dependientes_economicos.proveedor_contratista_gobierno;
        break;
      case "tiene_intereses_mismo_sector_declarante":
        data.datos_dependientes_economicos.tiene_intereses_mismo_sector_declarante = !data
          .datos_dependientes_economicos
          .tiene_intereses_mismo_sector_declarante;
        break;
      case "desarrolla_cabildeo_sector_declarante.respuesta":
        data.datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante.respuesta = !data
          .datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante
          .respueta;
        break;

      case "desarrolla_cabildeo_sector_declarante.observaciones":
        data.datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante.observaciones = valor;
        break;
      case "observaciones":
        data.datos_dependientes_economicos.observaciones = valor;
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.datos_dependientes_economicos.domicilio.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_dependientes_economicos.domicilio.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_dependientes_economicos.domicilio.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_dependientes_economicos.domicilio.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_dependientes_economicos.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_dependientes_economicos.domicilio.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_dependientes_economicos.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_dependientes_economicos.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_dependientes_economicos.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_dependientes_economicos.domicilio.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickDependientesEconomicos = () => {
    let data = Object.assign({}, this.state.datos_dependientes_economicos);
    let info = Object.assign(
      {},
      clean.informacion_personal.dependientes_economicos[0]
    );

    this.setState(
      {
        dependientes_economicos: [...this.state.dependientes_economicos, data],
        datos_dependientes_economicos: info
      },
      () => {
        console.log(this.state.dependientes_economicos);
      }
    );
  };

  removeClickDependientesEconomicos = index => event => {
    this.state.dependientes_economicos.splice(index, 1);
    this.setState(
      { dependientes_economicos: this.state.dependientes_economicos },
      () => {
        // console.log(this.state.dependientes_economicos);
      }
    );
  };

  render() {
    return (
      <DependientesEconomicosForm
        data={this.state}
        handleChange={this.setDataDependientesEconomicos}
        addClick={this.addClickDependientesEconomicos}
        removeClick={this.removeClickDependientesEconomicos}
      />
    );
  }
}

export default DependientesEconomicos;