module.exports = function(event, world) {
  console.log(`Extenception: ${event.name}`);
  console.log(event);
  console.log(world);
}
