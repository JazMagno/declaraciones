import React from "react";
import SueldosSalariosOtrosEmpleos from "./SueldosSalariosOtrosEmpleos";
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
  catSectorIndustria,
  catTiposActividades,
  catTiposMonedas,
  catMedidasPlazos
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class SueldosSalariosOtrosEmpleos extends React.Component {
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

  setDataSueldosSalariosOtrosEmpleos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_sueldos_salarios_otros_empleos.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_sueldos_salarios_otros_empleos.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_sueldos_salarios_otros_empleos.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_sueldos_salarios_otros_empleos.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_sueldos_salarios_otros_empleos.observaciones = valor;
        break;
      case "rfc":
        data.datos_sueldos_salarios_otros_empleos.rfc = valor;
        break;
      case "sector_industria":
        data.datos_sueldos_salarios_otros_empleos.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_sueldos_salarios_otros_empleos.tipo_actividad_servicio = getData(
          catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio_persona_paga  /////////////////////////////////////
      case "pais":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.cp = valor;
        break;
      case "localidad":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.numExt = valor;
        break;
      case "numInt":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickSueldosSalariosOtrosEmpleos = () => {
    let data = Object.assign(
      {},
      this.state.datos_sueldos_salarios_otros_empleos
    );
    let info = Object.assign(
      {},
      clean.ingresos.sueldos_salarios_otros_empleos[0]
    );

    this.setState(
      {
        sueldos_salarios_otros_empleos: [
          ...this.state.sueldos_salarios_otros_empleos,
          data
        ],
        datos_sueldos_salarios_otros_empleos: info
      },
      () => {
        console.log(this.state.sueldos_salarios_otros_empleos);
      }
    );
  };

  removeClickSueldosSalariosOtrosEmpleos = index => event => {
    this.state.sueldos_salarios_otros_empleos.splice(index, 1);
    this.setState(
      {
        sueldos_salarios_otros_empleos: this.state
          .sueldos_salarios_otros_empleos
      },
      () => {
        // console.log(this.state.sueldos_salarios_otros_empleos);
      }
    );
  };

  render() {
    return (
      <SueldosSalariosOtrosEmpleos
        data={this.state}
        handleChange={this.setDataSueldosSalariosOtrosEmpleos}
        addClick={this.addClickSueldosSalariosOtrosEmpleos}
        removeClick={this.removeClickSueldosSalariosOtrosEmpleos}
      />
    );
  }
}

export default SueldosSalariosOtrosEmpleos;