const fs = require("fs");
const processesJSON = require("./processes.json");

const data = [...processesJSON];

const result = data.map((data) => {
  const nome =
    data.state.stateToPersist.context.actors[3].stateToPersist.context.data
      .modalFieldsToSent.nameEngaged1 +
    "; " +
    data.state.stateToPersist.context.actors[3].stateToPersist.context.data
      .modalFieldsToSent.nameEngaged2;
  const emails =
    data.state.stateToPersist.context.actors[3].stateToPersist.context.data
      .modalFieldsToSent.emailEngaged1 +
    "; " +
    data.state.stateToPersist.context.actors[3].stateToPersist.context.data
      .modalFieldsToSent.emailEngaged2;
  const sala =
    data.state.stateToPersist.context.actors[0].stateToPersist.context.data.room
      .displayName;

  const date1 =
    data.state.stateToPersist.context.actors[1].stateToPersist.context.data
      .scheduleConfirmation.date +
    " as " +
    data.state.stateToPersist.context.actors[1].stateToPersist.context.data
      .scheduleConfirmation.time +
    " ate " +
    data.state.stateToPersist.context.actors[1].stateToPersist.context.data
      .scheduleConfirmation.endTime;

  const dataCerimonia = date1.includes(undefined, undefined)
    ? data.state.stateToPersist.context.actors[1].stateToPersist.context.data
        .chosenReligiousDate.humanReadableDate + " - CASAMENTO RELIGIOSO "
    : date1;

  const date2 =
    data.state.stateToPersist.context.actors[1].stateToPersist.context.data
      .scheduleConfirmation.dateCreated + "";

  const dataAgendamento = date2.includes(undefined, undefined)
    ? "N/A"
    : date2 ? date : date ? date : date

  return { nome, emails, sala, dataCerimonia, dataAgendamento };
});

console.log(result);

fs.writeFileSync("pendantProcesses.json", JSON.stringify(result));
