interface EventLog {
  log(message: string): void;
}

class ShelterFactory {
  constructor(private readonly eventLog: EventLog) {}

  found(
    name: string,
    coordinates: Coordinates,
    capacity: number
  ): Shelter {
    const shelter = Shelter.found(name, coordinates, capacity);
    this.eventLog.log(
      `Shelter "${name}" founded with capacity ${capacity}`
    );
    return shelter;
  }

  // Special scenario: emergency shelter with fixed capacity.
  improviseInZone(zone: string, coordinates: Coordinates): Shelter {
    const shelter = Shelter.found(`Emergency-${zone}`, coordinates, 10);
    this.eventLog.log(
      `Shelter improvised in zone ${zone}`
    );
    return shelter;
  }
}
