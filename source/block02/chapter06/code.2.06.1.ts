type NivelRiesgo = "cuarentena" | "observacion" | "sin_riesgo";

class ResultadoExposicion {
  private constructor(
    private readonly _nivelRiesgo: NivelRiesgo
  ) {}

  static cuarentena(): ResultadoExposicion {
    return new ResultadoExposicion("cuarentena");
  }

  static observacion(): ResultadoExposicion {
    return new ResultadoExposicion("observacion");
  }

  static sinRiesgo(): ResultadoExposicion {
    return new ResultadoExposicion("sin_riesgo");
  }

  get nivelRiesgo(): NivelRiesgo { return this._nivelRiesgo; }

  requiereCuarentena(): boolean {
    return this._nivelRiesgo === "cuarentena";
  }
}
