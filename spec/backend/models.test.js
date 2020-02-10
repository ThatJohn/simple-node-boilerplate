const { Reservation } = require('../../models');
const req = {
  body: {
    name: "John",
    slot: new Date("Wed Feb 12 2020 17:14:33 GMT-0500"),
  }
}

test("Reservation.all() should return an array", async () => {
  const result = await Reservation.all() || [];
  expect(result.length).toEqual(17);
});

test("Reservation.duplicates() should return an array", async () => {
  const result = await Reservation.duplicates() || [];
  expect(result.length).toEqual(8);
});

test("Reservation.new() should return an array", async () => {
  const result = await Reservation.new(req) || [];
  expect(result.name).toEqual("John");
});

test("Reservation.new() should return an array", async () => {
  const result = await Reservation.new(req) || [];
  expect(result.slot).toEqual(new Date("2020-02-12T22:14:33.000Z"));
});