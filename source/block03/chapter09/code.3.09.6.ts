interface BusEventos {
  publish(evento: EventoDominio): Promise<void>;
  // Registra qué hacer cuando llegue un tipo de evento.
  on<T extends EventoDominio["tipo"]>(
    tipo: T,
    suscriptor: (
      evento: Extract<EventoDominio, { tipo: T }>
    ) => Promise<void> | void
  ): void;
}
