// BAD: mutating the object directly. We already protected latitude by
// making it private and exposing it only through a getter, so the
// following line fails the type check.
point1.latitude = 41.3851;

// GOOD: create a new object with the updated values.
const updatedPoint = Coordinates.create(41.3851, point1.longitude);
