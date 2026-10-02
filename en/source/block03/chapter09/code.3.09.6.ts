interface EventBus {
  publish(event: DomainEvent): Promise<void>;
  // Register what to do when a type of event arrives.
  on<T extends DomainEvent["type"]>(
    type: T,
    subscriber: (
      event: Extract<DomainEvent, { type: T }>
    ) => Promise<void> | void
  ): void;
}
