import moment from "moment";

export var data = {
  debug: true,
  show: 3,
  message: "",
  type: "",
  ciudades: [],
  entidades: [],
  municipios: [],
  localidades: [],
  tipovialidad: [],
  estadosciviles: [],
  documentoObtenido: [],
  estatusEstudio: [],
  regimen: [],
  startDate: moment(),
  informacion_general_nacionalidades: [],
  informacion_general: {
    nombres: "",
    primer_apellido: "",
    segundo_apellido: "",
    nacionalidades: [],
    pais_nacimiento: {
      valor: "",
      codigo: ""
    },
    entidad_federativa_nacimiento: {
      nom_ent: "",
      cve_ent: ""
    },
    curp: "",
    rfc: "",
    fecha_nacimiento: "",
    numero_identificacion_oficial: "",
    correo_electronico: {
      personal: "",
      laboral: ""
    },
    telefono: {
      particular: "",
      celular: ""
    },
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
      },
      cp: "",
      localidad: {
        nom_loc: "",
        cve_loc: ""
      },
      vialidad: {
        tipo_vial: "",
        nom_vial: ""
      },
      numExt: "",
      numInt: ""
    },
    estado_civil: {
      codigo: "",
      valor: ""
    },
    regimen_matrimonial: {
      codigo: "",
      valor: ""
    },
    fecha_declaracion: ""
  },
  datos_curriculares_grados_academicos: {
    grado_obtenido: "",
    institucion_educativa: "",
    lugar_institucion_educativa: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad: {
        nom_ent: "",
        cve_ent: ""
      }
    },
    carrera: "",
    estatus: {
      codigo: "",
      valor: ""
    },
    ano_conclusion: "",
    documento_obtenido: {
      codigo: "",
      valor: ""
    },
    cedula_profesional: ""
  },
  datos_curriculares: {
    grado_maximo_escolaridad: "Licenciatura",
    grados_academicos: []
  },
  datos_encargo_actual: {
    ente_publico: "Presidencia de la República",
    empleo_cargo_comision: "Director General de Datos Abiertos",
    nivel_gobierno: {
      codigo: "EST",
      valor: "Estatal"
    },
    poder_juridico: {
      codigo: "JUD",
      valor: "Judicial"
    },
    contratado_honorarios: true,
    nivel_encargo: "CA0001",
    area_adscripcion: "Unidad de Política Regulatoria",
    fecha_posesion: "2010-07-26",
    lugar_ubicacion: {
      pais: {
        valor: "México",
        codigo: "MX"
      },
      entidad: {
        nom_ent: "México",
        cve_ent: "15"
      }
    },
    direccion_encargo: {
      pais: {
        valor: "México",
        codigo: "MX"
      },
      entidad_federativa: {
        nom_ent: "México",
        cve_ent: "15"
      },
      municipio: {
        nom_mun: "Ecatepec de Morelos",
        cve_mun: "033"
      },
      cp: "55018",
      localidad: {
        nom_loc: "Ecatepec de Morelos",
        cve_loc: "0001"
      },
      vialidad: {
        tipo_vial: "CALLE",
        nom_vial: "El Rosal"
      },
      numExt: "24",
      numInt: "48"
    },
    telefono_laboral: {
      numero: "+525510203040",
      extension: 1020
    },
    sector_industria: {
      codigo: "SFS",
      valor: "Servicios de salud y asistencia social"
    },
    funciones_principales: [
      {
        codigo: "ABI",
        valor: "Administración de bienes"
      }
    ]
  },
  experiencia_laboral: [
    {
      ambito: {
        codigo: "Pub",
        valor: "Público"
      },
      nivel_gobierno: {
        codigo: "EST",
        valor: "Estatal"
      },
      poder_ente: {
        codigo: "JUD",
        valor: "Judicial"
      },
      nombre_institucion: "Instituto Federal de Telecomunicaciones",
      unidad_administrativa: "Unidad de Política Regulatoria",
      direccion: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      jerarquia_rango: "string",
      cargo_puesto: "Jefe de Departamento",
      fecha_ingreso: "2010-07-26",
      fecha_salida: "2010-07-26",
      funciones_principales: [
        {
          codigo: "ABI",
          valor: "Administración de bienes"
        }
      ]
    }
  ],
  dependientes_economicos: [
    {
      nombre_personal: {
        nombres: "Carlos",
        primer_apellido: "Pérez",
        segundo_apellido: "López"
      },
      tipo_relacion: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "2010-07-26",
      numero_identificacion_nacional: "ABCD1234",
      habita_domicilio_declarante: true,
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      medio_contacto: "usuario@correo.com",
      ingresos_propios: true,
      ocupacion_profesion: "Administrador de empresas",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      proveedor_contratista_gobierno: true,
      tiene_intereses_mismo_sector_declarante: true,
      desarrolla_cabildeo_sector_declarante: true,
      beneficiario_programa_publico: [
        {
          nombre_programa: "Prospera",
          institucion_otorga_apoyo: "XE-IPN Canal 11",
          tipo_apoyo: "Servicio",
          valor_apoyo: 4000
        }
      ],
      observaciones: "Esto es una observación"
    }
  ],

  nombres: "",
  primer_apellido: "",
  segundo_apellido: "",
  nacionalidad: [],
  nacionalidades: [
    {
      valor: "",
      codigo: ""
    }
  ],
  pais_nacimiento_valor: "",
  pais_nacimiento: {
    valor: "",
    codigo: ""
  },
  entidad_federativa_nacimiento: {
    nom_ent: "",
    cve_ent: ""
  },
  curp: "",
  rfc: "",
  fecha_nacimiento: "",
  numero_identificacion_oficial: "",
  correo_electronico: {
    personal: "",
    laboral: ""
  },
  telefono: {
    personal: "",
    celular: ""
  },

  estado_civil: {
    codigo: "",
    valor: ""
  },

  dom_pais: {
    valor: "",
    codigo: ""
  },
  dom_entidad_federativa: {
    nom_ent: "",
    cve_ent: ""
  },
  dom_municipio: {
    nom_mun: "",
    cve_mun: ""
  },
  dom_localidad: {
    nom_loc: "",
    cve_loc: ""
  },
  dom_cp: "",
  dom_vialidad: {
    codigo: "",
    valor: "",
    tipo_vial: "",
    nom_vial: ""
  },
  dom_numExt: "",
  dom_numInt: "",

  regimen_matrimonial: {
    codigo: "",
    valor: ""
  },
  domicilio: {
    pais: {
      valor: "México",
      codigo: "MX"
    },
    entidad_federativa: {
      nom_ent: "México",
      cve_ent: "15"
    },
    municipio: {
      nom_mun: "Ecatepec de Morelos",
      cve_mun: "033"
    },
    cp: "55018",
    localidad: {
      nom_loc: "Ecatepec de Morelos",
      cve_loc: "0001"
    },
    vialidad: {
      tipo_vial: "CALLE",
      nom_vial: "El Rosal"
    },
    numExt: "24",
    numInt: "48"
  },
  fecha_declaracion: "",

  datos_dependientes_economicos: [
    {
      nombres: "Carlos",
      primer_apellido: "Pérez",
      segundo_apellido: "López",
      tipo_relacion: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      nacionalidad: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "31/07/1980",
      numero_identificacion_nacional: "ABCD1234",
      habita_domicilio_declarante: true,
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      medio_contacto: "usuario@correo.com",
      ingresos_propios: true,
      ocupacion_profesion: "Administrador de empresas",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      proveedor_contratista_gobierno: true,
      tiene_intereses_mismo_sector_declarante: true,
      desarrolla_cabildeo_sector_declarante: true,
      beneficiario_programa_publico: [
        {
          nombre_programa: "Prospera",
          institucion_otorga_apoyo: "XE-IPN Canal 11",
          tipo_apoyo: "Servicio",
          valor_apoyo: 4000
        }
      ],
      observaciones: "Esto es una observación"
    }
  ],
  empresas_sociedades_asociaciones: [
    {
      id: 123,
      nombre_empresa_sociedad_asociacion: "DataIQ",
      pais_registro: {
        valor: "México",
        codigo: "MX"
      },
      fecha_constitucion: "31/07/1980",
      numero_registro: "ABC123",
      rfc: "GOAP780710RH7",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      rol: "Dueño",
      actividad_economica: true,
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      porcentaje_participacion: 70
    }
  ],
  membresias: [
    {
      id: 123,
      tipo_institucion: {
        codigo: "ASC",
        valor: "Asociaciones civiles"
      },
      nombre_institucion: "Asociacion A.C",
      naturaleza_membresia: {
        codigo: "ASC",
        valor: "Asociaciones civiles"
      },
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      puesto_rol: "Titular",
      fecha_inicio: "2010-07-26",
      pagado: true,
      observaciones: "Esto es una observación"
    }
  ],
  apoyos_beneficios_publicos: [
    {
      id: 123,
      es_beneficiario: true,
      programa:
        "Programa de Estímulos Económicos a Deportistas del Distrito Federal",
      institucion_otorgante: "Instituto del Deporte del Distrito Federal ",
      nivel_orden_gobierno: {
        codigo: "EST",
        valor: "Estatal"
      },
      tipo_apoyo: "Servicio",
      valor_anual_apoyo: 7500,
      observaciones: "Esto es una observación"
    }
  ],
  representacion_activa: [
    {
      id: 123,
      tipo_representacion: {
        codigo: "APOD",
        valor: "Apoderado"
      },
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      nombre_parte_representada: "Cecilia Gómez Urrutia",
      curp_parte: "BEML920313HMCLNS09",
      rfc_parte: "GOAP780710RH7",
      fecha_nacimiento_parte: "2010-07-26",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_inicio: "2010-07-26",
      pagado: true,
      observaciones: "Esto es una observación"
    }
  ],
  representacion_pasiva: [
    {
      id: 123,
      tipo_representacion: {
        codigo: "APOD",
        valor: "Apoderado"
      },
      nombre: "Augusto Fernández Castro",
      fecha_inicio_representacion: "2010-07-26",
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "2010-07-26",
      tiene_intereses: true,
      ocupacion_profesion: "Contador",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      observaciones: "Esto es una observación"
    }
  ],
  socios_comerciales: [
    {
      id: 123,
      nombre_actividad: "Actividad",
      tipo_vinculo: "Socio",
      antiguedad_vinculo: 20,
      rfc_entidad: "GOAP780710RH7",
      nombre: "Armando Rodríguez Saes",
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      lugar_nacimiento: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad: {
          nom_ent: "México",
          cve_ent: "15"
        }
      },
      fecha_nacimiento: "2010-07-26",
      porcentaje_participacion: 70,
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      observaciones: "Esto es una observación"
    }
  ],
  clientes_principales: [
    {
      id: 123,
      nombre_negocio: "Nombre negocio",
      numero_Registro: "HTC896DSFA",
      dueno_encargado: "Salvador Hernández Torres",
      nombre: "AMEX.S.A.",
      rfc: "GOAP780710RH7",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      porcentaje_participacion: 70,
      observaciones: "Esto es una observación"
    }
  ],
  otras_partes: [
    {
      id: 123,
      tipo_relacion: "Garantes de Préstamos Recibidos",
      nombre_denominacion_parte: "Sergio Rodríguez",
      fecha_inicio_relacion: "2010-07-26",
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "2010-07-26",
      ocupacion: "Administrador de empresas",
      tiene_interes: true,
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      observaciones: "Esto es una observación"
    }
  ],
  beneficios_gratuitos: [
    {
      id: 123,
      tipo_beneficio: "Tarjetas o monederos electrónicos",
      origen_beneficio: "Prestación laboral",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      valor_beneficio: 1256,
      observaciones: "Esto es una observación"
    }
  ],
  sueldos_salarios_publicos: [
    {
      id: 123,
      ente_publico: {
        valor: "Secretaría de Gobernación",
        codigo: "SEGOB"
      },
      rfc: "GOAP780710RH7",
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  sueldos_salarios_otros_empleos: [
    {
      id: 123,
      nombre_denominacion_razon_social: "Max Power Inc.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Servicio profesional de TI",
      domicilio_persona_paga: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  actividad_profesional: [
    {
      id: 123,
      nombre_denominacion_razon_social: "Nombre",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_persona_paga: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  actividad_empresarial: [
    {
      id: 123,
      nombre_denominacion_razon_social: "Empresa S.A.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_actividad_empresarial: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  actividad_economica_menor: [
    {
      id: 123,
      nombre_denominacion_razon_social: "Nombre",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_actividad: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  arrendamiento: [
    {
      id: 123,
      nombre_denominacion_razon_social: "ABC Inc.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_actividad: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  intereses: [
    {
      id: 123,
      nombre_denominacion_razon_social: "BANC S.A.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  premios: [
    {
      id: 123,
      nombre_denominacion: "Loteria Nacional",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_premio: "Descripción del servicio",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  enajenacion_bienes: [
    {
      id: 123,
      nombre_denominacion: "Loteria Nacional",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      tipo_bien: "Inmueble",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_bien: "Descripción del servicio",
      domicilio_bien_enajenado: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  otros_ingresos: [
    {
      id: 123,
      nombre_denominacion: "Centro Educativo",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad: "Descripción del servicio",
      domicilio_actividad: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  bienes_inmuebles: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_bien: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      superficie_terreno: 300,
      superficie_construccion: 100,
      titular: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_propiedad: 70,
      nombre_copropietario: {
        nombres: "Carlos",
        primer_apellido: "Pérez",
        segundo_apellido: "string"
      },
      identificacion_bien: {
        numero_escritura_publica: 202020,
        numero_registro_publico: 404040,
        folio_real: "jsjs74747",
        fecha_contrato: "2010-07-26"
      },
      domicilio_bien: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      nombre_denominacion_quien_adquirio: "Monster Inc.",
      rfc_quien_adquirio: "GOAP780710RH7",
      curp_quien_adquirio: "BEML920313HMCLNS09",
      relacion_persona_adquirio: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_adquisicion: "2010-07-26",
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      valor_catastral: 800,
      observaciones: "Esto es una observación"
    }
  ],
  bienes_muebles_registrables: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_bien_mueble: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      marca: "NISSAN",
      submarca: "RS-122234",
      modelo: 2018,
      numero_serie: "6545243-4334",
      lugar_registro: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad: {
          nom_ent: "México",
          cve_ent: "15"
        }
      },
      titular_bien: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_propiedad: 70,
      nombres_copropietarios: ["Monstr Inc."],
      numero_registro_vehicular: 455000,
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      nombre_denominacion_adquirio: "Monstr Inc.",
      rfc_quien_adquirio: "GOAP780710RH7",
      relacion_persona_quien_adquirio: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_adquisicion: "2010-07-26",
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      observaciones: "Esto es una observación"
    }
  ],
  bienes_muebles_no_registrables: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_bien: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      descripcion: "Con descripción",
      titular_bien: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_propiedad: 70,
      nombres_copropietarios: ["Monstr Inc."],
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      nombre_denominacion_adquirio: "Tesl Mtr Inc.",
      relacion_quien_adquirio: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      fecha_adquisicion: "2010-07-26",
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      observaciones: "Esto es una observación"
    }
  ],
  inversiones_cuentas_valores: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_inversion: {
        codigo: "VALS",
        valor: "Valores"
      },
      tipo_especifico_inversion: {
        codigo: "VALRS",
        valor: "Valores"
      },
      numero_cuenta: "GFHRTY788778",
      nacional_extranjero: {
        valor: "México",
        codigo: "MX"
      },
      nombre_institucion: "Bank Inkc",
      rfc_institucion: "GOAP780710RH7",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      domicilio_institucion: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      fecha_inicio: "2010-07-26",
      monto_original: 80000,
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      tasa_interes: 10,
      saldo_anual: 5000,
      plazo: 6,
      unidad_medida_plazo: {
        codigo: "MESS",
        valor: "Meses"
      },
      titular_bien: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_inversion: 70,
      observaciones: "Esto es una observación"
    }
  ],
  efectivo_metales: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      monto: 78555,
      tipo_metal: {
        codigo: "ORO",
        valor: "Oro"
      },
      unidades: 100,
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      observaciones_comentarios: "Esto es una observación"
    }
  ],
  fideicomisos: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      identificador_fideicomiso: "93232",
      tipo_fideicomiso: {
        codigo: "GARNT",
        valor: "Garantía"
      },
      objetivo: "Objetivo del fideicomiso",
      numero_registro: "788544abc",
      fecha_creacion: "2010-07-26",
      vigencia: "2010-07-26",
      residencia: {
        valor: "México",
        codigo: "MX"
      },
      valor: 78555555,
      moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      porcentaje_propiedad_derechos_fiduciarios: 70,
      ingreso_monetario_obtenido: 56666,
      institucion_fiduciaria: "Banco de México",
      fideicomitente: {
        nombre: "Banco Robmen1",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        domicilio: {
          pais: {
            valor: "México",
            codigo: "MX"
          },
          entidad_federativa: {
            nom_ent: "México",
            cve_ent: "15"
          },
          municipio: {
            nom_mun: "Ecatepec de Morelos",
            cve_mun: "033"
          },
          cp: "55018",
          localidad: {
            nom_loc: "Ecatepec de Morelos",
            cve_loc: "0001"
          },
          vialidad: {
            tipo_vial: "CALLE",
            nom_vial: "El Rosal"
          },
          numExt: "24",
          numInt: "48"
        },
        fecha_constitucion: "2010-07-26"
      },
      fideicomisario: {
        nombre: "Banco Robmen1",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        domicilio: {
          pais: {
            valor: "México",
            codigo: "MX"
          },
          entidad_federativa: {
            nom_ent: "México",
            cve_ent: "15"
          },
          municipio: {
            nom_mun: "Ecatepec de Morelos",
            cve_mun: "033"
          },
          cp: "55018",
          localidad: {
            nom_loc: "Ecatepec de Morelos",
            cve_loc: "0001"
          },
          vialidad: {
            tipo_vial: "CALLE",
            nom_vial: "El Rosal"
          },
          numExt: "24",
          numInt: "48"
        },
        fecha_constitucion: "2010-07-26"
      },
      fiduciario: {
        nombre: "Banco Robmen1",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        domicilio: {
          pais: {
            valor: "México",
            codigo: "MX"
          },
          entidad_federativa: {
            nom_ent: "México",
            cve_ent: "15"
          },
          municipio: {
            nom_mun: "Ecatepec de Morelos",
            cve_mun: "033"
          },
          cp: "55018",
          localidad: {
            nom_loc: "Ecatepec de Morelos",
            cve_loc: "0001"
          },
          vialidad: {
            tipo_vial: "CALLE",
            nom_vial: "El Rosal"
          },
          numExt: "24",
          numInt: "48"
        },
        fecha_constitucion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    }
  ],
  bienes_intangibles: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      propietario_registrado: "Sergio Perez",
      descripcion: "Aquí va una descripción",
      ente_publico_encargado: {
        nombres: "Carlos",
        primer_apellido: "Pérez",
        segundo_apellido: "López"
      },
      numero_registro: 754444,
      fecha_registro: "2010-07-26",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      fecha_vencimiento: "2010-07-26",
      porcentaje_copropiedad: 70,
      precio_total_copropiedad: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      nombre_copropietario: "Vien Inc,",
      porcentaje_propiedad_copropietario: 70,
      observaciones: "Esto es una observación"
    }
  ],
  cuentas_por_cobrar: [
    {
      id: 123,
      nombre_prestatario: "Max Power Tier",
      numero_registro: "488755avvv",
      domicilio_prestatarios: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_prestamo: "2010-07-26",
      monto_original_prestamo: 488844,
      tasa_interes: 10.01,
      saldo_pendiente: 4555,
      fecha_vencimiento: "2010-07-26",
      porcentaje_copropiedad: 70,
      nombre_copropietario: "Max Power Bansky",
      observaciones: "Esto es una observación"
    }
  ],
  uso_especie_propiedad_tercero: [
    {
      id: 123,
      tipo_bien: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      valor_mercado: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      nombre_tercero_propietario: "Bansky Von Trier",
      rfc_tercero_propietario: "GOAP780710RH7",
      curp_tercero_propietario: "BEML920313HMCLNS09",
      relacion_persona: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_inicio: "2010-07-26",
      domicilio_persona: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      observaciones: "Esto es una observación"
    }
  ],
  deudas: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_acreedor: {
        codigo: "INSTF",
        valor: "Institución Financiera"
      },
      tipo_adeudo: {
        codigo: "CVH",
        valor: "Compra de vehículo"
      },
      identificador_deuda: "CONT12354",
      nacional_extranjero: {
        valor: "México",
        codigo: "MX"
      },
      nombre_acreedor: "PNBKSRIBAS S.A. DE C.V",
      rfc_acreedor: "GOAP780710RH7",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      domicilio_acreedor: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      fecha_adeudo: "2010-07-26",
      monto_original: 277900,
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      tasa_interes: 12,
      saldo_pendiente: 28000,
      montos_abonados: [28000],
      plazo_adeudo: 24,
      unidad_medida_adeudo: {
        codigo: "MESS",
        valor: "Meses"
      },
      titularidad_deuda: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_adeudo_titular: 70,
      garantia: true,
      nombre_garante: "Bansky Von Tier",
      observaciones: "Esto es una observación"
    }
  ],
  otras_obligaciones: [
    {
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_acreedor: {
        codigo: "INSTF",
        valor: "Institución Financiera"
      },
      tipo_obligacion: "Ejemplo",
      identificador_obligacion: "FONAET8945",
      nacional_extranjero: {
        valor: "México",
        codigo: "MX"
      },
      nombre_acreedor: "Bansky Hola Adios",
      rfc_acreedor: "GOAP780710RH7",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      domicilio_acreedor: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      fecha_obligacion: "2010-07-26",
      monto_original: 300000,
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      tasa_interes: 12,
      saldo_pendiente: 297000,
      montos_abonados: [28000],
      plazo_obligacion: 360,
      unidad_medida_plazo: {
        codigo: "MESS",
        valor: "Meses"
      },
      titularidad_obligacion: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_obligacion_titular: 70,
      garantia: true,
      observaciones: "Esto es una observación"
    }
  ]
};

export var datos_curriculares_grados_academicos = {
  grado_obtenido: "",
  institucion_educativa: "",
  lugar_institucion_educativa: {
    pais: {
      valor: "",
      codigo: ""
    },
    entidad: {
      nom_ent: "",
      cve_ent: ""
    }
  },
  carrera: "",
  estatus: {
    codigo: "",
    valor: ""
  },
  ano_conclusion: "",
  documento_obtenido: {
    codigo: "",
    valor: ""
  },
  cedula_profesional: ""
};
