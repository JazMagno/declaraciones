import React from "react";
import OtrosIngresosForm from "./OtrosIngresos";
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
  catTipoMoneda,
  catMedidaPlazo
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class OtrosIngresos extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_otros_ingresos: info.ingresos.otros_ingresos[0],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catSectorIndustria: [],
      catTiposActividades: [],
      catTipoMoneda: [],
      catMedidaPlazo: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catMunicipios().then(data => {
      this.setState({ catMunicipios: data });
    });
    catLocalidades().then(data => {
      this.setState({ catLocalidades: data });
    });
    catTipoVialidad().then(data => {
      this.setState({ catTipoVialidad: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catTiposActividades().then(data => {
      this.setState({ catTiposActividades: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
    catMedidaPlazo().then(data => {
      this.setState({ catMedidaPlazo: data });
    });
  }

  setDataOtrosIngresos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_otros_ingresos.curp = valor;
        break;
      case "descripcion_actividad":
        data.datos_otros_ingresos.descripcion_actividad = valor;
        break;
      case "id":
        data.datos_otros_ingresos.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_otros_ingresos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_otros_ingresos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_otros_ingresos.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_otros_ingresos.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_otros_ingresos.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.datos_otros_ingresos.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.datos_otros_ingresos.observaciones = valor;
        break;
      case "rfc":
        data.datos_otros_ingresos.rfc = valor;
        break;
      case "sector_industria":
        data.datos_otros_ingresos.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad":
        data.datos_otros_ingresos.tipo_actividad = getData(
          catTiposActividades,
          valor
        );
        break;

      /////////////////////////////  domicilio_actividad  /////////////////////////////////////
      case "pais":
        data.datos_otros_ingresos.domicilio_actividad.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_otros_ingresos.domicilio_actividad.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_otros_ingresos.domicilio_actividad.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_otros_ingresos.domicilio_actividad.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_otros_ingresos.domicilio_actividad.cp = valor;
        break;
      case "localidad":
        data.datos_otros_ingresos.domicilio_actividad.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_otros_ingresos.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_otros_ingresos.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_otros_ingresos.domicilio_actividad.numExt = valor;
        break;
      case "numInt":
        data.datos_otros_ingresos.domicilio_actividad.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickOtrosIngresos = () => {
    let data = Object.assign({}, this.state.datos_otros_ingresos);
    let info = Object.assign({}, clean.ingresos.otros_ingresos[0]);

    this.setState(
      {
        otros_ingresos: [...this.state.otros_ingresos, data],
        datos_otros_ingresos: info
      },
      () => {
        console.log(this.state.otros_ingresos);
      }
    );
  };

  removeClickOtrosIngresos = index => event => {
    this.state.otros_ingresos.splice(index, 1);
    this.setState({ otros_ingresos: this.state.otros_ingresos }, () => {
      // console.log(this.state.otros_ingresos);
    });
  };

  render() {
    return (
      <OtrosIngresosForm
        data={this.state}
        handleChange={this.setDataOtrosIngresos}
        addClick={this.addClickOtrosIngresos}
        removeClick={this.removeClickOtrosIngresos}
      />
    );
  }
}

export default OtrosIngresos;
