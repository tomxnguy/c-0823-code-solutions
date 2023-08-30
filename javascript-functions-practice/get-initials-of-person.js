/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const initialsOfPerson = person.firstName[0] + person.lastName[0];
  return initialsOfPerson;
}
