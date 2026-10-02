// BAD: the shelter knows too many details.
public admit(survivor: Survivor): void {
  this.survivors.push(survivor);

  this.logisticsService.updateFoodConsumption(this.id);
  this.medicalService.scheduleCheckup(survivor.id);
  this.commandService.updateMap(this.id, this.currentCount);
}
