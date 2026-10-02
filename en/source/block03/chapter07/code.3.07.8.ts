// Domain: two repositories for the same context.
interface SurvivorRepository {
  save(survivor: Survivor): Promise<void>;
  findById(
    id: string
  ): Promise<Survivor | null>;
}

interface SurvivorSearchRepository {
  findBySymptoms(
    symptoms: string[]
  ): Promise<Survivor[]>;
}

// Infrastructure: two different adapters.
class SurvivorRepositoryPostgreSQL
  implements SurvivorRepository { /* ... */ }

class SurvivorSearchRepositoryElastic
  implements SurvivorSearchRepository { /* ... */ }
