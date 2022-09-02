export const Event = () => `
<main>
  <h1 class="no-event">No current events</h1>

  <div class="pastEvents futureEvents">
    <h2>Past Events</h2>
    <div class="buttons futureButtons">
      <a href="#/padel-event">
        <div class="button" style="font-size:smaller;">Padel Up Men’s Fundraising Tournament</div>
      </a>
    </div>
  </div>
</main>
`;

const mainEvent = `
<main>
  <h1 class="eventh1">Events</h1>
  <a href="#/main-event" class="event-page">
    <div class="button bigEventButton">Current Event</div>
  </a>
</main>`;

const future = `<div class="futureEvents">
    <h2>Future Events</h2>
    <div class="buttons futureButtons">
      <a href="#/events">
        <div class="button">Future Event 1</div>
      </a>
      <a href="#/events">
        <div class="button">Future Event 2</div>
      </a>
      <a href="#/events">
        <div class="button">Future Event 3</div>
      </a>
    </div>
  </div>
  <div class="pastEvents futureEvents">
    <h2>Past Events</h2>
    <div class="buttons futureButtons">
      <a href="#/events">
        <div class="button">Past Event 1</div>
      </a>
      <a href="#/events">
        <div class="button">Past Event 2</div>
      </a>
      <a href="#/events">
        <div class="button">Past Event 3</div>
      </a>
    </div>
  </div>`;
